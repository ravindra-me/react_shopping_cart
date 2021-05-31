import { useDispatch, useSelector } from "react-redux";
import { handleOrderBy } from "./state/action";

function OrderBy(props) {
  const selectedOrder = useSelector((state) => state.selectedOrder);
  const dispatch = useDispatch();
  return (
    <div className="sort">
      Order by
      <select
        value={selectedOrder}
        onChange={(event) => dispatch(handleOrderBy(event.target.value))}
      >
        <option value="">Select</option>
        <option value="lowest">Lowest to highest</option>
        <option value="highest">Highest to lowest</option>
      </select>
    </div>
  );
}

export default OrderBy;
