import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { schemes } from '@/lib/schemes-data';

export async function GET() {
  try {
    console.log('Start seeding via API ...');
    const results = [];

    for (const scheme of schemes) {
      const schemeData = {
        id: scheme.id,
        name: scheme.name,
        shortName: scheme.shortName,
        ministry: scheme.ministry,
        description: scheme.description,
        benefits: scheme.benefits,
        maxBenefit: scheme.maxBenefit,
        eligibility: scheme.eligibility as any,
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
      results.push(`Upserted scheme: ${s.id}`);
    }

    return NextResponse.json({ message: 'Seeding finished', results });
  } catch (error) {
    console.error('Seeding failed:', error);
    return NextResponse.json({ error: 'Seeding failed', details: String(error) }, { status: 500 });
  }
}

