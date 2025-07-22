# Work Travel Job Finder 🌍💼

This is a frontend coding challenge project built for Gabriel via Upwork. It helps users find job opportunities across U.S. states based on selected industries, with an interactive map and intuitive filters.

## 🔗 Live Demo

<img width="1915" height="928" alt="Image" src="https://github.com/user-attachments/assets/11fd2d68-78a7-471d-9813-80ed36a2c981" />

👉 [View Live Project on Vercel](https://work-travel-job-finder.vercel.app/)

## 📦 GitHub Repository

[work-travel-job-finder](https://github.com/Meetkamal256/work-travel-job-finder)

## 🚀 Features

-**Filter by State and Industry** — Select a U.S. state and preferred industry to view relevant companies.
- **Interactive Map (React Leaflet)** — The selected state is dynamically displayed on the map.
- **Mark Contacted Employers** — Users can mark which employers they’ve contacted (non-persistent).
- **Mobile-Responsive UI** — Ongoing improvements for responsiveness on all screen sizes.
- **Toggle Remote Option** — Present as UI element (future enhancement).

## Tech Stack

- **React** (with Vite)
- **TypeScript**
- **Tailwind CSS** for styling
- **React Leaflet** for map rendering
- **Local JSON data** for companies

## 🗂️ Folder Structure

The folder structure is being further organized to improve maintainability. Some components include:

- `/components`: Reusable UI components (e.g., `JobCard`, `FilterSelect`, `MapView`)
- `/data`: Contains the `companies.json` dataset
- `/pages` or `/src`: Main page logic and layout

## 🧪 Installation & Setup (Optional)

If you’d like to run locally:

```bash
git clone https://github.com/Meetkamal256/work-travel-job-finder.git
cd work-travel-job-finder
npm install
npm run dev
