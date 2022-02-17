import './App.css';
import { useState, useEffect } from 'react';
import { api } from './data';
import List from './List';

function App() {


  const [pokemon, setPokemon] = useState([]);
  const URL = 'https://pokeapi.co/api/v2/pokemon?limit=150';

  useEffect(() => {
    const getPokemonInfo = async () => {
      const json = await api.getPokemonInfo(URL);
      await loadPokemon(json.results);
      // console.log(json)
      // setIsLoading(false);
    };
    getPokemonInfo();
  }, []);

  const loadPokemon = async (data) => {
    let pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonList = await api.getPokemonList(pokemon)
      return pokemonList
    }))
    setPokemon(pokemonData);

  };
  console.log(pokemon)
  return (
    <div>
      <List sampleData={pokemon} />
    </div>
  );
}

export default App;
