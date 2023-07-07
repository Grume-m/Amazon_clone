import { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";

import "bootstrap/dist/css/bootstrap.css";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Home from "./Components/homes/Home.jsx";
import Checkout from "./Components/checkout/Checkout";
import Login from "./Components/login/Login";
import NewCostemer from "./Components/homes/new/NewCostemer";
import Footer from "./Components/footer/Footer";
import { useStateValue } from "./Components/stateProvider/StateProvider";
import { auth } from "./firebase";
import Payment from "./Components/payment/Peyment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./Components/orders/Orders";
const promise = loadStripe(
  "pk_test_51NPCFXKxZDgGSqHTvNeumxXXoqjS2lpuUcDdDV68IlVbpCTlFRVoFuYAW6fFqWAC89w5PdqeIgpjuVvMJmAdRLnQ00s1YM52uZ"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET__USER",
          user: authUser,
        });
      } else {
        // the user logged out
        dispatch({
          type: "SET__USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    // <>
    //   <Header />
    //   <Home />
    //   <Checkout />
    // </>
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />

          {/* <Route path="/payment" element={<Payment />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <NewCostemer />
        <Footer />
      </Router>
    </>
  );
}

export default App;
