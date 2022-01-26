import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Pages/Product/Product";
import Payment from "./Pages/Payment/Payment";
import Login from "./Pages/User/Login/Login";
import Signup from "./Pages/User/Signup/Signup";
import Forgot from "./Pages/User/Forgot/Forgot";
import ForgotConfirmation from "./Pages/User/Forgot/ForgotConfirmation";
import ResetPassword from "./Pages/User/Forgot/ResetPassword";
import ResetConfirmation from "./Pages/User/Forgot/ResetConfirmations";
// import Home from "./Pages/Home/Home";
import Survey from "./Pages/Survey/Survey";
import Members from "./Pages/Members/Members";
import Friends from "./Pages/Friends/Friends";
import Profile from "./Pages/Profile/Profile";
import Admin from "./Pages/Admin/Admin";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/product" element={<Product />} /> */}
        <Route path="/members" element={<Members />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/forgotConfirmation" element={<ForgotConfirmation />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/resetConfirmation" element={<ResetConfirmation />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}
export default App;
