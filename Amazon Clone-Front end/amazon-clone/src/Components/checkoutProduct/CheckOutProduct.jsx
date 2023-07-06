import React from "react";
import "./Checkoutproduct.css";
import { useStateValue } from "../stateProvider/StateProvider";
function CheckOutProduct({
  id,
  title,
  image,
  price,
  rating,
  quantity,
  hideButton,
}) {
  const [{ basket }, dispatch] = useStateValue();

  const removFromBasket = () => {
    dispatch({
      type: "REMOVE__FROM__BASKET",
      id: id,
      title: title,
      image: image,
      price: price,
      rating: rating,
      quantity: 1,
    });
  };
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
    // console.log(item)
  };

  // const DeleteItem = () => {
  //   dispatch({
  //     type: "DELETE",
  //     item: {
  //       id: id,
  //       title: title,
  //       image: image,
  //       price: price,
  //       rating: rating,
  //       quantity: 1,
  //     },
  //   });
  //   // console.log(item)
  // };
  // const removeFromBasket = () => {
  // 	dispatch({
  // 		type: "REMOVE_FROM_BASKET",
  // 		id: id,
  // 	});
  // };
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="checkoutproduct">
      <img className="checkoutproduct__image" src={image} />
      <div className="checkoutproduct__info">
        <p className="checkoutproduct__titlt">{truncate(title, 100)}</p>
        <p className="checkoutproduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutproduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              // <span>*</span>
              <span className="fa fa-star checked"></span>
              // <p className="star">*</p>
            ))}
        </div>
        <p>Qty= {quantity}</p>
        <br />
        <button onClick={addToBasket}>
          <strong>+</strong>
        </button>
        {!hideButton && (
          <button onClick={removFromBasket}>
            <strong>-</strong>
          </button>
        )}
        {""}

        {/* {!hideButton && <button onClick={removeFromBasket}>Remove </button>} */}
        <br />
        <div className="underline"></div>
        {/* <button onClick={removFromBasket}> Remove from Basket</button> */}
      </div>
    </div>
  );
}

export default CheckOutProduct;
