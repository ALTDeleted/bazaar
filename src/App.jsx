import Routes from "./Routes";
import React, { useEffect } from "react";
import { getProducts } from "./redux/actions/products";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return <Routes />;
};

export default App;
