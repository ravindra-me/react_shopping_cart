import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import OrderBy from "./OrderBy";
import Context from "./Context";

function handleOrderProducts(order, products) {
  let sortedProducts = [...products];
  if (order === "highest") {
    sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
  }
  if (order === "lowest") {
    sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
  }
  return sortedProducts;
}

function Products(props) {
  const { products } = useContext(Context);
  const selectedOrder = useSelector((state) => {
    console.log(state);
    return state.selectedOrder;
  });
  console.log(selectedOrder);
  let filteredProducts = handleOrderProducts(selectedOrder, products);

  return (
    <div>
      <div className="products-filter">
        <p>
          {`${filteredProducts.length} Product${
            filteredProducts.length > 1 ? "s" : ""
          } found.`}{" "}
        </p>
        <OrderBy />
      </div>
      <div className="flex wrap">
        {filteredProducts.map((product) => (
          <Product {...product} />
        ))}
      </div>
    </div>
  );
}
// }

function Product(props) {
  return (
    <div className="product-item">
      <div className="product-label">Free Shipping</div>
      <img
        className="product-item-img"
        src={`/static/products/${props.sku}_1.jpg`}
        alt={props.title}
      />
      <div className="product-item-details">
        <p className="product-item-title">{props.title}</p>
        <div className="line"></div>
        <h3 className="product-item-price">
          {props.currencyFormat + props.price}
        </h3>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}
export default Products;
