import React, { createContext, useState } from 'react';

type AppContextType = {
  searchedPhrase: string;
  setSearchedPhrase: (newPlayerName: string) => void;
};

const appContextDefaultValue = {
  searchedPhrase: '',
  setSearchedPhrase: () => {},
};

const AppContext = createContext<AppContextType>(appContextDefaultValue);

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchedPhrase, setSearchedPhrase] = useState<string>(appContextDefaultValue.searchedPhrase);

  return (
    <AppContext.Provider
      value={{
        searchedPhrase,
        setSearchedPhrase,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext };
