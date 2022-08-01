import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/hero";

import {GlobalStyle} from './globalStyle'


function App() {
  return (
    <>
    <Router>
        <GlobalStyle/>
      
        <Hero/>
    </Router>
    </>
  
  );
}

export default App;
