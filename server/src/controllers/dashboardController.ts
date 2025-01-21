import { Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getDashboardMetrics = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const [
      popularProducts,
      salesSummary,
      expenseSummary,
      purchaseSummary,
      expenseByCategoryRaw,
    ] = await Promise.all([
      await prisma.products.findMany({
        take: 15,
        orderBy: {
          stockQuantity: "desc",
        },
      }),
      await prisma.salesSummary.findMany({
        take: 15,
        orderBy: {
          date: "desc",
        },
      }),
      await prisma.expenseSummary.findMany({
        take: 15,
        orderBy: {
          date: "desc",
        },
      }),
      await prisma.purchaseSummary.findMany({
        take: 15,
        orderBy: {
          date: "desc",
        },
      }),
      await prisma.expenseByCategory.findMany({
        take: 15,
        orderBy: {
          date: "desc",
        },
      }),
    ]);

    const expenseByCategorySummary = expenseByCategoryRaw.map((data) => ({
      ...data,
      amount: data.amount.toString(),
    }));

    res.status(200).json({
      popularProducts,
      salesSummary,
      expenseSummary,
      purchaseSummary,
      expenseByCategorySummary,
    });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving dashboard metrics" });
  }
};
