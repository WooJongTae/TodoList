import styled, { css } from "styled-components";

export const AppDiv = styled.div`
padding:0
  text-align: center;
  background: white;
  width: 100%;
  height: 100vh;
`;

export const InputDiv = styled.div`
  width: 60%;
  margin: 0 auto;
  text-align: center;
`;

export const MainDiv = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
`;
export const Form = styled.form`
  text-align: center;
`;

export const InputButton = styled.input`
  text-align: center;
  padding: 5px 10px;
  margin-bottom: 10px;
`;

export const SubmitButton = styled.button`
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 1rem;
  border: 1px solid lightgray;
  color: white;
  background: black;
  text-align: center;
`;

export const H1 = styled.h1`
  margin: 0 0 30px 0;
  padding: 30px;
  text-align: center;
`;

export const Table = styled.table`
  border: 1px solid gray;
  border-collapse: collapse;
  margin: 0 auto;
`;

export const Tr = styled.tr`
  border: 1px solid gray;
  padding: 5px 10px;
`;

export const Th = styled.th`
  border: 1px solid gray;
  padding: 10px;
  ${(props) =>
    props["data-line"] &&
    css`
      color: gray;
    `}
`;

export const Buttons = styled.button`
  padding: 5px 10px;
  &:hover {
    background: gray;
  }
  ${(props) =>
    props.remove &&
    css`
      background: gray;
      &:hover {
        background: darkred;
      }
    `}
`;
