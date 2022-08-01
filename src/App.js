import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import {GlobalStyle} from './globalStyle'


function App() {
  return (
    <>
    <Router>
        <GlobalStyle/>
        <Navbar/>
        <Hero/>
    </Router>
    </>
  
  );
}

export default App;
