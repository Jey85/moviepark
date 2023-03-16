import React from 'react'
import { useEffect,useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//4646b1fb

const api_url = 'http://omdbapi.com?apikey=4646b1fb';



const App = () => {

    const [movies,setMovies]=useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchmovies = async (title) => {
        const response = await fetch(`${api_url}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
        
    }
    useEffect(() => {
        searchmovies('Ironman');

    }, []);
  return (
    <div className="app">
        
        <h1>MoviePark</h1>
        <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchmovies(searchTerm)}
        />
      </div>
    {
        movies?.length > 0
         ?(<div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ) )} 
           </div>) :
           (
            <div className="empty">
                <h2>No movies found</h2> 
            </div>
           )
    }
    
    </div>
    
  );
}

export default App