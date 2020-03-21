import React, { useState } from 'react';
import stockApi from "../../api/stockapi"


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

function ButtonBar() {  
  const [data, storeData] = useState('');

  const getStockData = (symbol) => {
    stockApi(symbol, (stockData) => storeData(JSON.stringify(stockData)));
  };
  

  return (
        <div>
          <p>This is Button bar!</p>
          {
            Database[1].portfolio.map(symbol => (
              <button onClick={() => getStockData(symbol)}>
                Get {symbol} Stock!
              </button>
            ))
          }
          {data}
        </div>
  );
}

export default ButtonBar;