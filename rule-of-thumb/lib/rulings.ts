import { endpoint } from '../utils/endpoints'
import { revalidateTag } from "next/cache"

export async function getAllRulings() {
  const data = await fetch(`${endpoint}/rulings`, {
    method: "GET",
    cache: "no-cache",
    next: {
      tags: ["rulings"],
    },
  })

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()
}

export async function voteRuling(id: number, vote: 'up' | 'down') {
  "use server";
    const data = await fetch(`${endpoint}/rulings`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, vote }),
    })
    
    if (!data.ok) {
        throw new Error('Failed to vote')
    }

    revalidateTag("rulings")
    
    return data.json()
    }