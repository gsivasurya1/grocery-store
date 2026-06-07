import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import api from "../services/api";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/products");

        console.log("Products:", res.data);

        setProducts(res.data);
      } catch (error) {
        console.error(
          "Error fetching products:",
          error
        );
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.name &&
      product.name.toLowerCase().includes(
        search.toLowerCase()
      )
  );

  return (
    <div className="product-grid">
  {filteredProducts.length > 0 ? (
    filteredProducts.map((product) => (
      <ProductCard
        key={product._id}
        product={product}
      />
    ))
  ) : (
    <h2
      style={{
        textAlign: "center",
        width: "100%",
      }}
    >
      No products found
    </h2>
  )}
</div>
  );
}

export default Products;