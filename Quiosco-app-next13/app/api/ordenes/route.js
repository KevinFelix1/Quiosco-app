import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    const ordenes = await prisma.orden.findMany({
        where: {
            estado: false
        }
    });
    return NextResponse.json(
        ordenes
    , {status: 200});
}

export async function POST(req) {
    const postProps = await req.json();
    const orden = await prisma.orden.create({
        data: {
            nombre: postProps.nombre,
            total: parseFloat(postProps.total),
            pedido: postProps.pedido,
            fecha: postProps.fecha
        },
    });
    return NextResponse.json(
        orden
    , {status: 200});
};