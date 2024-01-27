import { NextResponse } from 'next/server'
import data from '../../../assets/data.json'

export async function GET() {
    return NextResponse.json({ rulings: data.data })
  }