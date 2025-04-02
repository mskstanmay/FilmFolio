import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class People {
  static async findAll() {
    return prisma.people.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}

export default People;
