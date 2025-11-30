import { prisma } from '../src/lib/prisma';
import { schemes } from '../src/lib/schemes-data';

async function main() {
  console.log('Start seeding ...');

  for (const scheme of schemes) {
    const schemeData = {
      id: scheme.id,
      name: scheme.name,
      shortName: scheme.shortName,
      ministry: scheme.ministry,
      description: scheme.description,
      benefits: scheme.benefits,
      maxBenefit: scheme.maxBenefit,
      eligibility: scheme.eligibility as any, // Using any here as the JSON structure matches but Typescript might be strict about Json value types
      applicationProcess: scheme.applicationProcess,
      documents: scheme.documents,
      officialUrl: scheme.officialUrl,
      deadline: scheme.deadline || null,
      featured: scheme.featured,
      category: scheme.category,
    };

    const s = await prisma.scheme.upsert({
      where: { id: scheme.id },
      update: schemeData,
      create: schemeData,
    });
    console.log(`Created scheme with id: ${s.id}`);
  }

  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

