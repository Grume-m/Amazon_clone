import React from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../stateProvider/StateProvider";
import { useNavigate } from "react-router-dom";
function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => amount + item.price * item.quantity, 0);
  const getQuantity = (basket) => {
    return basket?.reduce((qty, item) => qty + item.quantity, 0);
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            {/* <p>
              Subtotal ({basket.length}itemes):<strong>{value}</strong>
            </p> */}
            <p>
              Subtotal ({getQuantity(basket)}{" "}
              {getQuantity(basket) === 1 ? "item" : "items"}):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="Checkbox" />
              This Order Contains a Gift
            </small>
          </div>
        )}
        decimalScale={2}
        // value={0}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => navigate("/payment")}>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
