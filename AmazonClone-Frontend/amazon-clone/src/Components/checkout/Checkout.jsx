import React from "react";
import "./Checkout.css";
import Subtotal from "../subtotal/Subtotal";
import CheckOutProduct from "../checkoutProduct/CheckOutProduct";
import { useStateValue } from "../stateProvider/StateProvider";
import SubTotalUnderCart from "../subtotal/SubTotalUnderCart";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="chechout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQieg6rgW_cyONzUV2VbcZGNFZtzKzGpDaupA&usqp=CAU"
          // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmnIs9yoS4UK1d_lOGXG6jjxcvlawBcARDmA&usqp=CAU"
          alt=""
        />
        <h1>Hello</h1>
        <h2 className="checkout__title">Your Shopping Basket</h2>
        {basket.map((item) => (
          <CheckOutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            quantity={item.quantity}
          />
        ))}
      </div>
      <div className="checkout__right subTotal_checkOut">
        <br />
        <h2>
          <SubTotalUnderCart />
        </h2>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
