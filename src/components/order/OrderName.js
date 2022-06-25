import { FaSortAlphaDown } from "react-icons/fa";


const OrderName = () => {
  return (
    <div className="order-container">
      <label htmlFor="order-byname">Order By Name</label>
      <div className="order-container-select">
        <select name="" id="order-byname">
          <option value="">Select</option>
        </select>
        <FaSortAlphaDown />
      </div>
    </div>
  )
}

export default OrderName;