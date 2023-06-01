import { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  
  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const json = await response.json();
        console.log("CHECK response",json); 
        setData(json.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  

  return (
    <DataContext.Provider value={{ data, setData, selectedItems, setSelectedItems }}>
      {children}
    </DataContext.Provider>
  );
};
