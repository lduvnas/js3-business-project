import React, { useState, useEffect } from "react";
import UserKit from "../data/UserKit";
import { AiOutlineUser } from "react-icons/ai";

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
    <div>
      <h5>User:</h5>
      <p>{user.firstName + " " + user.lastName}</p>
      <p>{user.email}</p>
      <AiOutlineUser />
    </div>
  );
}
