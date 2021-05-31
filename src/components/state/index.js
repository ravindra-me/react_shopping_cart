import { createStore } from "redux";

function reducer(
  state = {
    selectedOrder: "",
    isOpen: false,
  },
  action
) {
  switch (action.type) {
    case "close":
      return { ...state, isOpen: false };
    case "open":
      return { ...state, isOpen: true };
    case "selected-order-by":
      console.log(action.value);
      return { ...state, selectedOrder: action.value };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
