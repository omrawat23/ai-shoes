import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaSignInAlt, FaShoppingCart } from 'react-icons/fa';

const Container = styled.div`
  background-color: #e9e8e4;
  padding: 0;
  height: 60px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  ${mobile({ padding: "10px 5px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #333;
  font-weight: bold;
  margin: 0;
  cursor: pointer;
  ${mobile({ fontSize: "16px", marginLeft: "10px" })}
`;

const Language = styled.span`
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  margin-left: 20px;
  ${mobile({ display: "none" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: 700;
  position: relative;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  ${mobile({ fontSize: "12px"})}

  svg {
    margin-right: 5px;
  }
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo>SnapFoot</Logo>
          </Link>
        </Left>
        <Right>
          <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
            <MenuItem>
              <FaSignInAlt /> SIGN IN
            </MenuItem>
          </Link>
          <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
            <MenuItem>
              <FaShoppingCart /> CART {quantity > 0 && <span>({quantity})</span>}
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;