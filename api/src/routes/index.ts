import { Router } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();

// Dynamically load routes
const loadRoutes = (baseDir: string, basePath: string = '') => {
    const dirPath = path.join(__dirname, baseDir);

    fs.readdirSync(dirPath).forEach((item) => {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            // Process subdirectories (actor-specific routes)
            const actor = item; // Folder name
            loadRoutes(path.join(baseDir, actor), `/${actor}`);
        } else if (item.endsWith('.Routes.ts')) {
            // Process route files
            const route = require(fullPath).default;

            if (!basePath) {
                // Mount public routes
                // router.use('/', route);
                router.use(route);
            } else {
                // Mount actor-specific routes
                router.use(basePath, route);
            }
        }
    });
};

// Load all routes
loadRoutes('.');

export default router;
