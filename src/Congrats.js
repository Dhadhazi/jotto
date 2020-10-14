import React from "react";

import successContext from "./contexts/successContext";
import languageContext from "./contexts/languageContext";
import stringsModule from "./helpers/strings";

export const Congrats = () => {
  const [success] = successContext.useSuccess();
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
