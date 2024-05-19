import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 18px 0;
  margin-bottom: ;
`;

export const ItemMeta = styled.div`
  display: flex;
`;

export const Amount = styled.div`
  font-size: 12px;
  display: flex;
  gap: 10px;
  margin-top: 7px;
  font-weight: 400;
`;

export const Icon = styled.div<{ $color: string }>`
  width: 48px;
  height: 48px;
  border-radius: 48px;
  background-color: ${(props) => props.$color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  font-size: 14px;
`;

export const DateInfo = styled.p`
  font-size: 13px;
  color: #aaaaaa;
  margin: 4px 0 12px 0;
`;
export const Desc = styled.span`
  color: #325baf;
  font-size: 12px;
`;

export const Info = styled.div`
  margin-left: 12px;
  margin-top: -8px;
`;

export const WalletWrapper = styled.div`
  width: 24px;
  height: 20px;
  border-radius: 9px;
  background-color: #325baf;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const DescWrapper = styled.div`
  display: flex;
  display: flex;
  align-items: baseline;
  gap: 5px;
`;
