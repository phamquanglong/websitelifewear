import Menu from "./components/Menu/Menu";
import Slider from "./components/Slider";
import ProductsList from "./components/Products/ProductsList";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { getBanner, getProducts } from "./Data";

var App = () => {

  return <div>
      <div className="fixed w-full z-10 bg-white top-0">
        <Menu />
      </div>
      
      <div className="mt-20">
        <Slider />

        <ProductsList id={1}/>
        <ProductsList id={6}/>
        <ProductsList id={20}/>
      </div>

      <Footer />
    </div>
}

export default App;
