import styled from "styled-components";
import Product from "./Product";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await userRequest.get(
          cat ? `/products?category=${cat}` : "/products"
        );
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    if (cat) {
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key]?.toLowerCase().includes(value.toLowerCase())
          )
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "popular") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts((prev) => {
        const sortedProducts = [...prev];
        if (sort === "newest") {
          sortedProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        } else if (sort === "asc") {
          sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sort === "desc") {
          sortedProducts.sort((a, b) => b.price - a.price);
        }
        return sortedProducts;
      });
    }
  }, [sort, products]);

  return (
    <Container>
      {filteredProducts.slice(0, 8).map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;