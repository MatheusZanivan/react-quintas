import React, { useEffect } from 'react';

function App() {
  const [pokemon, setPokemon] = React.useState({});
  const [nextNumber, setNextNumber] = React.useState(1);



useEffect(() => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${nextNumber}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    setPokemon(data);
  });
  console.log(nextNumber)

} , [nextNumber])



  return (
    <div>
    {pokemon.sprites && (
    <div> <img src={pokemon.sprites.front_default}/></div>
    )}
    <div><button onClick={() => { setNextNumber(nextNumber+1)}}>Next Pokemon</button></div>
    </div>
  );
}

export default App;
