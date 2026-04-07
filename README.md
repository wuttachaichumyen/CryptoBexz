# AI Crypto Trading Dashboard

A modern, responsive, and sleek AI-powered cryptocurrency trading dashboard built with Next.js, React, and Tailwind CSS. This project features a dark-themed UI designed for professional traders, providing market intelligence, portfolio tracking, and automated strategy building tools.

## 🚀 Features

- **Dashboard**: Overview of account balance, performance charts, and recent activities.
- **Market Intelligence**: Real-time AI analysis, market sentiment, and top-performing assets.
- **Portfolio Intelligence**: AI-powered risk analysis and smart allocation optimization (Coming Soon).
- **Strategy Lab**: Custom AI strategy builder and backtesting engine (Pro Feature).
- **Settings**: User profile management, theme toggling, currency, and language preferences.
- **Responsive Design**: Fully optimized for desktop and mobile devices.

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📂 Project Structure

```text
├── app/
│   ├── dashboard/       # Main overview dashboard
│   ├── market/          # Market intelligence page
│   ├── portfolio/       # Portfolio intelligence (Coming soon UI)
│   ├── strategy-lab/    # Strategy builder (Premium feature UI)
│   ├── settings/        # User settings and preferences
│   ├── layout.tsx       # Global layout containing the Sidebar/Navbar
│   └── page.tsx         # Landing page / Redirect to dashboard
├── public/              # Static assets (images, icons)
├── tailwind.config.ts   # Tailwind CSS configuration
└── package.json         # Project dependencies

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
