import React, { createContext, useState } from 'react';

export const TableDataContext = createContext();

const TableContextProvider = ({ children }) => {
  const [thData, setThData] = useState({ headers: ['name', 'age', 'work'] });

  return (
    <TableDataContext.Provider value={{ ...thData }}>
      {children}
    </TableDataContext.Provider>
  );
};
export default TableContextProvider;
