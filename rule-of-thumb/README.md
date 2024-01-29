This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). 

## Database
This is intended for development only, for production we should switch to another database engine.

In order to set up the initial data for the application you will need to make a couple of things:

- touch prisma/dev.db

- npx prisma db push
- npx prisma db seed

## Getting Started

First, run the development server:

```bash
npm i
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.