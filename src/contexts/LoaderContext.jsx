import { createContext, useContext, useState } from "react";
import Loader from "../components/Loader";

const LoaderContext = createContext();

function LoaderProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  const value = {
    isLoading,
    setIsLoading, // Permette di modificare lo stato da altri componenti
  };

  return (
    <LoaderContext.Provider value={value}>
      {children}
      {isLoading && <Loader />}
    </LoaderContext.Provider>
  );
}

function useLoader() {
  const context = useContext(LoaderContext);
  return context;
}

export { LoaderProvider, useLoader };
