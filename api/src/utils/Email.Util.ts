import nodemailer, { Transporter } from 'nodemailer';
import ejs from 'ejs';
import path from 'path';
import { EmailOptions } from '../interfaces/EmailOptions.Interface';
import logger from './Logger.Util';

const sendMail = async (options: EmailOptions): Promise<void> => {
	try {
		// Configure the transporter
		const transporter: Transporter = nodemailer.createTransport({
			host: process.env.EMAIL_HOST,
			port: parseInt(process.env.EMAIL_PORT || '587'),
			secure: parseInt(process.env.EMAIL_PORT || '587') === 465, // Use secure for port 465
			auth: {
				user: process.env.EMAIL_NAME,
				pass: process.env.EMAIL_PASSWORD,
			},
			tls: {
				rejectUnauthorized: false,
			},
			socketTimeout: 30000,
			connectionTimeout: 30000,
		});

		// Destructure options
		const { email, subject, template, body, attachments } = options;

		// Resolve the template file path
		const templatePath = path.resolve(__dirname, '../views/emails', template);

		// Render the email template with provided data
		const html: string = await ejs.renderFile(templatePath, body);

		// Email options
		const mailOptions = {
			from: process.env.EMAIL_NAME,
			to: email,
			subject,
			html,
			attachments,
		};

		// Send the email
		const result = await transporter.sendMail(mailOptions);
	} catch (error: any) {
		// Log the error with appropriate level
		logger.error(`Error sending email to ${options.email}: ${error.message}`, { error });
		throw new Error('An error occurred while sending the email. Please try again later.');
	}
};

export default sendMail;
