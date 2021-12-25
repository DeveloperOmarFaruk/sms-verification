import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Pages/Product/Product";
import Order from "./Pages/Order/Order";
import Payment from "./Pages/Payment/Payment";
import Login from "./Pages/User/Login/Login";
import Signup from "./Pages/User/Signup/Signup";
import Forgot from "./Pages/User/Forgot/Forgot";
import ForgotConfirmation from "./Pages/User/Forgot/ForgotConfirmation";
import ResetPassword from "./Pages/User/Forgot/ResetPassword";
import ResetConfirmation from "./Pages/User/Forgot/ResetConfirmations";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/product" element={<Product />} /> */}
        <Route path="/order" element={<Order />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/forgotConfirmation" element={<ForgotConfirmation />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/resetConfirmation" element={<ResetConfirmation />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
export default App;
