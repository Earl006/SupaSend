import { Request, Response, NextFunction } from 'express';
import logger from '../utils/Logger.Util';
import { HttpError } from 'http-errors';

// Error handler middleware
const errorHandler = (err: HttpError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.status || 500;
    const message = err.message || 'Internal Server Error';

    // Log error details
    logger.error({
        message,
        statusCode,
        stack: err.stack,
        details: err.expose ? err.message : null, // Avoid exposing sensitive details
        path: req.originalUrl,
        method: req.method
    });

    // Send formatted error response
    res.status(statusCode).json({
        success: false,
        // status: 'error',
        statusCode,
        message,
        code: err.name || 'INTERNAL_SERVER_ERROR'
    });
};

export default errorHandler;
