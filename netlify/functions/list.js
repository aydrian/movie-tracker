import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function handler(_event, _context) {
  const stubs = await prisma.stub.findMany();
  return {
    statusCode: 200,
    body: JSON.stringify({ stubs })
  };
}
