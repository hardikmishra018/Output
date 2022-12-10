import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar";
import Company from "./Components/Company/Company";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/company" element={<Company />}></Route>
        {/* <Route path="/help" element={<Help />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="*" element={<Home />}></Route> */}
      </Routes>
    </div>
  );
}
