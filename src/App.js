import './App.css';
import MainTable from './components/MainTable';
import React, { useState, useEffect } from 'react';
import ConstantsContext from './context/ConstantsDataContext';

import LABELS from './constants/labels';
const App = () => {
  const [constants, setConstants] = useState();
  useEffect(() => {
    console.log(LABELS.TABLE_COLUMNS);
    setConstants(LABELS.TABLE_COLUMNS);
  }, []);

  return (
    <div className='App'>
      <ConstantsContext.Provider value={{ constants }}>
        <MainTable />
      </ConstantsContext.Provider>
    </div>
  );
};

export default App;
