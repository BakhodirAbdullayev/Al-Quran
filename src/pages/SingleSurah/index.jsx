import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import SurahsList from "./SurahsList";
import SurahsSettings from "./SurahsSettings";
import Ayahs from "./Ayahs";
import { SurahsContext } from "../../utils/SurahsContext";
import { IoSettingsSharp } from "react-icons/io5";
import { FaRegListAlt } from "react-icons/fa";
import { mobile, first } from "../../styles/responsive";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 25px;
  position: relative;
  ${first({
    gap: 0,
  })}
`;
const Left = styled.div`
  max-width: 230px;
  max-height: ${(p) =>
    p.bool ? "calc(100vh - 160px)" : "calc(100vh - 110px)"};
  overflow-y: scroll;
  padding-right: 2px;
  ${first({
    marginRight: 15,
    maxHeight: (p) => (p.bool ? "calc(100vh - 190px)" : "calc(100vh - 140px)"),
  })}
  @media screen and (max-width: 780px) {
    max-width: 180px;
  }
  @media screen and (max-width: 700px) {
    position: fixed;
    max-width: 230px;
    padding: 5px 5px;
    transition: 0.4s;
    background-color: #a5bcc6;
    top: ${(p) => (p.lstBool ? "130px" : "-100%")};
    opacity: ${(p) => (p.lstBool ? "1" : "-0")};
  }
  &::-webkit-scrollbar {
    width: 4px; /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: #b4c8d2; /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #005036; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
  }
`;

const Center = styled.div`
  width: calc(100% - 500px);
  max-height: ${(p) =>
    p.bool ? "calc(100vh - 160px)" : "calc(100vh - 110px)"};
  overflow-y: scroll;
  ${first({
    maxHeight: (p) => (p.bool ? "calc(100vh - 190px)" : "calc(100vh - 140px)"),
    width: "calc(100% - 230px)",
  })}
  @media screen and (max-width: 780px) {
    width: 100%;
  }
  &::-webkit-scrollbar {
    width: 6px; /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: #b4c8d2; /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #005036; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
  }
`;
const Right = styled.div`
  max-width: 230px;
  position: sticky;
  right: 0;
  transition: 0.4s;
  ${first({
    width: 0,
  })}
`;
const SubNav = styled.div`
  width: 100%;
  padding: 5px 10px;
  border-radius: 5px;
  height: 30px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  display: none;
  background-color: #fff;
  ${first({
    display: "flex",
  })}
  ${mobile({
    marginTop: 15,
  })}
`;
const ListsBtn = styled.button`
  width: 30px;
  height: 30px;
  font-size: 20px;
  display: grid;
  place-items: center;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${(p) => p.stBool && "#005036"};
  filter: ${(p) => (p.stBool ? "drop-shadow(0 0 1px #005036)" : "none")};
`;
const SettingsBtn = styled.button`
  width: 30px;
  height: 30px;
  font-size: 20px;
  color: ${(p) => p.stBool && "#005036"};
  display: grid;
  place-items: center;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.8s ease;
  transform: rotate(${(p) => (p.stBool ? "-120deg" : 0)});
  filter: ${(p) => (p.stBool ? "drop-shadow(0 0 1px #005036)" : "none")};
`;

const Surah = () => {
  const { id } = useParams();
  const { forPlayer } = useContext(SurahsContext);
  const [stBool, setStBool] = useState(false);
  const [lstBool, setLstBool] = useState(false);

  return (
    <>
      <SubNav>
        <ListsBtn
          lstBool={lstBool}
          onClick={() => setLstBool((e) => !e)}
          disabled={stBool}
        >
          <FaRegListAlt />
        </ListsBtn>
        <SettingsBtn
          stBool={stBool}
          onClick={() => setStBool((e) => !e)}
          disabled={lstBool}
        >
          <IoSettingsSharp />
        </SettingsBtn>
      </SubNav>
      <Container>
        <Left bool={forPlayer} lstBool={lstBool}>
          <SurahsList />
        </Left>
        <Center bool={forPlayer}>
          <Ayahs surahId={id} />
        </Center>
        <Right>
          <SurahsSettings stBool={stBool} />
        </Right>
      </Container>
    </>
  );
};

export default Surah;
