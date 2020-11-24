import React, {useState, useEffect} from 'react';
import pokemonList from '../js/pokemon';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

function Pokedex() {
  const [pokemonIndex, setpokemonIndex] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  useEffect(() => {
    const onKeyDown = (e) => {
      if ([38, 39].includes(e.keyCode)) {
        if (pokemonIndex < pokemonList.length - 1) {
          setpokemonIndex(pokemonIndex + 1);
          setInputValue(inputValue + 1);
        } else {
          setpokemonIndex(0);
          setInputValue(1);
        }
      }

      if ([37, 40].includes(e.keyCode)) {
        if (pokemonIndex > 0) {
          setpokemonIndex(pokemonIndex -1);
          setInputValue(inputValue - 1);
        } else {
          setpokemonIndex(pokemonList.length - 1);
          setInputValue(pokemonList.length );
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [pokemonIndex, inputValue]);

  return (
    <div id="pokedex">
      <LeftSection
        pokemonIndex={pokemonIndex}
        setpokemonIndex={setpokemonIndex}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <div id="middle">
        <div id="hinge1"></div>
        <div id="hinge2"></div>
        <div id="hinge3"></div>
      </div>
      <RightSection pokemonIndex={pokemonIndex}/>
      <div id="top-right1"></div>
      <div id="top-right2"></div>
    </div>
  );
}

export default Pokedex;
