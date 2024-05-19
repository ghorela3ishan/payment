import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: max-height 0.3s ease;
  overflow: hidden;
  margin-bottom: 24px;
  &.closed {
    max-height: 72px;
  }

  &.open {
    max-height: 500px;
  }
`;

export const Header = styled.div`
  padding: 10px 15px;
  background-color: #f5f9ff;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
`;

export const Btn = styled.button<{ $isActive: boolean }>`
  border: none;
  transition: transform 0.3s ease;
  background-color: #f5f9ff;
  transform: ${(props) => (props.$isActive ? `rotate(180deg)` : "")};
  cursor: pointer;
`;

export const AccordionContent = styled.div`
  padding: 15px;
`;

export const Transaction = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
`;

export const Icon = styled.div`
  font-size: 24px;
  margin-right: 10px;
`;

export const Footer = styled.a``;
