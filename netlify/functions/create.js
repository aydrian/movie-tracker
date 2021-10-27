import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function handler(_event, _context) {
  await prisma.stub.create({
    data: {
      title: "Shang-Chi and the Legend of the Ten Rings",
      show_date: new Date("9/25/2021"),
      price: 17.89
    }
  });
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "ok" })
  };
}
