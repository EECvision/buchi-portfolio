/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from "react";

export const ScrollContext = createContext<any>(null);

const ScrollContextProvider = ({
  children,
  locomotiveScroll,
}: {
  children: React.ReactNode;
  locomotiveScroll: any;
}) => {
  return (
    <ScrollContext.Provider value={{ locomotiveScroll }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContextProvider;
