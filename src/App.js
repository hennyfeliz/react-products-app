import NavBar from "./components/NavBar";
import ProductContainer from "./components/ProductContainer";
import Product from "./components/Product";

const App = () => {
  return (
    <>
      <NavBar />
      <ProductContainer>
        <Product />
      </ProductContainer>
    </>
  );
};

export default App
