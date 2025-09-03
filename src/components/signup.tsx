import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logoImg from "../assets/5_No_background.png"; // Adjust path to your logo

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
  margin-bottom: 8px;
`;

const LogoImg = styled.img`
  height: 170px;
  margin-bottom: 2px;
`;

const Title = styled.h1`
  color: #23235b;
  font-weight: 700;
  text-align: center;
  margin-bottom: 5px;
  font-size: 1.3rem;
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
  max-width: 350px;
`;

const Row2 = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  margin-bottom: 10px;
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

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 12px;
  font-size: 0.95rem;
  color: #bab6d2;
  width: 100%;
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
  cursor: pointer;
  transition: background 0.15s;
  letter-spacing: 0.7px;
  &:hover {
    background: #474562;
  }
`;

const FooterText = styled.div`
  color: #bab6d2;
  text-align: center;
  font-size: 0.97rem;
`;

const LoginLink = styled(Link)`
  color: #5D5A88;
  text-decoration: none;
  font-weight: 500;
  margin-left: 4px;
`;

export default function Signup() {
  return (
    <Container>
      <LogoBlock>
        <LogoImg src={logoImg} alt="Logo" />
      </LogoBlock>
      <Title>Let's Get Started !</Title>
      <Subtitle>
        Create an account to LadyJustice AI to get all features
      </Subtitle>
      <Form>
        <Row2>
          <Input type="text" placeholder="Name" style={{ marginBottom: 0 }} />
          <Input type="text" placeholder="Surname" style={{ marginBottom: 0 }} />
        </Row2>
        <Input type="email" placeholder="Email Address" />
        <Input type="text" placeholder="Phone Number" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
        <CheckboxLabel>
          <input type="checkbox" />
          I accept the Terms of use & Privacy Policy
        </CheckboxLabel>
        <Button type="submit">SIGN UP</Button>
      </Form>
      <FooterText>
        Already have an account?
        <LoginLink to="/login">Login here</LoginLink>
      </FooterText>
    </Container>
  );
}
