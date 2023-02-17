import styled from "styled-components";

export const HeaderBox = styled.div``;

export const HeaderWrap = styled.div`
  display: flex;
  background-color: #fcd5da;
  justify-content: space-between;
`;
export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  color: white;
  margin-left: 50px;
  cursor: pointer;
`;

export const Text = styled.div`
  margin-left: 100px;
`;
export const HeaderRight = styled.div`
  display: flex;
  color: white;
  align-items: center;
  margin-right: 50px;
  cursor: pointer;
  p {
    font-size: 14px;
    margin-right: 10px;
  }
  .header-Icon {
    font-size: 25px;
    margin-left: 10px;
  }
`;
