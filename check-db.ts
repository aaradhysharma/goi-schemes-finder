import { PrismaClient } from './src/generated/client/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const count = await prisma.scheme.count();
    console.log(`Total schemes in database: ${count}`);
    
    // Also list a few names to be sure
    const schemes = await prisma.scheme.findMany({ take: 5 });
    console.log('Sample schemes:', schemes.map(s => s.name));
  } catch (e) {
    console.error('Error checking database:', e);
  } finally {
    await prisma.$disconnect();
  }
}

main();

