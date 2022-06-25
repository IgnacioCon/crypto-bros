import { FaSortAlphaDown } from "react-icons/fa";


const OrderName = ({onSort}) => {
  return (
    <div className="order-container">
      <label htmlFor="order-byname">Order By Name</label>
      <div className="order-container-select">
        <select name="" id="order-byname" onChange={(e) => onSort(e.target.value)}>
          <option value="">Select</option>
          <option value="alphabeticallyAscending">Ascending Alphabetically</option>
          <option value="alphabeticallyDescending">Descending Alphabetically</option>
        </select>
        <FaSortAlphaDown />
      </div>
    </div>
  )
}

export default OrderName;