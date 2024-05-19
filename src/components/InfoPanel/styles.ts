import styled, { css } from "styled-components";

export const Main = styled.main`
  margin-right: 60px;
  padding-top: 59px;
`;

export const BalanceText = styled.p`
  font-size: 14px;
  line-height: 0;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 34px;
`;

export const Currency = styled.div`
  height: 24px;
  width: 40px;
  border-radius: 4px;
  background-color: #01d167;
  text-align: center;
  align-content: end;
  color: #ffffff;
`;

export const CurrNumber = styled.p`
  font-size: 26px;
`;

export const Btn = styled.button`
  padding: 8px;
  background-color: #325baf;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  height: 35px;
  display: flex;
  gap: 8px;
  font-size: 13px;
  align-items: center;
`;

export const CurrWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  height: 36px;
`;
