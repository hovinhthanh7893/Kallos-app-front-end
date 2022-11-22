import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./config/ScrollToTop";
import { Footer, NavBar } from "./components";
import { HomePage, ServicerPage, SignUpPage, UserPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/provider" element={<ServicerPage />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
