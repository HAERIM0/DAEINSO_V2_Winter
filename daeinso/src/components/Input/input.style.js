import styled from "styled-components";

export const InputBox = styled.div`
  margin-top: 40px;
`;
export const InputTop = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;
`;
export const InputTopInT = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #1a1a1a;

  input {
    width: 510px;
    height: 40px;
    background-color: #efefef;
    border: 0;
    border-radius: 10px;
    margin-right: 20px;
    text-indent: 10px;
  }
`;

export const InputTopInB = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #1a1a1a;
  /* width: 510px;
  height: 42px; */
  /* background-color: #1a1a1a; */

  select {
    width: 510px;
    height: 42px;
    background-color: #efefef;
    border: 0;
    border-radius: 10px;
    text-indent: 10px;
  }
`;

export const ProjectEx = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 18px;
`;
export const ProjectExTop = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #1a1a1a;

  textarea {
    width: 508px;
    height: 90px;
    background-color: #efefef;
    border: 0;
    border-radius: 10px;
    margin-right: 20px;
    resize: none;
  }

  textarea::-webkit-scrollbar {
    display: none;
  }
`;
export const ProjectExBottom = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #1a1a1a;

  textarea {
    width: 508px;
    height: 90px;
    background-color: #efefef;
    border: 0;
    border-radius: 10px;
    resize: none;
  }

  textarea::-webkit-scrollbar {
    display: none;
  }
`;
export const TeamEx = styled.div`
  display: flex;
  justify-content: center;
  /* margin-left: 20.1%; */
  margin-top: 16px;
`;

export const TeamExTop = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #1a1a1a;
  input {
    width: 1039px;
    height: 65px;
    background-color: #efefef;
    border: 0;
    border-radius: 10px;
    /* margin-right: 20px; */
    text-indent: 10px;
  }
`;
export const Info = styled.div`
  display: flex;
  justify-content: center;
  /* margin-left: 20.1%; */
  margin-top: 16px;
`;
export const InfoTop = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #1a1a1a;
  input {
    width: 1039px;
    height: 65px;
    background-color: #efefef;
    border: 0;
    border-radius: 10px;
    /* margin-right: 20px; */
    text-indent: 10px;
  }
`;

export const StackList = styled.div`
  display: flex;
  /* width: 700px; */
  /* background-color: black; */

  button {
    background-color: white;
  }
`;

export const PostingBt = styled.div`
  .postingBt {
    border-radius: 15px;
    outline: 0;
    border: 0;
    background-color: #ff8495;
    color: white;
    margin-top: 28px;
    width: 13%;
    height: 40px;
    margin-left: 1165px;
    transition: 0.2s al;
  }

  .postingBt:active {
    transform: scale(0.98);
  }
`;
