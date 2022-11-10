import { Box } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import Topbanner from "./components/banner/Topbanner"
import Mainfooter from "./components/footer/Mainfooter"
import { UpperFooter } from "./components/footer/UpperFooter";
function App() {
  return (
    <Box>
       <Navbar/>
       <Topbanner/>
       <UpperFooter/>
       <Mainfooter/>
    </Box>
     
    
    
  );
}

export default App;
