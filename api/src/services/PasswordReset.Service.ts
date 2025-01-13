import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import createError from 'http-errors';
import prisma from '../config/Prisma.Config';
import sendMail from '../utils/Email.Util';

class PasswordResetService {

    private readonly resetTokenExpiry = 60 * 60 * 1000;

    async generateResetToken(email: string): Promise<void> {
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
            return;
        }

        const rawToken = crypto.randomBytes(32).toString('hex');
        const salt = await bcrypt.genSalt(10);
        const hashedToken = await bcrypt.hash(rawToken, salt);

        await prisma.passwordResetToken.create({
            data: {
                userId: user.id,
                token: hashedToken,
                salt,
                expiresAt: new Date(Date.now() + this.resetTokenExpiry),
            },
        });

        const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${rawToken}`;
        await sendMail({
            email: user.email,
            subject: 'Password Reset Request',
            template: 'PasswordReset.ejs',
            body: {
                name: user.name,
                resetLink,
            },
        });
    }

    async resetPassword(token: string, newPassword: string): Promise<void> {
        const resetToken = await prisma.passwordResetToken.findFirst({
            where: {
                isValid: true,
                expiresAt: { gt: new Date() },
            },
            orderBy: { createdAt: 'desc' },
        });

        if (!resetToken) {
            throw createError(400, 'Invalid or expired reset token.');
        }

        const isValidToken = await bcrypt.compare(token, resetToken.token);

        if (!isValidToken) {
            throw createError(400, 'Invalid reset token.');
        }

        const user = await prisma.user.findUnique({
            where: { id: resetToken.userId },
        });

        if (!user) {
            throw createError(404, 'User not found.');
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        await prisma.$transaction([
            prisma.user.update({
                where: { id: user.id },
                data: { password: hashedPassword, salt },
            }),
            prisma.passwordResetToken.update({
                where: { id: resetToken.id },
                data: { isValid: false },
            }),
        ]);
    }
}

export default PasswordResetService;
