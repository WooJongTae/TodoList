import React from "react";
import { InputButton, InputDiv } from "../Styled/StyledComponent";
const Input = ({ inputChange, value }) => {
  const onChange = (e) => {
    inputChange(e.target.value);
  };

  return (
    <InputDiv>
      <InputButton
        type="text"
        placeholder="입력하세요!"
        onChange={onChange}
        value={value}
      />
    </InputDiv>
  );
};

export default Input;
