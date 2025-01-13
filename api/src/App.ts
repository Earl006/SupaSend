import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import routes from './routes';
import errorHandler from './middleware/ErrorHandler.Middleware';

// Create Express app
const app = express();

const corsOptions = {
    origin: process.env.FRONTEND_URL,
    credentials: true,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Routes
app.use('/api/v1', routes);

// Use the error handler middleware
app.use(errorHandler);

export default app;
