import styled from "styled-components";

export const SignupWrap = styled.div``;
export const SignupBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;
export const SignupText = styled.div`
  display: flex;
  align-items: center;
  .Signupplay-Icon {
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
`;

export const SelectAge = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  button {
    width: 325px;
    height: 23px;
    border: 0;
  }
  .ageopenBt {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .agecloseBt {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
export const SelectStack = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  button {
    width: 325px;
    height: 23px;
    border: 0;
  }
  .stackopenBt {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .stackcloseBt {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const AgeList = styled.div`
  display: flex;
  justify-content: center;
  background-color: #efefef;
  font-size: 14px;
  cursor: pointer;
`;

export const StackList = styled.div`
  display: flex;
  justify-content: center;
  background-color: #efefef;
  font-size: 14px;
  cursor: pointer;
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

    transition: 0.2s al;
  }

  .signup-Bt:active {
    transform: scale(0.98);
  }
`;
