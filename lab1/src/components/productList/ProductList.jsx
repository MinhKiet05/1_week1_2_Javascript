import "./ProductList.css";

function ProductList() {
  const products = [
    { id: 1, name: "Product 1", price: 120000 },
    { id: 2, name: "Product 2", price: 150000 },
    { id: 3, name: "Product 3", price: 180000 },
    { id: 4, name: "Product 4", price: 210000 },
    { id: 5, name: "Product 5", price: 250000 },
  ];

  return (
    <div className="product-list">
      {products.map((item) => (
        <div className="product-card" key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.price.toLocaleString()}₫</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
