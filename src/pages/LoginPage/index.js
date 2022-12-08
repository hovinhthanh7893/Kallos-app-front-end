import "./loginPage.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/user/thunks";
import { selectError, selectToken } from "../../store/user/selectors";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [provideService, setProvideService] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);
  const getError = useSelector(selectError);

  useEffect(() => {
    if (token !== null) {
      navigate("/user");
    }
  }, [token, navigate]);

  const submit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="login">
      <div className="loginGroup">
        <div className="signupFormBack">
          <form onSubmit={submit} className="loginForm">
            <div className="loginTit">Creat a new account</div>
            <input
              className="loginFormInput"
              placeholder="Name"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="loginFormInput"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="loginFormInput"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="signupCheckBox">
              <input
                className="checkbox"
                type="checkbox"
                value={provideService}
                onChange={(e) => setProvideService(!provideService)}
              />
              {provideService === false ? (
                <div>&ensp;I want to provide service</div>
              ) : (
                <div>
                  &ensp;<b>I want to provide service</b>
                </div>
              )}
            </div>
            {!getError ? null : <div className="loginError">{getError}</div>}
            <button type="submit" className="signupButton">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className="loginGroup">
        <div className="loginFormBack">
          <form onSubmit={submit} className="loginForm">
            <div className="loginTit">
              Already have <br />
              an account
            </div>
            <input
              className="loginFormInput"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="loginFormInput"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            {!getError ? null : <div className="loginError">{getError}</div>}
            <button type="submit" className="loginButton">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export { LoginPage };
