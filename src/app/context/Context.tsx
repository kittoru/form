import React, { createContext, useState } from "react";


export const PageContext = createContext({ page: 'login', changePages: (page: string) => {} });

type Props = {
  children: React.ReactNode;
}

export const Context = ({children}: Props) => {
  const [page, setPage] = useState<string>('login');
  const changePages = (page: string) => {
    if (page === 'login') {
      setPage('signup');
      return;
    }
    setPage('login');
  }
  const value = {
    page,
    changePages
  }
  return ( 
    <PageContext.Provider value={value}>{children}</PageContext.Provider>
  );
}