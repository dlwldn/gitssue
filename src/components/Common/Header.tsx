import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { NavLink, Link } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';

function Header() {
  return (
    <HeaderWrapper>
      <Link to="/">
        <BsGithub />
        <span>Gitssue</span>
      </Link>
      <div>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? colors.blue1 : colors.white,
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/repos"
          style={({ isActive }) => ({
            color: isActive ? colors.blue1 : colors.white,
          })}
        >
          Repository
        </NavLink>
        <NavLink
          to="/issues"
          style={({ isActive }) => ({
            color: isActive ? colors.blue1 : colors.white,
          })}
        >
          Issue
        </NavLink>
      </div>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  height: 70px;
  padding: 0 30px;
  background-color: ${colors.gray2};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 14px;
  > a {
    display: flex;
    align-items: center;
    font-size: 20px;
    > span {
      margin: 0 5px;
    }
  }
  > div {
    > a {
      margin-left: 15px;
    }
  }
`;
