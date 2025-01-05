import path from 'path';
import { createLogger, format, transports } from 'winston';

const { combine, timestamp, printf, errors } = format;

// Custom log format
const logFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} ${level}: ${message}${stack ? '\n' + stack : ''}`;
});

const logger = createLogger({
    level: 'info', // Default log level set to 'info'
    format: combine(
        timestamp(),
        errors({ stack: true }), // Log stack trace
        logFormat
    ),
    transports: [
        // Log errors to a file
        new transports.File({ filename: path.join(__dirname, '..', 'logs', 'error.log'), level: 'error' }),
        // Log all info and above to a separate file
        new transports.File({ filename: path.join(__dirname, '..', 'logs', 'combined.log') })
    ]
});

// Console transport only if not in production
if (process.env.NODE_ENV !== 'production') {
    logger.add(new transports.Console({
        format: combine(
            timestamp(),
            logFormat
        )
    }));
}

export default logger;
