import styled from "styled-components";

export const NavBar = styled.nav`
  min-width: 340px;
  background-color: #0c365a;
  height: 100vh;
  padding-left: 48px;
  padding-top: 48px;
`;

export const NavItems = styled.div`
  display: grid;
  gap: 61px;
  margin-top: 81px;
`;

export const SubTitle = styled.p`
  margin-top: 19px;
  color: rgb(255, 255, 255, 0.3);
  font-size: 15px;
  margin-right: 55px;
`;

export const NavItem = styled.div`
  display: flex;
  color: #ffffff;
  font-size: 16px;
  gap: 16px;
  align-items: end;
  text-decoration: none;
`;
