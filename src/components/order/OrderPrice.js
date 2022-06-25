import { FaSortAmountDown } from "react-icons/fa";


const OrderPrice = () => {
  return (
    <div className="order-container">
      <label htmlFor="order-byprice">Order By Price</label>
      <div className="order-container-select">
        <select name="" id="order-byname">
          <option value="">Select</option>
        </select>
        <FaSortAmountDown />
      </div>
    </div>
  )
}

export default OrderPrice;