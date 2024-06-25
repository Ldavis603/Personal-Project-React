import {Link} from "react-router-dom";
import logo from "../images/Logo.png";
import { useNavigate } from "react-router-dom";

// const header ={
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-between'

// }
function Header({user, setUser}) {
 const navigate = useNavigate(); 
    
const handleLogout = () => {
  fetch("http://localhost:4000/api/authRoutes/logout", {
  method: "GET",

})
  .then((response) => response.json()).then((response) => {
    if (response.statusCode === 200) {
      setUser ({});
      localStorage.removeItem("user");
      navigate("/exercise");
    } else {
      throw new Error(response.error)
    }
  })
  .catch ((error) => {
    console.log("errLogout", error);
    navigate ("/account");
});
};


  return (
    <div className="Header">
      <header className="App-header">
        <nav className="navbar">
        <img src={logo} alt="Logo" width={150} height={150} />

          <ul>
            <li>
              <Link to="/" className="class1">
                Home
              </Link>
            </li>
            <li>
              <Link to="/account" className="class1">
                Account
              </Link>
            </li>
            <li>
              <Link to="/exercise" className="class1">
                Exercise
              </Link>
            </li>
            <li>
              <Link to="/contact" className="class1">
                Contact Us
              </Link>
            </li>
            {/* <li>
              <Link to="/account" className="class1" onClick={handleLogin}>Login</Link>
            </li> */}
            <li>
              <Link to="" className="class1" onClick={handleLogout}>
                Logout
              </Link>
            </li>

          </ul>
          <i className="fa fa-bars"></i>
        </nav>
      </header>
    </div>
  );
}

export default Header;
