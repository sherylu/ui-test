const { PrismaClient } = require('@prisma/client');

const data = require("../assets/data.json").data

const prisma = new PrismaClient()

async function main() {
	await Promise.allSettled(data.map((item =>
		new Promise(async(resolve) => {

			const ruling = {...item}
			delete ruling.votes
			const vote = {...item.votes}
			const newRuling = await prisma.ruling.create({
				data: ruling
			})

			const newVote = await prisma.vote.create({
				data: {
					...vote,
					rulingId: newRuling.id
				}
			})

			return resolve([newRuling, newVote])
		})
	)))
}

main()
	.catch((e) => {
		console.error(e)
		process.exit(1)
	})
	.finally(async(e) => {
		await prisma.$disconnect()
	})