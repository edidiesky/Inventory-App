import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getExpensesByCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Error retrieving expenses by category" });
  }
};
