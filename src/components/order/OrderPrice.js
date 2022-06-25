import { FaSortAmountDown } from "react-icons/fa";


const OrderPrice = ({onSort}) => {
  return (
    <div className="order-container">
      <label htmlFor="order-byprice">Order By Price</label>
      <div className="order-container-select">
        <select name="" id="order-byname" onChange={(e) => onSort(e.target.value)}>
          <option value="">Select</option>
          <option value="priceAscending">Lowest to Highest</option>
          <option value="priceDescending">Highest to Lowest</option>
        </select>
        <FaSortAmountDown />
      </div>
    </div>
  )
}

export default OrderPrice;