import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Cari record VisitorCount pertama
    let visitor = await prisma.visitorCount.findFirst();

    if (visitor) {
      // Jika ada, tambahkan count
      visitor = await prisma.visitorCount.update({
        where: { id: visitor.id },
        data: { count: visitor.count + 1 },
      });
    } else {
      // Jika tidak ada, buat baru dengan count: 1
      visitor = await prisma.visitorCount.create({
        data: { count: 1 },
      });
    }

    return NextResponse.json({ count: visitor.count });
  } catch (error) {
    console.error("Error updating visitor count:", error);
    return NextResponse.json(
      { error: "Gagal memperbarui jumlah pengunjung" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
