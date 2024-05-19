import styled from "styled-components";

export const Actions = styled.div`
  display: flex;
  background-color: #edf3ff;
  border-radius: 16px;
  padding: 20px 27px;
  justify-content: space-around;
`;

export const ActionItem = styled.button`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  gap: 7px;
  font-size: 13px;
  max-width: 60px;
  cursor: pointer;
  border: none;
  background-color: #edf3ff;
`;
