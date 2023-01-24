import styled from "styled-components";

export const MainWrap = styled.div`
  background-color: #f1f1f1;
`;

export const LoginBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const LoginLeftBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #ff8495;
  width: 30%;
  height: 60%;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
`;

export const LoginLeft = styled.div`
  margin-left: 80px;
  color: white;
  margin-top: -30px;
  h2 {
    margin-bottom: 30px;
  }
  p {
    font-size: 14px;
  }
`;

export const LoginRightBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 30%;
  height: 60%;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
`;

export const LoginRight = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    display: flex;
    justify-content: center;
  }

  b {
    font-size: 12px;
    color: #949494;
  }

  input {
    width: 300px;
    height: 45px;
    background-color: #ececec;
    border: 0;
    outline: 0;
    border-radius: 5px;
    text-indent: 10px;
    margin-bottom: 20px;
  }

  button {
    border-radius: 15px;
    outline: 0;
    border: 0;
    background-color: #ff8495;
    color: white;
    margin-top: 20px;
    width: 50%;
    height: 40px;
    margin-left: 80px;
  }
`;
