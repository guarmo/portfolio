import React, { useReducer } from "react";
import axios from "axios";
import ModeContext from "./modeContext";
import ModeReducer from "./modeReducer";
import {} from "../types";

const ContactState = (props) => {
  const initialState = {};

  const [state, dispatch] = useReducer(ModeReducer, initialState);

  // Example
  const example = async () => {
    try {
      console.log("ok");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ModeContext.Provider value={{}}>{props.children}</ModeContext.Provider>
  );
};

export default ContactState;
