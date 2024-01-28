import { NextResponse } from 'next/server'
import data from '../../../assets/data.json'

let rulings = data.data;

export async function GET() {
    return NextResponse.json({ rulings })
}

export async function POST(request: Request) {
    const { name, vote } = await request.json();

    const ruling = rulings.find((ruling) => ruling.name === name);

    if (ruling) {
        if (vote === 'up') {
            ruling.votes.positive += 1;
        } else if (vote === 'down') {
            ruling.votes.negative += 1;
        }
        return NextResponse.json({ message: 'OK' });
    } else {
        return NextResponse.json({ message: 'Ruling not found' }, { status: 404 });
    }
}
