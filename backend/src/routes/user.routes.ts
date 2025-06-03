import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma';
import { authenticate, authorize } from '../middlewares/auth';
import { AppError } from '../middlewares/errorHandler';

export const userRoutes = Router();

// Middleware to protect all user routes
userRoutes.use(authenticate);

const updateUserSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().email().optional(),
});

// Get current user
userRoutes.get('/me', async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user!.id },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });

  return res.json({
    success: true,
    data: user,
  });
});

// Get all users (admin only)
userRoutes.get('/', authorize('ADMIN'), async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const [users, total] = await Promise.all([
    prisma.user.findMany({
      skip,
      take: limit,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    }),
    prisma.user.count(),
  ]);

  return res.json({
    success: true,
    data: users,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  });
});

// Get user by ID
userRoutes.get('/:id', async (req, res) => {
  const { id } = req.params;

  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });

  if (!user) {
    throw new AppError('User not found', 404);
  }

  return res.json({
    success: true,
    data: user,
  });
});

// Update user
userRoutes.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updates = updateUserSchema.parse(req.body);

  // Only allow users to update their own profile unless they're an admin
  if (req.user!.id !== id && req.user!.role !== 'ADMIN') {
    throw new AppError('Insufficient permissions', 403);
  }

  if (updates.email) {
    const existingUser = await prisma.user.findUnique({
      where: { email: updates.email },
    });

    if (existingUser && existingUser.id !== id) {
      throw new AppError('Email already in use', 400);
    }
  }

  const user = await prisma.user.update({
    where: { id },
    data: updates,
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });

  return res.json({
    success: true,
    data: user,
  });
});

// Delete user (admin only)
userRoutes.delete('/:id', authorize('ADMIN'), async (req, res) => {
  const { id } = req.params;

  await prisma.user.delete({
    where: { id },
  });

  return res.json({
    success: true,
    message: 'User deleted successfully',
  });
}); 