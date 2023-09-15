This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Adding on top

### MongoDB connection

Using a MongoDB Atlas example built a connection to the DB and started populating with data.

Most of the code is at [mongodb.js](src/lib/mongodb.js) and it is at this time self contained.

```bash
npm install mongodb
```

### Adding a MUI FE

```bash
npm install @mui/material @emotion/react @emotion/styled @mui/x-data-grid
```
