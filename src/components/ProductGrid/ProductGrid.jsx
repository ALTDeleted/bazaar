import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/actions/cart";
import Spinner from "../../lib/Spinner";
import BaseCard from "../../lib/BaseCard";
import { AnimatePresence, motion } from "framer-motion";

const ProductGrid = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);

  return (
    <GridContainer
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      {products[0] ? (
        <>
          <FilterBar>FILTERS</FilterBar>
          <Grid
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            {products.map((product) => (
              <AnimatePresence exitBeforeEnter>
                <Card key={product.id}>
                  <Link
                    to={`/product/${product.id}`}
                    style={{ color: "unset", textDecoration: "none" }}
                  >
                    <Image
                      as={motion.img}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.7 }}
                      src={product.assets[0].url}
                      alt=""
                    />
                  </Link>
                  <h2>{product.name}</h2>
                  <Button
                    as={motion.button}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add to Cart
                  </Button>
                </Card>
              </AnimatePresence>
            ))}
          </Grid>
        </>
      ) : (
        <Spinner />
      )}
    </GridContainer>
  );
};

const GridContainer = styled(motion.div)`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FilterBar = styled(motion.div)`
  background-color: #d3d3d396;
  width: 90vw;
  height: 5em;
  display: flex;
  margin: 0 0 20px 0;
`;

const Grid = styled(motion.div)`
  width: 80vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2em;
`;

const Card = styled(motion.div)`
  display: block;
  padding: 1px;
  background-color: #c5c5c5;
  position: relative;
  width: 100%;
  height: 100%;
  justify-self: center;
  margin: auto;
`;

const Image = styled(motion.img)`
  object-fit: cover;
  height: auto;
  min-width: 100px;
  max-width: 100%;
`;

const Button = styled(motion.button)`
  min-width: 50px;
  height: fit-content;
  width: fit-content;
  padding: 10px;
  background-color: #1a1a1a;
  color: white;
  font-size: 1.1em;
  font-weight: 500;
  border-radius: 5px;
  bottom: 0;
`;

export default ProductGrid;
