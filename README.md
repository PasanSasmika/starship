🌌 Starship Viewer App

A simple React application that fetches and displays data from the Star Wars API (SWAPI).
Users can view a list of starships, search by name, and switch between multiple visual themes.

🚀 Features

Fetch Starship Data — retrieves starships from SWAPI

Search Functionality — instantly filter starships by name

Responsive Design — optimized for desktop, tablet, and mobile

Loading & Error Handling — user-friendly feedback during API calls

Theme Switcher — change between DaisyUI themes with local storage memory

Modern UI — clean layout built with Tailwind CSS & DaisyUI

🧩 Tech Stack

React (Vite) — Frontend framework

Zustand — Lightweight state management

Tailwind CSS — Utility-first styling

DaisyUI — Pre-styled components and themes

Lucide Icons — SVG icon set

🛠️ How It Works

On app load, starship data is fetched from the Star Wars API.

Data is stored in a global Zustand store for efficient state handling.

The search bar filters the displayed starships in real time.

Users can toggle between multiple UI themes using the theme dropdown.

💻 Running the Project Locally

Clone or download this repository

Install dependencies:

npm install


Run the development server:

npm run dev


Open your browser at the URL shown in your terminal (usually http://localhost:5173/)


⚙️ Folder Structure
src/
 ├── components/
 │   ├── LoadingSpinner.jsx
 │   ├── SearchBar.jsx
 │   ├── StarshipCard.jsx
 │   └── Theme.jsx
 ├── store/
 │   └── useStarshipStore.js
 ├── App.jsx
 └── main.jsx
