import React, { useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import SurahsList from "./SurahsList";
import SurahsSettings from "./SurahsSettings";
import Ayahs from "./Ayahs";
import { SurahsContext } from "../../utils/SurahsContext";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 25px;
  position: relative;
`;
const Left = styled.div`
  max-width: 230px;
  max-height: ${(p) =>
    p.bool ? "calc(100vh - 160px)" : "calc(100vh - 110px)"};
  overflow-y: scroll;
  padding-right: 2px;

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
  /* height: calc(100vh -100px);
  overflow: hidden;
  overflow-y: scroll; */
  /* height: 100%; */
  /* position: sticky;
  left: 0;
  top: 0; */
`;

const Center = styled.div`
  width: calc(100% - 500px);
  max-height: ${(p) =>
    p.bool ? "calc(100vh - 160px)" : "calc(100vh - 110px)"};
  overflow-y: scroll;

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
  width: 230px;
  position: sticky;
  right: 0;
`;

const Surah = () => {
  const { id } = useParams();
  const { forPlayer } = useContext(SurahsContext);

  return (
    <Container>
      <Left bool={forPlayer}>
        <SurahsList />
      </Left>
      <Center bool={forPlayer}>
        <Ayahs surahId={id} />
      </Center>
      <Right>
        <SurahsSettings />
      </Right>
    </Container>
  );
};

export default Surah;
