import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const limit = 10;
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const [pokemons, setPokemons] = useState([]);

  async function getPokemons(offset = 0) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await response.json();
    console.log("called");

    return data.results;
  }

  useEffect(() => {
    const nextDataOffset = (page-1) * limit
    getPokemons(nextDataOffset).then((results) => setPokemons(results));
  }, [page]);

  function gotoPage(p) {
    setPage(p);
  }

  function filterPokemon() {
    const newData = pokemons.filter(pokemon => pokemon.name.includes(name))
    setPokemons(newData)
    // TODO
  }

  return (
    <div className="App">
      <h1>Pokemon</h1>
      <h2>Page: {page}</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={filterPokemon}>Filter</button>

      <br />
      <br />

      {page > 1 ? (
        <button onClick={()=> gotoPage(page - 1)}>Last Page</button>
      ) : null}
      <button onClick={() => gotoPage(page + 1)}>Next Page</button>

      <br />
      <br />

      {pokemons.map((pokemon) => (
        <a key={pokemon.name} style={{ display: "block" }} href={pokemon.url}>
          {pokemon.name}
        </a>
      ))}
    </div>
  );
}
