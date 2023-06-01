import React from 'react';
import { DataProvider } from './DataContext';
import Table from './Table';
import Search from './Search';
import "./styles.css"
const App = () => {
  return (
    <DataProvider>
      <Search />
      <Table />
    </DataProvider>
  );
};

export default App;
