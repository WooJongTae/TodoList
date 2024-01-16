import React, { useState } from "react";

import {
  Buttons,
  ModalOverlay,
  ModalInput,
  CloseButton,
  CloseIcon,
} from "../Styled/StyledComponent";

const ModifiList = ({ list, setList, listNumber, setInsertToggle }) => {
  const [modifiData, setModifiData] = useState(list[listNumber - 1].text);

  const inputChange = (e) => {
    setModifiData(e.target.value);
  };

  const dataModify = () => {
    const data = list.map((item) => {
      return item.id === listNumber ? { ...item, text: modifiData } : item;
    });
    setList(data);
    setInsertToggle((prev) => !prev);
    localStorage.setItem("key", JSON.stringify(data));
  };
  const closeModal = () => {
    setInsertToggle((prev) => !prev);
  };
  return (
    <ModalOverlay>
      <CloseIcon onClick={closeModal} />
      <ModalInput value={modifiData} onChange={inputChange} />
      <Buttons onClick={dataModify}>수정하기</Buttons>
    </ModalOverlay>
  );
};

export default ModifiList;
