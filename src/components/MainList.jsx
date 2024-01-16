import React, { useEffect, useState } from "react";
import ModifiList from "./ModifiList";
import { Table, Tr, Th, MainDiv, Buttons } from "../Styled/StyledComponent";

const MainList = ({ list, setList }) => {
  const [insertToggle, setInsertToggle] = useState(false);
  const [listData, setListData] = useState("");
  const handleRomove = (removeItem) => {
    const data = list.filter((item) => {
      return item.id !== removeItem;
    });
    setList(data);
    localStorage.setItem("key", JSON.stringify(data));
  };

  const toggleChange = (toggleItem) => {
    const toggleData = list.map((item) => {
      return item.id === toggleItem
        ? { ...item, checked: !item.checked }
        : item;
    });
    // setList((prev) => {
    //   return prev.map((item) => {
    //     return item.id === toggleItem
    //       ? { ...item, checked: !item.checked }
    //       : item;
    //   });
    // });
    setList(toggleData);
    localStorage.setItem("key", JSON.stringify(toggleData));
  };

  const ModifiToggle = (number) => {
    setInsertToggle((prev) => !prev);
    setListData(number);
  };

  return (
    <MainDiv>
      {insertToggle && (
        <ModifiList
          list={list}
          setList={setList}
          listNumber={listData}
          setInsertToggle={setInsertToggle}
        />
      )}
      <Table>
        <thead>
          <Tr>
            <Th>번호</Th>
            <Th>내용</Th>
            <Th>체크 여부</Th>
          </Tr>
        </thead>
        <tbody>
          {list.map((item) => {
            return (
              <Tr key={item.id}>
                <Th>{item.id}</Th>
                <Th data-line={item.checked}>{item.text}</Th>
                <Th onClick={() => toggleChange(item.id)}>
                  {item.checked ? "체크" : "미체크"}
                </Th>
                <Th>
                  <Buttons remove="true" onClick={() => handleRomove(item.id)}>
                    제거
                  </Buttons>
                </Th>
                <Th>
                  <Buttons onClick={() => ModifiToggle(item.id)}>수정</Buttons>
                </Th>
              </Tr>
            );
          })}
        </tbody>
      </Table>
    </MainDiv>
  );
};

export default MainList;
