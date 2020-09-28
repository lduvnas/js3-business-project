import React from "react";
import styled from "styled-components";
import ActiveUser from "../components/ActiveUser";

const AdminNavbar = styled.nav`
  width: 100%;
  height: 70px;
  top: 0;
  background-color: #687a89;
  color: white;
  padding: 0 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2em;
`;
const Title = styled.h1`
  font-size: 1.5em;
`;

export default function Navbar() {
  return (
    <AdminNavbar>
      <Title>Business Project</Title>
      <ActiveUser />
    </AdminNavbar>
  );
}
