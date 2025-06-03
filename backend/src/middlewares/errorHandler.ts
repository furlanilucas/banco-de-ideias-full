import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { Prisma } from '@prisma/client';

export class AppError extends Error {
  constructor(
    public message: string,
    public statusCode: number = 400
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export function errorHandler(
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error(error);

  // Custom application error
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      success: false,
      error: {
        code: error.name,
        message: error.message
      }
    });
  }

  // Zod validation error
  if (error instanceof ZodError) {
    return res.status(400).json({
      success: false,
      error: {
        code: 'ValidationError',
        message: 'Invalid request data',
        details: error.errors
      }
    });
  }

  // Prisma errors
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === 'P2002') {
      return res.status(409).json({
        success: false,
        error: {
          code: 'UniqueConstraintViolation',
          message: 'A record with this value already exists'
        }
      });
    }
  }

  // Default error
  return res.status(500).json({
    success: false,
    error: {
      code: 'InternalServerError',
      message: 'An unexpected error occurred'
    }
  });
} 