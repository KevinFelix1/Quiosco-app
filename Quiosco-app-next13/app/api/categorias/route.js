import { NextResponse } from 'next/server'
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export async function GET() {
    const categorias = await prisma.categoria.findMany({
        include: {
          productos: true,
        }
      });
  return NextResponse.json(categorias);
};