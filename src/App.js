import './App.css';
import MainTable from './components/MainTable';
import React, { useState, useEffect } from 'react';
import ConstantsContext from './context/ConstantsDataContext';
import labelsService from './services/labelsService';

const App = () => {
  const [constants, setConstants] = useState();
  useEffect(() => {
    loadLabels();
  }, []);

  const loadLabels = async () => {
    const response = await labelsService.handleGetLabels();
    if (response.isError) return alert(response.error);
    console.log(response.HEB_LABELS.DAILY_TABLE_COLUMNS);
    setConstants(response.HEB_LABELS.DAILY_TABLE_COLUMNS);
  };

  return (
    <div className='App'>
      <ConstantsContext.Provider value={{ constants }}>
        <MainTable />
      </ConstantsContext.Provider>
    </div>
  );
};

export default App;

// useEffect(() => {
//   // showLastCommitMessageForThisLibrary.js
//   fetch('https://floating-falls-98454.herokuapp.com/api/constants/labels')
//     .then(response => response.json())
//     .then(data => setConstants(data.data.DAILY_TABLE_COLUMNS));
// }, []);
