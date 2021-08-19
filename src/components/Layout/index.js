import styled from "styled-components";
const Content = styled.main`
  max-width: 800px;
  margin: 100px auto 0 auto;
  padding: 0 16px;
  font-family: "Open Sans";
`;
const Layout = ({ children }) => {
  return (
    <>
      <Content>{children}</Content>
    </>
  );
};

export default Layout;
