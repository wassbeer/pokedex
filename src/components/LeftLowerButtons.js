import React from 'react';
import pokemonList from '../js/pokemon';
import PropTypes from 'prop-types';

LeftLowerButtons.propTypes = {
  pokemonIndex: PropTypes.number,
  setpokemonIndex: PropTypes.func,
  inputValue: PropTypes.number,
  setInputValue: PropTypes.func,
};

function LeftLowerButtons(props) {
  const updateIdPokemon = (val) => {
    if (!val || val === '0' || val === 0) {
      props.setInputValue(null);
      props.setpokemonIndex(-1);
      return;
    }

    if (val <= pokemonList.length) {
      const int = parseInt(val);
      props.setpokemonIndex(int - 1);
      props.setInputValue(int);
    } else {
      props.setInputValue(null);
      props.setpokemonIndex(-1);
    }
  };

  const incrementPokemonIndex = () => {
    if (props.pokemonIndex < pokemonList.length - 1) {
      props.setpokemonIndex(props.pokemonIndex + 1);
      props.setInputValue(props.inputValue + 1);
    } else {
      props.setpokemonIndex(0);
      props.setInputValue(1);
    }
  };

  const decrementPokemonIndex = () => {
    if (props.pokemonIndex > 0) {
      props.setpokemonIndex(props.pokemonIndex - 1);
      props.setInputValue(props.inputValue - 1);
    } else {
      props.setpokemonIndex(pokemonList.length - 1);
      props.setInputValue(pokemonList.length );
    }
  };

  const onHandleInput = (e) => {
    updateIdPokemon(e.target.value);
  };

  return (
    <div>
      <div id="blue-button-left"></div>
      <div id="green-button-left"></div>
      <div id="orange-button-left"></div>
      <div id="square-button-left">
        <input
          id="nb"
          type="text"
          value={props.inputValue}
          max={pokemonList.length}
          onInput={(e) => onHandleInput(e)}
        />
      </div>
      <div id="cross">
        <div id="mid-cross">
          <div id="mid-circle"></div>
        </div>
        <div
          id="top-cross"
          onClick={() => {
            incrementPokemonIndex();
          }}
        >
          <div id="upC"></div>
        </div>
        <div
          id="right-cross"
          onClick={() => {
            incrementPokemonIndex();
          }}
        >
          <div id="rightC"></div>
        </div>
        <div
          id="bot-cross"
          onClick={() => {
            decrementPokemonIndex();
          }}
        >
          <div id="downC"></div>
        </div>
        <div
          id="left-cross"
          onClick={() => {
            decrementPokemonIndex();
          }}
        >
          <div id="leftC"></div>
        </div>
      </div>
    </div>
  );
}

export default LeftLowerButtons;
