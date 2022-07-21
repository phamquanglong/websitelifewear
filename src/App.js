import Menu from "./components/Menu/Menu";
import Slider from "./components/Slider";
import ProductsList from "./components/Products/ProductsList";
import Footer from "./components/Footer";

var App = () => {

  return <div>
  <Menu />
  
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
