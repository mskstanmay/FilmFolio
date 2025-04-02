import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class Equipment {
  static async findAll() {
    return prisma.equipment.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}

export default Equipment;
