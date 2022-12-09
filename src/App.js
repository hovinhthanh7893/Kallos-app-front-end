import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserWithStoredToken } from "./store/user/thunks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./config/ScrollToTop";
import { Footer, NavBar } from "./components";
import {
  HomePage,
  ServicePage,
  LoginPage,
  DetailServicerPage,
  UserPage,
  MessagePage,
} from "./pages";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/service/:id" element={<DetailServicerPage />} />
            <Route path="/user/:id" element={<UserPage />} />
            <Route path="/message" element={<MessagePage />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
