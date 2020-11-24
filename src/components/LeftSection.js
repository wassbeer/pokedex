import React from 'react';
import LeftLowerButtons from './LeftLowerButtons';
import pokemonList from './js/pokemon';
import PropTypes from 'prop-types';

LeftSection.propTypes = {
  pokemonIndex: PropTypes.number,
  setpokemonIndex: PropTypes.func,
  inputValue: PropTypes.number,
  setInputValue: PropTypes.func,
};

function LeftSection(props) {
  return (
    <div id="left">
      <div id="top-left"></div>
      <div id="top-left1">
        <div id="glass-button">
          <div id="reflect"></div>
        </div>
        <div id="top-buttons">
          <div id="top-button-red"></div>
          <div id="top-button-yellow"></div>
          <div id="top-button-green"></div>
        </div>
      </div>
      <div id="top-left2"></div>
      <div id="logo">
        <img src="img/pokedex/logo-pokemon.png" alt="logo pokedex" />
      </div>
      <div id="border-screen">
        <div id="button-top1"></div>
        <div id="button-top2"></div>
        <div id="button-bottom"></div>
        <p className="selectDisable">&equiv;&equiv;</p>
      </div>
      <div id="screen">
        <img
          className="selectDisable"
          src={`img/pokedex/pokemon/${pokemonList[props.pokemonIndex]}.jpg`}
          alt=""
        />
      </div>
      <div id="triangle"></div>
      <LeftLowerButtons
        pokemonIndex={props.pokemonIndex}
        setpokemonIndex={props.setpokemonIndex}
        inputValue={props.inputValue}
        setInputValue={props.setInputValue}
      />
    </div>
  );
}

export default LeftSection;
