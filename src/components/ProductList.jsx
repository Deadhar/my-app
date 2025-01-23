
const ProductList = function(props){
    const {product} = props
    return (
    <ul>
    {product.map((product, index) => (
     <li key={index}>{product}</li>
    ))}
    </ul>
    );
}
    export default ProductList