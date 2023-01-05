import { useEffect } from "react";


function Filtro(props) {
  const { filter, setFilter } = props;

  useEffect(() => {
    console.log("Filter: ", filter);
  }, [filter]);

  return (
    <div className="filter">
      <button onClick={() => setFilter("popular")}>Popular</button>
      <button onClick={() => setFilter("top_rated")}>Top Rated</button>
      <button onClick={() => setFilter("upcoming")}>Upcoming</button>
    </div>
  );
}
export default Filtro;