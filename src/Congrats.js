import React from "react";
import PropTypes from "prop-types";

export const Congrats = ({ success }) => {
  return (
    <div data-test="component-congrats" className="alert alert-success">
      {success ? (
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

Congrats.propTypes = {
  success: PropTypes.bool,
};
