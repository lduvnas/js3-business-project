import React, { useState, useEffect } from "react";
import UserKit from "../data/UserKit";
/* import { AiOutlineUser } from "react-icons/ai"; */
import { FaRegUserCircle } from "react-icons/fa";
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
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
    <FlexContainer>
      <FaRegUserCircle size={24} />
      {/*  <AiOutlineUser size={24} /> */}
      <div>
        <p>{user.firstName + " " + user.lastName}</p>
        <p>{user.email}</p>
      </div>
    </FlexContainer>
  );
}
