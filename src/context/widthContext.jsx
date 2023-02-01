import React, { createContext, useState, useEffect } from "react";

export const WidthContext = createContext();

export const WidthContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(Boolean);
  const [state, setState] = useState({
    windowWidth: window.innerWidth,
    isDesiredWidth: false,
  });

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const resizeHandler = () => {
      const currentWindowWidth = window.innerWidth;

      currentWindowWidth <= 768 ? setIsOpen(false) : setIsOpen(true);

      const isDesiredWidth = currentWindowWidth < state.windowWidth;
      setState({ windowWidth: currentWindowWidth, isDesiredWidth });
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [state.windowWidth]);

  return (
    <WidthContext.Provider value={{ isOpen, state, openMenu, setIsOpen }}>
      {children}
    </WidthContext.Provider>
  );
};
