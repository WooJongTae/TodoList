import { useEffect, useState } from "react";
import { SubmitButton, AppDiv, H1, Form } from "./Styled/StyledComponent";
import "./App.css";
import MainList from "./components/MainList";
import Input from "./components/Input";
import { toast } from "react-toastify";

function App() {
  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(list));
    const localData = JSON.parse(localStorage.getItem("key"));
    setList(localData);
  }, []);

  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([
    {
      id: 1,
      text: "리액트 기초 알아보기",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링 하기",
      checked: true,
    },
    {
      id: 3,
      text: "투두리스트 만들기",
      checked: false,
    },
  ]);

  const submit = (e) => {
    e.preventDefault();
    let number = list.length + 1;
    const listData = {
      id: number,
      text: inputValue,
      checked: false,
    };
    setList((prev) => [...prev, listData]);
    console.log(list);
    toast.success("게시글 작성 완료 👌");
    localStorage.setItem("key", JSON.stringify(list));
    setInputValue("");
  };

  return (
    <AppDiv>
      <H1>TodoList </H1>
      <Form onSubmit={submit}>
        <Input inputChange={setInputValue} value={inputValue} />
        <SubmitButton type="submit">제출</SubmitButton>
      </Form>
      <MainList list={list} setList={setList} />
    </AppDiv>
  );
}

export default App;
