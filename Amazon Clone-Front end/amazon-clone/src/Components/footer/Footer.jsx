import React from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.css";
import LanguageIcon from "@mui/icons-material/Language";
import flag from "../../assets/image/16.png";
import usFlag from "../../assets/image/us-flag.jpg";
// import "react-bootstrap";
function Footer() {
  return (
    <>
      <footer className="footer__wrapper">
        <div className="up">
          <h5 className="back"> Back to up</h5>
        </div>
        <div className="container ">
          <div className="row text-white  text_d ">
            <div className="get__know_us col-sm  col-md">
              <h3>Get to Know Us</h3>
              <ul className="list-unstyled">
                <li>Careers</li>
                <li>Amazon Newsletter</li>
                <li>About Amazon</li>
                <li>Accessibility</li>
                <li>Sustainability</li>
                <li>Press Center</li>
                <li>Press Center</li>
                <li>Amazon Devices</li>
                <li>Amazon Science</li>
              </ul>
            </div>
            <div className="  col-sm col-md">
              <h3>Make Money with Us</h3>
              <ul className="list-unstyled">
                <li>Sell products on Amazon</li>
                <li>Sell apps on Amazon</li>
                <li>Supply to Amazon</li>
                <li>Protect & Build Your Brand</li>
                <li>Become an Affiliate</li>
                <li>Become a Delivery Driver</li>
                <li>Start a Package Delivery Business</li>
                <li>Advertise Your Products</li>
                <li>Self-Publish with Us</li>
                <li>Host an Amazon Hub</li>
                <li>›See More Ways to Make Money</li>
              </ul>
            </div>
            <div className="col-sm col-md">
              <h3>Amazon Payment Products</h3>
              <ul className="list-unstyled">
                <li>Amazon Visa</li>
                <li>Amazon Store Card</li>
                <li>Amazon Secured Card</li>
                <li>Amazon Business Card</li>
                <li>Shop with Points</li>
                <li>Credit Card Marketplace</li>
                <li>Reload Your Balance</li>
                <li>Amazon Currency Converter</li>
              </ul>
            </div>
            <div className="col-sm col-md">
              <h3>Let Us Help You</h3>
              <ul className="list-unstyled">
                <li>Amazon and COVID-19</li>
                <li>Your Account</li>
                <li>Your Orders</li>
                <li>Shipping Rates & Policies</li>
                <li>Amazon Prime</li>
                <li>Returns & Replacements</li>
                <li>Manage Your Content and Devices</li>
                <li>Your Recalls and Product Safety Alerts</li>
                <li>Help</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="line" />
        {/* <div className="login__log ">
          <div className="col-md">
            {/* <Link to-="/"> */}
        {/* <img
              className="foorer__img "
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" */}
        {/* // alt=""
              // "login_logo"
              // src="https://m.media-amazon.com/images/G/01/gc/designs/livepreview/a_generic_white_10_us_noto_email_v2016_us-main._CB627448186_.png"
            /> */}
        {/* </div>
          <div className="col-md yet">
            {/* </> */}
        {/* <button> */}
        {/* <LanguageIcon className="laun" /> English */}
        {/* </button> */}
        {/* </div>
          <div className="col-md ye">
            <button> */}
        {/* <img src={flag} alt="" /> */}
        {/* <img src={usFlag} alt="" />
              United State */}
        {/* </button> */}
        {/* </div> */}
        {/* </div> */}
        <div className="footer_logos_container">
          <div className="footer_logos_wrapper">
            <div className="header__clearlink">
              <div className="footer__logo">
                <img
                  src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  alt="amazon-logo"
                />
              </div>
            </div>
            <div className="ftr_wrapper_right">
              <div className="language ftr_wrapper_right_brdr">
                <LanguageIcon fontSize="small" /> &nbsp;&nbsp;
                <span>English</span>
                {/* <UnfoldMoreIcon fontSize="small" /> */}
              </div>
              <div className="us_dollar ftr_wrapper_right_brdr">
                <p>
                  $ &nbsp;&nbsp;<span>USD-U.S.Dollar</span>
                </p>
              </div>
              <div className="us ftr_wrapper_right_brdr">
                <img src={usFlag} alt="us-flage" /> <span>United States</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__credit">
          <h4>
            Built by:-
            <a href="https://grume19.com" target="_blank" rel="noreferrer">
              {" "}
              (G)
            </a>
          </h4>
        </div>
      </footer>
    </>
  );
}

export default Footer;
