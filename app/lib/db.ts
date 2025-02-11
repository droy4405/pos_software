import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAdmin(email: string) {
  return prisma.admin.findUnique({ where: { email } });
}

export async function getManager(email: string) {
  return prisma.manager.findUnique({ where: { email } });
}