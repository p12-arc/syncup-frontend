# SyncUp Frontend

A pixel-perfect, responsive frontend implementation of the SyncUp web application built with Next.js, TypeScript, and Tailwind CSS.

## Pages

- **Home Page** (`/`) - Social feed with profile sidebar, post feed, ads, and course suggestions
- **Job Dashboard** (`/jobs`) - Job tracking dashboard with stats, vacancy chart, application table, and recommended jobs

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Recharts** (for data visualization)
- **Lucide React** (for icons)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# clone the repository
git clone https://github.com/p12-arc/syncup-frontend.git

# navigate to the project directory
cd syncup-frontend

# install dependencies
npm install

# start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # root layout with sidebar and topbar
│   ├── page.tsx            # home page
│   ├── globals.css         # global styles
│   └── jobs/
│       └── page.tsx        # job dashboard page
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx     # left navigation sidebar
│   │   └── Topbar.tsx      # top search and notification bar
│   ├── home/
│   │   ├── ProfileCard.tsx
│   │   ├── SosmedStories.tsx
│   │   ├── CreatePost.tsx
│   │   ├── PostCard.tsx
│   │   ├── AdBanner.tsx
│   │   └── SuggestionCard.tsx
│   └── jobs/
│       ├── StatsCard.tsx
│       ├── VacancyChart.tsx
│       ├── JobApplicationTable.tsx
│       └── RecommendedJobs.tsx
├── data/
│   ├── posts.ts            # mock post data
│   ├── stories.ts          # mock story users
│   └