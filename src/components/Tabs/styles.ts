import styled from "styled-components";

export const Container = styled.div``;

export const TabItems = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 16px;
`;

export const TabItem = styled.div<{ $isActive: boolean }>`
  font-size: 14px;
  padding-bottom: 4.5px;
  cursor: pointer;
  color: ${(props) =>
    props.$isActive ? "rgb(34, 34, 34)" : "rgb(34, 34, 34, 0.3)"};
  border-bottom: ${(props) => (props.$isActive ? "solid 2px #23CEFD" : "none")};
`;

export const Content = styled.div`
  border: 1px solid #fcfcfc;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  box-shadow: 2px 2px 2px 2px #00000014;
`;
