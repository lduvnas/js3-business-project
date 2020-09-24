import React from "react";
import styled from "styled-components";

const SideNavbar = styled.div`
  width: 250px;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: #555;
  color: white;
  padding: 0 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default function SideBar() {
  return (
    <SideNavbar>
      <p>Hej</p>
    </SideNavbar>
  );
}
