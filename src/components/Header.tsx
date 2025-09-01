import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logoImg from "../assets/5_No_background.png";


const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 56px;
  background: #fff;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoImg = styled.img`
  height: 90px;
  width: auto;
  margin-right: 12px;
`;

const Menu = styled.div`
  display: flex;
  gap: 36px;
  align-items: center;
  flex: 1;
  justify-content: center;
`;

const MenuLink = styled(Link)`
  color: #111151;
  font-weight: 500;
  font-size: 1.05rem;
  text-decoration: none;
  transition: color 0.15s;
  position: relative;
  &:hover {
    color: #232b97;
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownToggle = styled.button`
  background: none;
  border: none;
  color: #111151;
  font-weight: 500;
  font-size: 1.05rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0;
  transition: color 0.15s;
  &:hover {
    color: #232b97;
  }
`;

const Arrow = styled.span`
  margin-left: 7px;
  font-size: 0.8em;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 130%;
  left: 0;
  min-width: 140px;
  background: #fff;
  border: 1px solid #ebeaf5;
  box-shadow: 0 6px 16px rgba(44, 45, 94, 0.08);
  border-radius: 8px;
  z-index: 10;
  padding: 7px 0;
`;

const DropdownItem = styled(Link)`
  color: #232b52;
  font-size: 1rem;
  text-decoration: none;
  display: block;
  padding: 7px 22px;
  transition: background 0.15s, color 0.15s;
  &:hover {
    background: #f4f7fb;
    color: #232b97;
  }
`;

const Login = styled(Link)`
  color: #111151;
  display: flex;
  align-items: center;
  font-weight: 300;
  font-size: 1.05rem;
  gap: 9px;
  margin-right: 12px;
  text-decoration: none;
  &:hover {
    color: #232b97;
  }
`;

const Button = styled(Link)`
  background: #232b97;
  color: #fff;
  border: none;
  border-radius: 24px;
  font-weight: 600;
  font-size: 1rem;
  padding: 10px 28px;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.15s;
  &:hover {
    background: #182275;
  }
`;

export default function Header() {
  const [serviceOpen, setServiceOpen] = useState(false);

  React.useEffect(() => {
    const handleClick = () => setServiceOpen(false);
    if (serviceOpen) {
      document.addEventListener("click", handleClick);
    }
    return () => document.removeEventListener("click", handleClick);
  }, [serviceOpen]);

  return (
    <Nav>
      <Logo to="/">
        <LogoImg src={logoImg} alt="snowLEX logo" />
        
      </Logo>
      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        <Dropdown>
          <DropdownToggle
            onClick={(e) => {
              e.stopPropagation();
              setServiceOpen((open) => !open);
            }}
          >
            Services
            <Arrow>{serviceOpen ? "▲" : "▼"}</Arrow>
          </DropdownToggle>
          {serviceOpen && (
            <DropdownMenu onClick={(e) => e.stopPropagation()}>
              <DropdownItem to="/pricing">Pricing</DropdownItem>
              <DropdownItem to="/faq">FAQ</DropdownItem>
              <DropdownItem to="/subscribe">Subscribe</DropdownItem>
            </DropdownMenu>
          )}
        </Dropdown>
        <MenuLink to="/contact">Contact</MenuLink>
      </Menu>
      <Login to="/login">Login</Login>
      <Button to="/get-started">Get started</Button>
    </Nav>
  );
}
