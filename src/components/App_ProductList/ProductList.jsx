import React from "react";

function ProductList({ productList }) {
  return (
    <div>
      <ul>
        {productList && productList.length > 0 ? (
          productList.map((item, index) => (
            <li key={item.id || index}>{item.productName}</li>
          ))
        ) : (
          <li>Список пустой</li>
        )}
      </ul>
    </div>
  );
}

export default ProductList;