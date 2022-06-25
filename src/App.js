import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import {useEffect, useState} from 'react'

import Search from './components/search/Search'
import OrderName from './components/order/OrderName';
import OrderPrice from './components/order/OrderPrice';
import Coins from './components/coins/Coins';

function App() {
  const [results, setResults] = useState(0)
  const [marketCap, setMarketCap] = useState(0)
  const [coins, setCoins] = useState([])

  useEffect(() => {
    const getCoins = async () => {
      const coinsFromServer = await fetchCoins();
      setCoins(coinsFromServer)
      setResults(coinsFromServer.length)
      setMarketCap(coinsFromServer.reduce((sum, el) => sum+el.current_price, 0))
      console.log(marketCap)
    }
    getCoins()
  }, []) 


  const fetchCoins = async () => {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_
    desc&sparkline=false&per_page=${5}&page=${1}`)
    const data = await res.json()
    console.log(data)
    return data
  }

  return (
    <>
      <Header />
      <div className='container'>
        <div className="coin-data">
          <div>Results: {results}</div>
          <div>Sum Market Cap: ${Math.floor(marketCap*100)/100}</div>
        </div>
        <Search />
        <div className='order'>
          <OrderName />
          <OrderPrice />
        </div>
        <Coins coins={coins}/>
      </div>
    </>
  );
}

export default App;
