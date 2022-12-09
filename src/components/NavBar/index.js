import "./navBar.css";
import { useDispatch, useSelector } from "react-redux";
import { selectProfile } from "../../store/user/selectors";
import { logOut } from "../../store/user/slice";
import { Link, useLocation, matchPath } from "react-router-dom";

const NavBar = ({ user }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const profile = useSelector(selectProfile);

  return (
    <div className="navbar">
      <div className="navMain">
        <Link to="/" className="navLogo">
          KALLOS
        </Link>

        <div className="navRight">
          {location.pathname.includes("service") ? (
            <div className="navTitDis">Service</div>
          ) : (
            <Link to="/service" className="navTit">
              Service
            </Link>
          )}

          {!profile ? (
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
            <div className="navRight">
              {location.pathname === "/message" ? (
                <div className="navTitDis">Message</div>
              ) : (
                <Link to="/message" className="navTit">
                  Message
                </Link>
              )}
              {location.pathname.includes("user") ? (
                <div className="navTitDis">Profile</div>
              ) : (
                <Link to={`/user/${profile.id}`} className="navTit">
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
