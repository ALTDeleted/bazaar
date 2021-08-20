import React from "react";
import styled from "styled-components";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import { Link } from "react-router-dom";
import CartModal from "./CartModal";
import { motion } from "framer-motion";

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
                New
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
                style={{ color: "unset", textDecoration: "none" }}
                to="/history"
              >
                Order
              </Link>
            </Category>
            <CategoryCart>
              <Link
                style={{ color: "unset", textDecoration: "none" }}
                to="/cart"
              >
                <CartModal />
              </Link>
            </CategoryCart>
          </List>
        </NavContainer>
      </HideOnScroll>
    </>
  );
}

const Head = styled(Slide)`
  margin-top: -50px;

  :hover {
    background-color: #1a1a1a;
    color: white;
    transition: 0.6s;
    margin-top: 0px;
  }
`;

const NavContainer = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100px;
  background-image: linear-gradient(#000000a6, transparent);
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

const CategoryCart = styled(Category)`
  position: absolute;
  top: 3em;
  right: 2em;
`;
