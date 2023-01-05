import { useEffect } from "react";


function Filtro({setActiveGenre, activeGenre, setFiltred, popular}) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltred(popular);
    } else {
      const filtered = popular.filter((movie) => movie.genre_ids.includes(activeGenre));
      setFiltred(filtered);
    }
  }, [activeGenre, popular, setFiltred]);

  return (
    <div className="filter">
      <button onClick={() =>
      setActiveGenre(0)
      }>all</button>
      <button 
      onClick={() =>
        setActiveGenre(35)
        }>Comedy</button>
      <button onClick={() =>
      setActiveGenre(28)
      }>Action</button>
    </div>
  );
}
export default Filtro;