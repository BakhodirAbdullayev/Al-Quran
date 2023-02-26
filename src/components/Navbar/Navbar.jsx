import React from "react";
import { FaBookOpen, FaHeart } from "react-icons/fa";
import { BsClockFill } from "react-icons/bs";
import { RiHome5Fill } from "react-icons/ri";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { mobile, first } from "../../styles/responsive";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  background-color: #fff;
  ${mobile({
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 0,
    borderRadius: "20px 20px 0 0",
    borderTop: "1px solid #005036",
  })}
`;

const NavbarLinks = styled(Container)`
  gap: 20px;
`;
const NavbarLink = styled(NavLink)`
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  font-size: 20px;
  border-radius: 10px;
  color: #b4c8d2;
  transition: 0.4s;
  &:hover {
    color: #005036;
  }
  &.active {
    background-color: #b4c8d2;
    color: #111;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <NavbarLinks>
        <NavbarLink to="/">
          <RiHome5Fill />
        </NavbarLink>
        <NavbarLink to="/surahs">
          <FaBookOpen />
        </NavbarLink>
        <NavbarLink to="/times">
          <BsClockFill />
        </NavbarLink>
      </NavbarLinks>
    </Container>
  );
};

export default Navbar;
