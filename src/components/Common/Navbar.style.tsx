import styled from "styled-components";

export const NavBar = styled.div`
  background: rgb(14, 15, 15);
  background: radial-gradient(
    circle,
    rgba(14, 15, 15, 1) 0%,
    rgba(14,15,15,1)  100%
  );
  height: 90px;
  top: 0;
  position: fixed;
  width: 100%;z-index:1;font-family: 'Ubuntu', sans-serif;
`;
export const NavbarUl = styled.ul`
  justify-content: flex-start;
  align-items: center;
  display: flex;
  width: auto;
  list-style-type: none;
  cursor: pointer;
  font-family: 'Ubuntu', sans-serif;
`;
export const NavbarLi = styled.li`
  text-decoration: none;
  flex-flow: row wrap;
  padding-left: 50px;
  font-family: 'Ubuntu', sans-serif;
`;
export const NavbarLiMiddle = styled.li`
  text-decoration: none;
  flex-flow: row wrap;
  padding-left: 50px;
  font-weight: bold;
  &:hover {
    color: white;
    font-weight: bolder;
  }
  &:active {
    color: #fff;
  }
`;
