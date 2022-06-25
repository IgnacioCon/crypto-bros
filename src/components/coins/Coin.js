
const Coin = ({name, image, price}) => {
  return (
    <div className="coin-card">
      <img className="coin-img" src={image} alt="" />
       <h4>{name}</h4>
       <p>${price}</p>
    </div>
  )
}

export default Coin;