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
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/pricing" element={<Pricing />} />
    </Routes>
    </>
     
    
    
  );
}

export default App;
