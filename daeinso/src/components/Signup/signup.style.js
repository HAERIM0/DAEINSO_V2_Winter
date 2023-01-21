import styled from "styled-components";

export const SignupWrap = styled.div``;
export const SignupBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  /* justify-content: center; */
`;
export const SignupText = styled.div`
  display: flex;
  align-items: center;
  .Signup-Icon {
    font-size: 35px;
    color: #ff8495;
  }
`;
export const InputBox = styled.div``;
export const InputList = styled.div`
  display: flex;
  flex-direction: column;

  input {
    width: 320px;
    /* width: 100%; */
    height: 45px;
    margin-bottom: 20px;
    background-color: #efefef;
    border: 0;
    border-radius: 10px;
    text-indent: 10px;
  }
`;
export const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* width: 20%; */
  select {
    width: 327px;
    height: 45px;
    margin-bottom: 30px;
    background-color: #efefef;
    border-radius: 10px;
    text-indent: 10px;
    /* font-size: 13px; */
  }
`;

export const InputBt = styled.div`
  button {
    background-color: #ff8495;
    outline: 0;
    border: 0;
    width: 325px;
    height: 45px;
    color: white;
    border-radius: 15px;
  }
`;
