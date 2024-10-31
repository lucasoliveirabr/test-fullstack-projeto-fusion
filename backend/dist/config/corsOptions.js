"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const allowedOrigin = process.env.NODE_ENV === 'production'
    ? 'https://test-fullstack-projeto-fusion.pages.dev'
    : 'http://localhost:5173';
const corsOptions = {
    origin: (origin, callback) => {
        if (origin === allowedOrigin) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200,
};
exports.default = corsOptions;
//# sourceMappingURL=corsOptions.js.map