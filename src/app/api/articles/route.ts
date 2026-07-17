import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    
    const filter = category ? { category } : {};

    const articles = await prisma.article.findMany({
      where: filter,
      orderBy: { id: 'asc' }
    });

    return NextResponse.json(articles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const newArticle = await prisma.article.create({
      data: {
        category: body.category,
        title: body.title,
        author: body.author,
        period: body.period,
        summary: body.summary,
        fullContent: body.fullContent,
        badgeText: body.badgeText,
        badgeVariant: body.badgeVariant,
        keyTerm: body.keyTerm,
        keyTermMeaning: body.keyTermMeaning,
      }
    });

    return NextResponse.json(newArticle, { status: 201 });
  } catch (error) {
    console.error('Error creating article:', error);
    return NextResponse.json({ error: 'Failed to create article' }, { status: 500 });
  }
}
