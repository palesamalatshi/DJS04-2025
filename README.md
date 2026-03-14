# 🎙️ UNMUTED Podcast App

A React-powered podcast browsing experience that allows users to **search, sort, filter, and paginate** podcasts dynamically. Built as part of the **DSJ04 React Podcast App** assignment, this app emphasizes a seamless, responsive, and interactive user interface.  

---

## 📌 Project Overview

UNMUTED allows users to explore a curated list of podcasts with ease. Users can:  

- Search any part of a podcast title in real-time.  
- Filter podcasts by genres/themes.  
- Sort podcasts by latest update or alphabetically.  
- Navigate podcasts through **pagination**.  
- View detailed podcast cards including cover, title, number of seasons, genres, and last updated date.  

All state interactions are synchronized using React’s **Context API**, ensuring search, filter, sort, and pagination work together seamlessly.  

---

## ⚡ Features

### 1. Search
- Type any part of a podcast title to dynamically filter results.
- Updates results immediately without resetting filters or pagination.  

### 2. Sorting
- **Newest first:** Sort by last updated date.  
- **Oldest first:** Sort by oldest podcasts.  
- **Title A–Z / Z–A:** Browse podcasts alphabetically.  

### 3. Filtering
- Filter by genres/themes using a dropdown menu.  
- Filters are applied in conjunction with search and sort.  
- Selections persist across pages and state updates.  

### 4. Pagination
- Podcasts displayed in **pages of 8 items** (desktop) or adjusted for smaller screens.  
- Pagination respects current search, filter, and sort settings.  
- Navigation preserves all UI selections.  

### 5. Podcast Cards
Each podcast card displays:  
- **Cover Image** – fully visible using `object-fit: cover`.  
- **Title** – podcast name.  
- **Number of Seasons** – total seasons.  
- **Genres** – mapped from `data.js`.  
- **Last Updated** – formatted as `Updated 18 October 2022`.  

---

## 🛠️ Technologies Used

- **React** – functional components, hooks, context API.  
- **CSS** – responsive layout and styling.  
- **JavaScript** – modular and reusable logic.  
- **Data Handling** – local `data.js` for genres and external API for podcast shows.  

---

## 📂 Project Structure

```text
src
│
├── components
│   ├── PodcastCard.jsx
│   ├── PodcastGrid.jsx
│   ├── SearchBar.jsx
│   ├── SortDropdown.jsx
│   ├── GenreFilter.jsx
│   └── Pagination.jsx
│
├── data
│   └── data.js
│
├── hooks
│   └── usePodcasts.js
│
├── utils
│   └── pagination.js
│
├── App.jsx
├── main.jsx
└── styles.css

🚀 Getting Started
1. Clone the repository
git clone <your-repo-url>
cd <repo-folder>
2. Install dependencies
npm install
# or
yarn install
3. Run the app
npm start
# or
yarn start

The app will open at http://localhost:3000 by default.

🔧 Usage Instructions

Search Podcasts

Type a keyword in the search bar to dynamically filter podcasts.

Filter by Genre

Click the dropdown menu next to search.

Select a genre to view related podcasts.

Sort Podcasts

Use the sort dropdown to order podcasts by latest, oldest, or alphabetical order.

Pagination

Navigate pages using Previous and Next buttons.

The current search, filter, and sort settings are preserved while navigating.

View Podcast Details

Each card shows the cover, title, seasons, genres, and last updated date.