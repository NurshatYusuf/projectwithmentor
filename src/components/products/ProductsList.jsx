import React, { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import ProductCard from "../products/ProductCard";
import { useSearchParams } from "react-router-dom";
import "../../styles/productPage.css";
import Pagination from "@mui/material/Pagination";
import FilterProduct from "./FilterProduct";

const ProductsList = () => {
  const { products, getProducts } = useProducts();
  useEffect(() => {
    getProducts();
  }, []);
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("get") || "");
  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);

  // pagination logic start

  const [page, setPage] = useState(1);

  const itemsOnPage = 8;
  const count = Math.ceil(products.length / itemsOnPage);

  const handlePage = (e, p) => {
    setPage(p);
  };
  function currentData() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return products.slice(begin, end);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="search__Input">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
      </div>
      <FilterProduct />
      <div className="productList">
        {products ? (
          currentData().map((item) => <ProductCard key={item.id} item={item} />)
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
      {/* pagination start */}
      <Pagination
        count={count}
        page={page}
        onChange={handlePage}
        style={{ marginBottom: "80px", marginTop: "30px" }}
      />
    </div>
  );
};

export default ProductsList;
