import React, { useState } from "react";

const ModifiList = ({ list, setList, listNumber, setInsertToggle }) => {
  const [modifiData, setModifiData] = useState(list[listNumber - 1].text);

  const inputChange = (e) => {
    setModifiData(e.target.value);
  };

  const dataModify = () => {
    setList(
      list.map((item) => {
        return item.id === listNumber ? { ...item, text: modifiData } : item;
      })
    );
    setInsertToggle((prev) => !prev);
  };
  return (
    <div>
      <input value={modifiData} onChange={inputChange} />
      <button onClick={dataModify}>수정하기</button>
    </div>
  );
};

export default ModifiList;
