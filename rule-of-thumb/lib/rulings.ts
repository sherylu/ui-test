import { endpoint } from '../utils/endpoints'

export async function getAllRulings() {
  const data = await fetch(`${endpoint}/rulings`)

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()
}