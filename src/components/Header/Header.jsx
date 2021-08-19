import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Slide from "@material-ui/core/Slide";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/actions/cart";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Head appear={false} direction="down" in={!trigger}>
      {children}
    </Head>
  );
}

export default function Header(props) {
  return (
    <>
      <HideOnScroll {...props}>
        <NavContainer>
          <Title>
            <Link style={{ color: "unset", textDecoration: "inherit" }} to="/">
              Bazaar
            </Link>
          </Title>
          <List>
            <Category>
              <Link
                style={{ color: "unset", textDecoration: "none" }}
                to="/new"
              >
                What's New
              </Link>
            </Category>
            <Category>
              <Link
                style={{ color: "unset", textDecoration: "none" }}
                to="/men"
              >
                Men
              </Link>
            </Category>
            <Category>
              <Link
                style={{ color: "unset", textDecoration: "none" }}
                to="/women"
              >
                Women
              </Link>
            </Category>
            <Category>
              <Link
                style={{ color: "unset", textDecoration: "none" }}
                to="/kids"
              >
                Kids
              </Link>
            </Category>
            <Category>
              <Link
                style={{ color: "unset", textDecoration: "inherit" }}
                to="/cart"
              >
                Cart
              </Link>
            </Category>
          </List>
        </NavContainer>
      </HideOnScroll>
    </>
  );
}

const Head = styled(Slide)`
  :hover {
    background-color: #1a1a1a;
    background-image: none;
    color: white;
  }
`;

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100px;
  background-image: linear-gradient(gray, transparent);
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  color: inherit;
`;

const Title = styled.h1`
  margin-top: 40px;
`;

const Category = styled.li`
  list-style: none;
  font-size: 1.2em;
  margin: -20px 10px 30px 10px;
  text-decoration: none;
  color: inherit;
`;
