import Routes from "./Routes";
import React from "react";
import Layout from "./components/Layout";
import Header from "./components/Header/Header";
const App = () => {
  return (
    <div>
      <Layout>
        <Routes />
      </Layout>
    </div>
  );
};

export default App;
