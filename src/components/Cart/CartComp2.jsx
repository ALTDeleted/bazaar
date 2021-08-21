import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decrement, increment } from "../../redux/actions/cart";

const CartItems = styled.div`
  width: 1100px;
  /* height: auto; */
  display: flex;
  flex-direction: column;
  /* margin: auto; */
  > h1 {
    align-self: center;
    margin-bottom: 30px;
  }
`;
const CartItem = styled.div`
  border: 1px solid black;
  height: 400px;
  display: flex;
  margin-bottom: 30px;
`;
const Item = styled.div`
  width: 400px;
  padding: 20px;
  > img {
    height: 300px;
    width: 300px;
    object-fit: cover;
    margin-bottom: 20px;
  }
  > div {
    font-size: 24px;
    font-weight: 700;
  }
`;
const Functions = styled.div`
  display: flex;
  width: 400px;
  /* height: 500px; */
  align-items: center;
  justify-content: center;
`;
const Price = styled.h1`
  display: flex;
  width: 200px;
  /* height: 500px; */
  align-items: center;
  justify-content: center;
`;
const Increase = styled.button`
  height: 50px;
  width: 50px;
  border: none;
  border-radius: 30px;
  margin: 10px;
  cursor: pointer;
`;
const Decrease = styled.button`
  height: 50px;
  width: 50px;
  border: none;
  border-radius: 30px;
  margin: 10px;
  cursor: pointer;
`;
const Card = styled.div`
  display: flex;
  padding: 30px;
  height: 300px;
  > h1 {
    font-size: 25px;
    border-bottom: 1px #fff solid;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    margin-right: 30px;
  }
`;

const CartComp = () => {
  const c = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log("c");
  return (
    <>
      <CartItems>
        <h1>Your Cart</h1>
        {c.length === 0 && <div> No Items are added</div>}
        {c.map((item, index) => (
          <CartItem key={index}>
            <Card>
              <img src={item.assets[0].url} alt="image" />
              <h1>{item.name}</h1>
            </Card>
            <Functions>
              <Decrease
                onClick={() => {
                  dispatch(decrement(item.id, item.quantity));
                }}
              >
                -
              </Decrease>

              <h1> {item.quantity}</h1>

              <Increase
                onClick={() => {
                  dispatch(increment(item.id));
                }}
              >
                +
              </Increase>
            </Functions>
            <Price>₹ {item.quantity * item.price.raw}</Price>
          </CartItem>
        ))}
      </CartItems>
    </>
  );
};

export default CartComp;
