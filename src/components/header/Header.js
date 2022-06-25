import { FaSyncAlt } from 'react-icons/fa'

const Header = ({getMoreCoins}) => {
  return (
    <header className="header">
      <h1 className='header-title'>CryptoBros</h1>
      <FaSyncAlt 
        className='header-button'
        onClick={getMoreCoins}
      />
    </header>
  )
}

export default Header;