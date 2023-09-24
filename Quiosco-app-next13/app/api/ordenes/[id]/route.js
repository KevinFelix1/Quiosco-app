import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(_,{params}) {
    const prisma = new PrismaClient();
    const { id } = params;
    const orden = await prisma.orden.findUnique({
        where: {
            id: parseInt(id)
        },
    });
    return NextResponse.json({
        orden
    }, {status: 200, statusText: 'OK'});
};

export async function POST(_, {params}) {
    const prisma = new PrismaClient();
    const { id } = params;
    const ordenActualizada = await prisma.orden.update({
        where: {
            id: parseInt(id)
        },
        data: {
            estado: true
        }
    });
    return NextResponse.json({
        ordenActualizada
    }, {status: 200, statusText: 'OK'});
}