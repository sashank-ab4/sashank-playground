import { useEffect, useState } from "react";

const ProductCard = ({ image, title }) => {
  return (
    <div className=" border">
      <img className="h-20 " src={image} alt={title} />
      <span>{title}</span>
    </div>
  );
};

export default function ProductPagination() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products?limit=500");
      const json = await response.json();
      setProducts(json.products);
    };
    fetchData();
  }, []);

  return !products.length ? (
    <p>No products available....</p>
  ) : (
    <>
      <div>
        <h2>Product Pagination</h2>
        <div></div>
        {/* <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul> */}
        {products.map((p) => (
          <ProductCard title={p.title} image={p.thumbnail} />
        ))}
      </div>
    </>
  );
}
