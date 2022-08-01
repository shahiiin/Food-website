import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/hero";
import Products from "./components/products";

import {GlobalStyle} from './globalStyle'
import {productData,productDataTwo} from './components/products/data'
import Feature from "./components/feature";

function App() {
  return (
    <>
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading='choose your favorite' data={productData}/>
      <Feature/>
      <Products heading='Sweet Treats for You' data={productDataTwo} />
    </Router>
    </>
  
  );
}

export default App;
