import React, { useState, useContext } from 'react';
import ConstantsContext from '../context/ConstantsDataContext';
const MainTable = () => {
  const { constants } = useContext(ConstantsContext);
  const [thZero, setThZero] = useState('');
  const handleChange = e => {
    if (e.target.name === 'thZero') {
      setThZero(e.target.value);
    }
  };
  return (
    <div>
      <table className='ui celled table'>
        <thead>
          <tr>
            {constants.tableHeader &&
              constants.tableHeader.map(h => {
                console.log(h);
                return <th>{h}</th>;
              })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label='Name'>James</td>
            <td data-label='Age'>24</td>
            <td data-label='Job'>Engineer</td>
          </tr>
          <tr>
            <td data-label='Name'>
              <div className='ui input'>
                <input
                  name='thZero'
                  type='text'
                  onChange={handleChange}
                  value={thZero}
                  className='ui input'
                ></input>
              </div>
            </td>
            <td data-label='Age'>26</td>
            <td data-label='Job'>Engineer</td>
          </tr>
          <tr>
            <td data-label='Name'>Elyse</td>
            <td data-label='Age'>24</td>
            <td data-label='Job'>Designer</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default MainTable;

// ui table input
/*
              <div className='ui input'>
                <input type='text' className='ui input'></input>
              </div>
              */
