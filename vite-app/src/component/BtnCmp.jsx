import React from "react";
import styled from "styled-components";

const BtnCmp = () => {
  const Button = styled.button`
    background: black;
    color: white;
    fontsize: 32px;
    font-weight: bold;
    border-radius: 20px;
    padding: 13px;
    cursor: pointer;
    &:hover: {
      background: yellow;
    }
  `;
  return <Button>Btn Cmp</Button>;
};

export default BtnCmp;
