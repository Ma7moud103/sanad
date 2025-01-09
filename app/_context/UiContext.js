"use client";
import { createContext, useContext, useState } from "react";
const UiContext = createContext();

export function UiContextProvider({ children }) {
  const [Toggler, setToggler] = useState(false);
  return (
    <UiContext.Provider value={{ Toggler, setToggler }}>
      {children}
    </UiContext.Provider>
  );
}

export function UseUiContext() {
  const context = useContext(UiContext);
  if (UiContext === undefined)
    throw new Error("context was used outside provider");

  return context;
}
