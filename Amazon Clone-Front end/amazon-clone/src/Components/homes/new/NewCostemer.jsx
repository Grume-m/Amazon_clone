import React, { useState } from "react";
import "./new.css";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase";
import { useStateValue } from "../../stateProvider/StateProvider";
function NewCostemer() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="notice">
      <div className="notice__brdr">
        <div className="notice__recommend">
          <p>See personalized recommendations</p>
        </div>
        <div>
          <Link to={!user && "/Login"} className="notice__button">
            <button onClick={handleAuthenticaton}>
              {user ? "Sign Out" : "Sign In"}
            </button>
          </Link>
        </div>
        <div className="notice__newCustomer">
          <p className="newCustomer">
            {user ? user?.email : "New customer?"}&nbsp;
            <Link to={"/Login"} className="header__clearlink">
              {user ? null : "start here."}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewCostemer;
// import React, { useState } from "react";
// import "./new.css";
// function NewCostemer() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const signIn = (e) => {
//     e.preventDefault();
//     auth
//       .signInWithEmailAndPassword(email, password)
//       .then((auth) => {
//         history.push("/");
//       })
//       .catch((error) => alert(error.message));
//   };
//   return (
//     <>
//       <hr />

//       <div className="new">
//         <p>See Personalized recommendations</p>

//         <button type="submit" onClick={signIn} className="login__signinButton">
//           Sign In
//         </button>
//         <p>
//           New customer?
//           <span>
//             <a className="newCustomer" href="/login">
//               Start here.
//             </a>
//           </span>
//         </p>

//         {/* <button type="submit" onClick={signIn} className="login__signInButton" /> */}
//         {/* </div> */}
//       </div>
//       <hr />
//     </>
//   );
// }

// export default NewCostemer;
