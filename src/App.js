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
    const data = await fetch//ADD AQUI A URL DA API
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
        {Filtered.map((movie) => {
          return <Movies key={movie.id} movie={movie} />
        })}
        
    </div>
    </div>
  );
}

export default App;

