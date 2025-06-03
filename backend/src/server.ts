import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import pino from 'pino-http';
import { config } from './config/env';
import { errorHandler } from './middlewares/errorHandler';
import { routes } from './routes';

const app = express();

// Security middlewares
app.use(helmet());
app.use(cors({
  origin: config.cors.origin,
  credentials: true,
}));

// Rate limiting
const rateLimiter = new RateLimiterMemory({
  points: config.rateLimit.max,
  duration: config.rateLimit.windowMs / 1000, // convert to seconds
});

app.use(async (req, res, next) => {
  try {
    await rateLimiter.consume(req.ip);
    next();
  } catch {
    res.status(429).json({
      success: false,
      error: {
        code: 'TooManyRequests',
        message: 'Too many requests, please try again later',
      },
    });
  }
});

// Performance middlewares
app.use(compression());
app.use(express.json({ limit: '10kb' }));

// Logging
app.use(pino({
  enabled: !config.isTest,
  level: config.isDevelopment ? 'debug' : 'info',
  transport: config.isDevelopment ? {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  } : undefined,
}));

// Routes
app.use('/api', routes);

// Error handling
app.use(errorHandler);

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 