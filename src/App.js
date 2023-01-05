import './App.css';
import { useEffect, useState } from 'react';
import Movies from './components/movies';
import Filter from './components/filter';
function App() {
  const [popular, setPopular] = useState([])	
  const [Filtered ,setFiltred] = useState([])
  const [activeGenre, setActiveGenre] = useState(0)


  useEffect(() => {
    fetchPopular()
  }, [])

  const fetchPopular = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=2ba3af89ad421bc580197bba090fae96&language=pt-br&page=4')
    const movies =  await data.json()
    
    setPopular(movies.results)
    setFiltred(movies.results)
    console.log(movies.results)
  }

  return (
    <div className="App">
      <Filter popular={popular} setFiltred={setFiltred}
        setActiveGenre={setActiveGenre} activeGenre={activeGenre}    
      />
     <div className="MoviesDB">
        {popular.map((movie) => {
          return <Movies key={movie.id} movie={movie} />
        })}
        
    </div>
    </div>
  );
}

export default App;

