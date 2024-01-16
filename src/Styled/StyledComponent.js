import styled, { css } from "styled-components";
import { IoMdCloseCircle } from "react-icons/io";

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
  max-width: 500px;
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
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  flex-direction: column;
`;

export const ModalInput = styled.input`
  padding: 10px 20px;
  width: 30%;
  margin-bottom: 20px;
`;

export const CloseButton = styled.button`
  position: fixed;
  padding: 20px;
  top: 5rem;
  right: 5rem;
  font-size: 1rem;
  font-weight: bold;
`;
export const CloseIcon = styled(IoMdCloseCircle)`
  position: fixed;
  top: 5rem;
  right: 5rem;
  font-size: 2rem;
  margin-right: 5px; /* 아이콘과 버튼 사이의 간격 조절 (원하는 간격으로 조절) */
`;
