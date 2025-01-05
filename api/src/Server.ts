import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

import testConnection from './database/Init.DB';
import app from './App';

// Set the port
const port = process.env.PORT;
const baseUrl = process.env.BASE_URL;

// Start server
const startServer = async () => {
    await testConnection();

    app.listen(port, () => {
        if (process.env.NODE_ENV !== 'production') {
            console.log(`Server is running on ${baseUrl}`);
        }
    });
};

startServer();
