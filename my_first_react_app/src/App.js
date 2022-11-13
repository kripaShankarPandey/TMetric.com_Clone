import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home_page/Home";
 import Login from "./components/Login";
 import Signup from "./components/Signup";
 import Pricing from "./components/Pricing";
function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Login" element={<Login />} />
      <Route exact path="/Signup" element={<Signup />} />
      <Route exact path="/Pricing" element={<Pricing />} />
    </Routes>
    </>
     
    
    
  );
}

export default App;
