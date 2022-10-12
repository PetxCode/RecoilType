import React from "react";
import styled from "styled-components";
import { authData, cartData } from "../Global/Global";
import pix from "./logo.png";
import { useRecoilState, useRecoilValue } from "recoil";
import { Link } from "react-router-dom";

const Header = () => {
  const [userName, setUserName] = useRecoilState(authData);
  const cart = useRecoilValue(cartData);
  return (
    <div>
      <Container>
        <Wrapper>
          <Phase>
            <Logo src={pix} />

            <Navigation>
              <Nav to="/">Products</Nav>
              <Nav to="/cart">Cart: {cart.length}</Nav>
            </Navigation>
          </Phase>
          <Phase>
            <Log
              onClick={() => {
                setUserName(null!);
              }}
            >
              Log Out
            </Log>
          </Phase>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Header;

const Log = styled.div`
  padding: 15px 30px;
  background-color: red;
  border-radius: 3px;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: scale(1.005);
    font-weight: 900;
  }
`;

const Nav = styled(Link)`
  color: white;

  text-decoration: none;
  margin: 0 15px;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    transform: scale(1.02);
    font-weight: 900;
  }
`;

const Navigation = styled.div`
  display: flex;
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 20px;

  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: scale(1.08);
    font-weight: 900;
  }
`;

const Phase = styled.div`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
`;
