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
      <button className={activeGenre === 0 ?
      "active" : ""} onClick={() =>
      setActiveGenre(0)
      }>Todos</button>
      <button  className={activeGenre === 0 ?
      "active" : ""}
      onClick={() =>
        setActiveGenre(35)
        }>Comedia</button>
      <button  className={activeGenre === 0 ?
      "active" : ""} onClick={() =>
      setActiveGenre(28)
      }>Acao</button>
    </div>
  );
}
export default Filtro;