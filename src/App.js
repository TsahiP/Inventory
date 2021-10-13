import './App.css';
import MainTable from './components/MainTable';
import TableContextProvider from './context/TableDataContext';

function App() {
  return (
    <div className='App'>
      <TableContextProvider>
        <MainTable />
      </TableContextProvider>
    </div>
  );
}

export default App;
