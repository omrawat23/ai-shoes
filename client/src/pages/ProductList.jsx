import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div`
  background-color: #e9e8e4;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h1`
  margin: 20px 0;
  text-align: center;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Filter = styled.div`
  margin: 0 10px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
  @media only screen and (max-width: 768px) {
    display: block;
    margin-bottom: 10px;
  }
`;

const Select = styled.select`
  padding: 10px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters(prevFilters => ({
      ...prevFilters,
      [e.target.name]: value,
    }));
  };

  return (
    <Container>
      <Navbar />
      <MainContent>
        <Title>{category ? category.charAt(0).toUpperCase() + category.slice(1) : "All Products"}</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option value="newest">Newest</Option>
              <Option value="asc">Price (asc)</Option>
              <Option value="desc">Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products category={category} filters={filters} sort={sort} />
      </MainContent>
    </Container>
  );
};

export default ProductList;