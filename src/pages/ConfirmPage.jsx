import React from "react";
import ConfirmCard from "../components/ConfirmCard";
import styled from "styled-components";
import FlexContainer from "../styles/FlexContainer";

const ConfirmContainer = styled(FlexContainer)`
  padding-top: 4em;
`;

export default function ConfirmPage() {
  return (
    <ConfirmContainer>
      <ConfirmCard />
    </ConfirmContainer>
  );
}
