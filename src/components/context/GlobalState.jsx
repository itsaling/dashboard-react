import React, { createContext, useEffect, useReducer, useState } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

//inital state
// const initalState = {
//   motivations: [],
// };

//axios

//create context
export const GlobalContext = createContext(null);

//provider
export const GlobalProvider = ({ children }) => {
  //   const [state, dispatch] = useReducer(AppReducer, initalState);
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => setQuote(res.data));
  }, []);

  return (
    <GlobalContext.Provider value={{ quote: [quote, setQuote] }}>
      {children}
    </GlobalContext.Provider>
  );
};
