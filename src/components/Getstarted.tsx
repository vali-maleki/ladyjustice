import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logoImg from "../assets/5_No_background.png"; 
const Container = styled.div`
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;
`;

const LogoImg = styled.img`
  height: 160px;
  margin-bottom: 4px;
`;


const Heading = styled.h1`
  color: #5D5A88;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 6px;
`;

const Subtitle = styled.p`
  color: #bab6d2;
  font-size: 1rem;
  margin-bottom: 24px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
`;

const ActionButton = styled(Link)`
  background: #5D5A88;
  color: #fff;
  border: none;
  border-radius: 22px;
  font-size: 1rem;
  font-weight: 500;
  padding: 9px 28px;
  text-decoration: none;
  text-align: center;
  transition: background 0.18s;
  &:hover {
    background: #7e7292;
  }
`;

export default function LadyJusticeLogin() {
  return (
    <Container>
      <LogoBlock>
        <LogoImg src={logoImg} alt="Logo" />
      
      </LogoBlock>
      <Heading>Welcome to SnowLEXS</Heading>
      <Subtitle>Log in to your account to continue</Subtitle>
      <ButtonGroup>
        <ActionButton to="/login">Log in</ActionButton>
        <ActionButton to="/signup">Sign up</ActionButton>
      </ButtonGroup>
    </Container>
  );
}
