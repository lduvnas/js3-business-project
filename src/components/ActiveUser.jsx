import React, { useState, useEffect } from "react";
import UserKit from "../data/UserKit";
import { AiOutlineUser } from "react-icons/ai";
import styled from "styled-components";
import FlexContainer from "../styles/FlexContainer";

const UserContainer = styled(FlexContainer)`
  justify-content: space-between;
  min-width: 190px;
`;

export default function ActiveUser() {
  const userKit = new UserKit();
  const [user, setUser] = useState({});

  function getActiveUser() {
    userKit
      .getUser()
      .then(res => res.json())
      .then(data => {
        setUser(data);
      });
  }

  useEffect(() => {
    getActiveUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserContainer>
      <AiOutlineUser size={24} />
      <div>
        <p>{user.firstName + " " + user.lastName}</p>
        <p>{user.email}</p>
      </div>
    </UserContainer>
  );
}
