import prisma from '../config/Prisma.Config';
import logger from '../utils/Logger.Util';

const testConnection = async () => {
    try {
        await prisma.$connect();

        if (process.env.NODE_ENV !== 'production') {
            console.log('Database connected successfully');
        } else {
            logger.info('Database connected successfully');
        }
    } catch (error) {
        if (process.env.NODE_ENV !== 'production') {
            console.error('Database connection failed', error);
            process.exit(1);
        } else {
            logger.error('Database connection failed', error);
        }
    }
};

export default testConnection;
