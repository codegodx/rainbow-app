import { PrismaClient } from "@prisma/client";

declare const global: {
  prisma?: PrismaClient;
};

export const db = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = db;

export * from "@prisma/client";
