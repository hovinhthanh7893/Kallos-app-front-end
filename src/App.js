import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./config/ScrollToTop";
import { Footer, NavBar } from "./components";
import {
  HomePage,
  ServicerPage,
  LoginPage,
  UserPage,
  MessagePage,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/service" element={<ServicerPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/message" element={<MessagePage />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
