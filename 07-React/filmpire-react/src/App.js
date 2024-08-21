import searchIcon from './search.svg';
import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';

// API URL with appended api key
const API_URL = "http://www.omdbapi.com?apikey=9640346c";

// Dummy structure that we get from a single movie from endpoint
const movie1 = {
  "Title": "Amazing Spiderman Syndrome",
  "Year": "2012",
  "imdbID": "tt2586634",
  "Type": "movie",
  "Poster": "N/A"
}

function App() {
  
  // State to get a list of movies
  const [movies, setMovies] = useState([]);
  // State to search for movies in input box
  const [searchTerm, setSearchTerm] = useState("");

  // Arrow function to hit API endpoint for movies as per search title
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    
    setMovies(data.Search);
  }

  // Initial search when the app loads for the first time
  useEffect(() => {
    searchMovies('Spiderman');
  }, [])
  
  return (
    <div className="app">
      <h1>MovieLand</h1>
      {/* Search tab for movie search */}
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
          }}
        />
        <img 
          src={searchIcon}
          alt="search"
          onClick={() => {
            searchMovies(searchTerm)
          }}
        />
      </div>
      
      {/* Use map to traverse through list of movies and display them as single components */}
      {
        movies?.length > 0 
        ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie}/>
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }
    </div>
  );
}

export default App;
