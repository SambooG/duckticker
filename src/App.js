import React, { useState } from 'react';
import logo from './logo.svg';
import stockApi from './api/stockapi';
import './App.css';

const Database = [
  {
    email: 'john@doe.com',
    name: "John Doe",
    password: '3298pji32d08923p9be',
    portfolio: ["A", "AA", "SQ"]
  },
  {
    email: 'jane@doe.com',
    name: "Jane Doe",
    password: '3290wjoi2q;',
    portfolio: ["AAP", "AAON", "SNAP", "SQ"]
  }
]
function App() {  
  const [data, storeData] = useState('');

  const getStockData = (symbol) => {
    stockApi(symbol, (stockData) => storeData(JSON.stringify(stockData)));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {
          Database[1].portfolio.map(symbol => (
            <button onClick={() => getStockData(symbol)}>
              Get {symbol} Stock!
            </button>
          ))
        }
        {data}
      </header>
    </div>
  );
}

export default App;
