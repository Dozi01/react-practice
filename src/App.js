import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coinData, setCoinData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchCoin, setSearchCoin] = useState("");

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoinData(json);
        setLoading(false);
      });
  }, []);

  const onChange = (event) => setInputValue(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    setSearchCoin(inputValue);
  };

  // filter coinData
  const items = coinData
    .filter((item) => {
      if (searchCoin == null) {
        return item;
      } else if (item.name.toLowerCase().includes(searchCoin.toLowerCase())) {
        return item;
      }
    })
    .map((item) => {
      return (
        <li key={item.id}>
          {item.name} : {item.quotes.USD.price}
        </li>
      );
    });

  return (
    <div>
      <h1>The Coins ! </h1>
      {loading ? null : <h3>There are {coinData.length} Coins in the world</h3>}
      {loading ? <strong>Loading...</strong> : null}
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={inputValue}
          type="text"
          placeholder="Coin"
        />
        <button>Search</button>
      </form>
      <div>
        <ul>
          {items}
          {/* {coinData.map((coin) => (
            <li key={coin.id}>
              {coin.name} : {coin.quotes.USD.price} USD
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  );
}

export default App;
