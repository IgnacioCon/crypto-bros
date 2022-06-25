import './App.css';
import {useEffect, useState} from 'react'

import Header from './components/header/Header'
import Search from './components/search/Search'
import OrderName from './components/order/OrderName';
import OrderPrice from './components/order/OrderPrice';
import Coins from './components/coins/Coins';

function App() {
  const [results, setResults] = useState(5)
  const [marketCap, setMarketCap] = useState(0)
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const getCoins = async (results) => {
      const coinsFromServer = await fetchCoins(results);
      setCoins(coinsFromServer)
      setMarketCap(coinsFromServer.reduce((sum, el) => sum+el.current_price, 0))
    }
    getCoins(results)
  }, []) 


  const fetchCoins = async (results) => {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_
    desc&sparkline=false&per_page=${results}&page=${1}`)
    const data = await res.json()
    return data
  }

  const onGetMoreCoins = async () => {
    if(results+5 > 30) {
      alert('You\' reached the limit of 30 coins!')
      return
    }
    const coinsFromServer = await fetchCoins(results+5);
    setResults(results+5)
    setCoins(coinsFromServer)
    setMarketCap(coinsFromServer.reduce((sum, el) => sum+el.current_price, 0))
  }

  const searchCoins = async (termToSearch) => {
    const searchTerm = termToSearch.toString().toLowerCase().trim();
    if (searchTerm === '') {
      setSearch(termToSearch)
      const res = await fetchCoins(results)
      setCoins(res)
      return
    }

    setSearch(termToSearch)
    setCoins(coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm)))
  }

  const sortCoins = async (sortBy) => {
    switch(sortBy) {
      case "alphabeticallyAscending":
        setCoins([...coins].sort(compare))
        break;
      case "alphabeticallyDescending":
        setCoins([...coins].sort((a,b) => compare(b,a)))
        break;
      case "priceAscending":
        setCoins([...coins].sort((a,b) => a.current_price - b.current_price))
        break;
      case "priceDescending":
        setCoins([...coins].sort((a,b) => b.current_price - a.current_price))
        break;
      default:
        const res = await fetchCoins(results)
        setCoins(res)
    }
  }

  const compare = (a,b) => {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }

  return (
    <>
      <Header getMoreCoins={onGetMoreCoins}/>
      <div className='container'>
        <div className="coin-data">
          <div>Results: {results}</div>
          <div>Sum Market Cap: ${Math.floor(marketCap*100)/100}</div>
        </div>
        <Search search={search} onSearch={searchCoins} />
        <div className='order'>
          <OrderName onSort={sortCoins} />
          <OrderPrice onSort={sortCoins} />
        </div>
        <Coins coins={coins}/>
      </div>
    </>
  );
}

export default App;
