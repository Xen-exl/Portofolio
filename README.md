# Xen Portfolio - Premium Engineer Portfolio

A high-end, minimalist software engineer portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Designed for developers who value clean architecture, professional aesthetics, and real-time activity tracking.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.
- **Premium UI/UX**: Minimalist design inspired by Linear and Vercel styles.
- **Real-time GitHub Stats**: Integrated with GitHub API to show live repository counts and followers.
- **Live Contribution Calendar**: Dynamic GitHub activity visualization using `react-github-calendar`.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views.
- **Dark/Light Mode**: Smooth theme transitions using `next-themes`.
- **Interactive Animations**: Subtle and professional transitions powered by Framer Motion.

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm / yarn / pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/xen-exl/Portofolio.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## ✏️ Customization Guide

### 1. Personal Information
Most personal data is located in the component files under `src/components/`:
- **Hero & Headline**: Edit `src/components/Hero.tsx`
- **About & Stats**: Edit `src/components/About.tsx`
- **Experience**: Edit `src/components/Experience.tsx`
- **Contact Info**: Edit `src/components/Contact.tsx`

### 2. GitHub Integration
To show your own GitHub stats, update the `username` in `src/components/GithubStats.tsx`:
```tsx
// Change 'xen-exl' to your GitHub username
const userResponse = await fetch("https://api.github.com/users/YOUR_USERNAME");
// ...
<GitHubCalendar username="YOUR_USERNAME" ... />
```

### 3. Images
Place your profile photos and project images in the `public/img/` directory.

## 🌐 Deployment on Netlify

The easiest way to deploy this portfolio is using [Netlify](https://netlify.com):

1. Push your code to a GitHub repository.
2. Go to the [Netlify Dashboard](https://app.netlify.com/).
3. Click **"Add new site"** -> **"Import an existing project"**.
4. Select **GitHub** and authorize Netlify to access your repository.
5. Select your portfolio repository.
6. Netlify will automatically detect the settings from `netlify.toml`:
   - **Build Command**: `npm run build`
   - **Publish directory**: `.next`
7. Click **"Deploy Portfolio"**.
8. Your site will be live on a `*.netlify.app` domain!

### 💡 Why Netlify?
We have included a `netlify.toml` file that pre-configures the build environment and ensures the `@netlify/plugin-nextjs` is used for optimal Next.js performance on their platform.

## 📄 License

This project is open-source and available under the MIT License.
