import prisma from "@prisma/client";

const { PrismaClient } = prisma;

export const db = new PrismaClient();
