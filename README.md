# 🎬 MovieHub

A modern React application for discovering and managing your favorite movies. Built with React, Tailwind CSS, and the OMDB API.

## ✨ Features

- **🔍 Movie Search**: Search through thousands of movies with real-time results
- **❤️ Favorites Management**: Add and remove movies from your personal favorites collection
- **📱 Responsive Design**: Optimized for all screen sizes and devices
- **💾 Local Storage**: Your favorites persist between sessions
- **🎨 Modern UI**: Clean, animated interface with hover effects
- **🚀 Fast Loading**: Optimized API calls and smooth transitions

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Context API
- **API**: OMDB (Open Movie Database)
- **Icons**: Custom SVG icons
- **Build Tool**: Vite

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm 
- OMDB API key (get it from [omdbapi.com](http://omdbapi.com/))


## 📁 Project Structure

```
moviehub/
├── public/
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx      # Individual movie card component
│   │   └── Navbar.jsx         # Navigation bar
│   ├── Pages/
│   │   ├── LandingPage.jsx    # Welcome/landing page
│   │   ├── Home.jsx           # Main movies browsing page
│   │   └── Favourites.jsx     # User's favorite movies
│   ├── context/
│   │   └── MovieContext.jsx   # Global state management
│   ├── services/
│   │   └── api.js             # API calls to OMDB
│   ├── App.jsx                # Main app component
│   └── main.jsx               # App entry point
├── .env.example               # Environment variables template
├── .gitignore
├── package.json
└── README.md
```

## 🎯 Usage

1. **Landing Page**: Start at the welcome screen with project introduction
2. **Browse Movies**: Click "Start Exploring" to view popular movies
3. **Search**: Use the search bar to find specific movies
4. **Add Favorites**: Click the heart icon on any movie to add to favorites
5. **View Favorites**: Navigate to the Favorites page to see your saved movies
6. **Remove Favorites**: Click the heart icon again to remove from favorites

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_OMDB_API_KEY=your_omdb_api_key_here
```

### API Rate Limits

- OMDB API allows 1000 requests per day for free accounts
- Each search returns up to 10 movies per page
- The app fetches 3 pages (30 movies) on initial load

-----------------------------------------------------------------------------------

