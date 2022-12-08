import "./navBar.css";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { logOut } from "../../store/user/slice";
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ user }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const token = useSelector(selectToken);

  return (
    <div className="navbar">
      <div className="navMain">
        <Link to="/" className="navLogo">
          KALLOS
        </Link>

        <div className="navRight">
          {location.pathname === "/service" ? (
            <div className="navTitDis">Service</div>
          ) : (
            <Link to="/service" className="navTit">
              Service
            </Link>
          )}

          {!token ? (
            <div>
              {location.pathname === "/login" ? (
                <div className="navTitDis">Login</div>
              ) : (
                <Link to="/login" className="navTit">
                  Login
                </Link>
              )}
            </div>
          ) : (
            <div>
              {location.pathname === "/message" ? (
                <div className="navTitDis">Message</div>
              ) : (
                <Link to="/message" className="navTit">
                  Message
                </Link>
              )}
              {location.pathname === "/user" ? (
                <div className="navTitDis">Profile</div>
              ) : (
                <Link to="/user" className="navTit">
                  Profile
                </Link>
              )}
              <Link
                className="navTit"
                to="/"
                onClick={() => {
                  dispatch(logOut());
                }}
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="pageLine"></div>
    </div>
  );
};

export { NavBar };
