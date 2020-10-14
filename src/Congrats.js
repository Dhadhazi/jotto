import React from "react";
import PropTypes from "prop-types";

import languageContext from "./contexts/languageContext";
import stringsModule from "./helpers/strings";

export const Congrats = ({ success }) => {
  const language = React.useContext(languageContext);
  return (
    <div data-test="component-congrats" className="alert alert-success">
      {success ? (
        <span data-test="congrats-message">
          {stringsModule.getStringByLanguage(language, "congrats")}
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
