import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../../redux/actions/products";
import { addToCart } from "../../redux/actions/cart";
import Spinner from "../../lib/Spinner";

const ProductGrid = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <GridContainer>
        {products[0] ? (
          <>
            <FilterBar>FILTERS</FilterBar>
            <Grid>
              {products.map((product) => (
                <Card key={product.id}>
                  <Image src={product.assets[0].url} alt="" />
                  <h2>{product.name}</h2>
                  <button onClick={() => dispatch(addToCart(product))}>
                    Add to Cart
                  </button>
                </Card>
              ))}
            </Grid>
          </>
        ) : (
          <Spinner />
        )}
      </GridContainer>
    </>
  );
};

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FilterBar = styled.div`
  background-color: #d3d3d396;
  width: 80vw;
  height: 5em;
  display: flex;
  margin: 0 0 20px 0;
`;

const Grid = styled.div`
  width: 80vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 2em;
`;

const Card = styled.div`
  display: block;
  background-color: #e7e7e7;
  width: 100%;
  height: 100%;
  justify-self: center;
`;

const Image = styled.img`
  object-fit: fill;
  min-height: 15px;
  min-width: 150px;
  max-width: 400px;
  max-height: 400px;
`;

export default ProductGrid;
