import React from "react";
import PropTypes from "prop-types";

export const GuessedWords = (props) => {
  return (
    <div data-test="component-guessed-words">
      {props.guessedWords.length === 0 ? (
        <span data-test="guess-instructions">Try to guess the secret word</span>
      ) : (
        ""
      )}
    </div>
  );
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};
