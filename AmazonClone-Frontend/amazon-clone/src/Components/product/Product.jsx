import React from "react";
import "./prouct.css";
import { useStateValue } from "../stateProvider/StateProvider";
function Product({ id, title, image, price, rating }) {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  const [{ basket }, dispatch] = useStateValue();
  // console.log("this is the basket", basket);
  const addToBasket = () => {
    dispatch({
      type: "ADD__TO__BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        quantity: 1,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{truncate(title, 100)}</p>
        <p className="product__price">
          <span>$</span>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              // <span>*</span>
              <span className="fa fa-star checked"></span>
              // <p className="star">*</p>
            ))}
        </div>
      </div>
      <div>
        <img src={image} alt="" />

        <button onClick={addToBasket}>Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;
