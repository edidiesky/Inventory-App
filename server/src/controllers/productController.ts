import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProducts = async (
  req: Request,
  res: Response
): Promise<void> => {

};

export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  
};
