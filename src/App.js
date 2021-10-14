import './App.css';
import MainTable from './components/MainTable';
import React, { useState, useEffect } from 'react';
import ConstantsContext from './context/ConstantsDataContext';
const App = () => {
  const [constants, setConstants] = useState({});
  useEffect(() => {
    setConstants({
      tableHeader: [
        'מלאי בק"ג',
        'יחידה',
        'יחידות במלאי',
        'קרטון',
        'קרטונים במלאי',
        'שליש',
        'כמות שלישים',
        'ד. שליש',
        'כמות ד. שליש',
        'ק. כדורים',
        'כמות ק. כדורים',
        'אמבטיה',
      ],
    });
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
