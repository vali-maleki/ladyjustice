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

const LogoImg = styled.img`
  height: 170px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: #23235b;
  font-weight: 700;
  text-align: center;
  margin-bottom: 6px;
  font-size: 1.4rem;
`;

const Subtitle = styled.p`
  color: #bab6d2;
  text-align: center;
  margin-bottom: 18px;
  font-size: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 320px;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 14px;
  padding: 12px;
  border-radius: 18px;
  border: none;
  background: #ececec;
  font-size: 1rem;
  outline: none;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #bab6d2;
  margin-bottom: 12px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 22px;
  background: #5D5A88;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 10px;
  letter-spacing: 0.8px;
  cursor: pointer;
  transition: background 0.15s;
  &:hover {
    background: #474562;
  }
`;

const FooterText = styled.div`
  color: #bab6d2;
  text-align: center;
  font-size: 0.98rem;
`;

const SignUpLink = styled(Link)`
  color: #5D5A88;
  text-decoration: none;
  font-weight: 500;
  margin-left: 4px;
`;

export default function LoginPage() {
  return (
    <Container>
      <LogoImg src={logoImg} alt="Logo" />
      <Title>Welcome back!</Title>
      <Subtitle>Log in to your existent account of LadyJustice</Subtitle>
      <Form>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Row>
          <CheckboxLabel>
            <input type="checkbox" />
            Remember Me
          </CheckboxLabel>
          <Link to="/forgot-password" style={{ color: "#bab6d2", textDecoration: "none" }}>
            Forget Password ?
          </Link>
        </Row>
        <Button type="submit">LOGIN</Button>
      </Form>
      <FooterText>
        Dont have an account?
        <SignUpLink to="/signup">Sign Up</SignUpLink>
      </FooterText>
    </Container>
  );
}
