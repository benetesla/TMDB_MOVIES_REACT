import './App.css';
import { useEffect, useState } from 'react';
import Movies from './components/movies';
import Filter from './components/filter';
function App() {
  const [PMovies, setMovies] = useState([])	
  const [Filtred ,setFiltred] = useState([])

  useEffect(() => {
    fetchPopular()
  }, [])

  const fetchPopular = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=2ba3af89ad421bc580197bba090fae96&language=pt-br&page=1')
    const movies =  await data.json()
    
    setMovies(movies.results)
    setFiltred(movies.results)
  }

  return (
    <div className="App">
      <Filter />
     <div className="MoviesDB">
        {PMovies.map((movie) => {
          return <Movies key={movie.id} movie={movie} />
        })}
        
    </div>
    </div>
  );
}

export default App;
