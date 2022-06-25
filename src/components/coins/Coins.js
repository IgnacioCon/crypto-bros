import Coin from './Coin';

const Coins = ({coins}) => {
  return (
    <div className='coins'>
      {coins.map((coin) => <Coin key={coin.id} name={coin.name} image={coin.image} price={coin.current_price} />)}
    </div>
  )

}

export default Coins;