import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f9f9fb;
`;

const Sidebar = styled.div`
  width: 240px;
  background: #e8e8ec;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const Logo = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background: #5d5a88;
  color: white;
  border: none;
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background: #474562;
  }
`;

const SidebarItem = styled.div`
  padding: 10px;
  background: #d1d1d8;
  margin-bottom: 10px;
  border-radius: 8px;
  cursor: pointer;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const SidebarFooter = styled.div`
  font-size: 0.9rem;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ChatArea = styled.div`
  flex-grow: 1;
  background: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Message = styled.div`
  background: #f3f3f3;
  padding: 12px;
  border-radius: 12px;
  margin-bottom: 10px;
  max-width: 60%;
`;

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Container>
      <Sidebar>
        <Logo>⚪ Logo</Logo>
        <Button>+ New Chat</Button>
        <SidebarItem>Previous question</SidebarItem>
        <SidebarItem>Previous question</SidebarItem>
        <SidebarItem>Previous question</SidebarItem>
        <Spacer />
        <SidebarFooter>
          <SidebarItem>Clear conversation</SidebarItem>
          <SidebarItem>Dark mode</SidebarItem>
          <SidebarItem>Updates & FAQ</SidebarItem>
          <SidebarItem onClick={handleLogout}>Log out</SidebarItem>
        </SidebarFooter>
      </Sidebar>
      <ChatArea>
        <Message>Hello! This is a sample chat message.</Message>
        <Message style={{ alignSelf: "flex-end", background: "#dcd6f7" }}>
          Hi, I am the user’s reply.
        </Message>
      </ChatArea>
    </Container>
  );
}
