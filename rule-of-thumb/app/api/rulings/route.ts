import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET() {
  const rulings = await prisma.ruling.findMany({
    include: {
      votes: true,
    },
  });
  return NextResponse.json({ rulings });
}

export async function POST(request: Request) {
  const { id, vote } = await request.json();

  const currentVote = await prisma.vote.findFirst({
    where: {
      rulingId: id,
    },
  });

  if (!currentVote) {
    return NextResponse.json({ message: "Ruling not found" }, { status: 404 });
  }

  if (vote === "up") {
    currentVote.positive += 1;
  }
  if (vote === "down") {
    currentVote.negative += 1;
  }

  const updatedVote = await prisma.vote.update({
    where: {
      id: currentVote.id,
    },
    data: currentVote,
  });

  return NextResponse.json({ updatedVote });
}
