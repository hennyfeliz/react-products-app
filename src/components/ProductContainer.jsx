import '../styles/ProductContainer.css'

const ProductContainer = (props) => {
  return(
    <section className="products_section">
      <h1 className="products_title">Our products</h1>
      {props.children}
    </section>
  )
}


export default ProductContainer
