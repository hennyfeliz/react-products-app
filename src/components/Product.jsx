import "../styles/Product.css";
import BuyButton from "./Button";

const Product = () => {
  return (
    <div className="product">
      <img
        src="https://picsum.photos/180"
        alt="products"
        className="product_img"
      />
      <h2 className="product_name">Product</h2>
      <div className="product_details">
        <p className="product_oldprice">300</p>
        <p className="product_newprice">180</p>
        <BuyButton />
      </div>
    </div>
  );
};

export default Product;
