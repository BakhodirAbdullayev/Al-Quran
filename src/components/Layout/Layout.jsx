import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import ReactAudioPlayer from "react-audio-player";
import { SurahsContext } from "../../utils/SurahsContext";
import { mobile, first } from "../../styles/responsive";
import { AiFillFastBackward, AiFillFastForward } from "react-icons/ai";
import { HiXMark } from "react-icons/hi2";
import Loader from "../Loader/loader";

const Container = styled.div`
  max-width: 1340px;
  margin: 0 auto;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Left = styled.div`
  min-width: 75px;
  position: sticky;
  top: 75px;
  left: 0;
  height: ${(p) => (p.bool ? "calc(100vh - 125px)" : "calc(100vh - 75px)")};
  ${mobile({
    width: "100%",
    height: 60,
    position: "fixed",
    top: "calc(100vh - 60px)",
    bottom: "5px",
    left: 0,
    right: 0,
    zIndex: 999,
  })}
`;
const Right = styled.div`
  width: 100%;
  background-color: #f4f6f8;
  ${mobile({
    paddingBottom: 45,
  })}
`;
const Head = styled.div`
  width: 100%;
  background-color: #fff;
  height: 75px;
  position: sticky;
  top: 0;
  left: 75px;
  z-index: 100;
`;
const Body = styled.div`
  width: calc(100% - 50px);
  min-height: 300px;
  height: max-content;
  margin: 25px auto 0;
  padding-bottom: 10px;
  /* background-color: #fff; */
  border-radius: 5px;
  ${first({
    marginTop: 15,
  })}
  ${mobile({
    margin: "0 auto",
    marginTop: (p) => (p.playAudio ? "60px" : "15px"),
    width: "98%",
  })}
`;
const Player = styled.div`
  width: 100%;
  max-width: 1340px;
  height: 50px;
  overflow: hidden;
  position: sticky;
  bottom: 0;
  right: 0;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  background-color: #5da59b;
  .audio {
    width: calc(100% + 100px);
    margin-left: -50px;
    height: 100%;
    outline: none;
    &::-webkit-media-controls-panel {
      background-color: #005036;
      border-radius: 0;
      outline: none;
      height: 100%;
      padding: 0 50px;
      padding-right: 90px;
      ${mobile({
        paddingLeft: "30px",
        backgroundColor: "rgba(0, 80, 55, 0.9)",
      })}
    }
    &::-webkit-media-controls-play-button {
      background-color: #fff;
      border-radius: 50%;
      margin-right: 40px;
      margin-left: 54px;
      ${mobile({
        marginRight: 25,
      })}
    }
    &::-webkit-media-controls-current-time-display {
      color: #fff;
    }
    &::-webkit-media-controls-time-remaining-display {
      color: #fff;
    }
    &::-webkit-media-controls-timeline {
      background-color: #fff;
      border-radius: 2px;
      padding: 3px 2px;
      margin-left: 10px;
      margin-right: 10px;
      width: calc(100% - 800px);
    }
    &::-webkit-media-controls-volume-slider {
      padding: 3px 2px;
      margin-top: 11px;
      border-radius: 3px;
      background-color: #f2f4f6;
    }
  }
  ${mobile({
    top: 75,
  })}
`;
const Prew = styled.button`
  position: absolute;
  left: 20px;
  top: 25px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 100;
  display: grid;
  place-items: center;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 22px;
  color: #000;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  ${mobile({
    left: 5,
  })}
`;
const Next = styled(Prew)`
  left: 90px;
  ${mobile({
    left: 65,
  })}
`;
const Delete = styled(Prew)`
  left: calc(100% - 40px);
`;

const Layout = ({ children }) => {
  const { forPlayer, surah, setForPlayer, playAudio, setPlayAudio } =
    useContext(SurahsContext);

  const searchSurah = (i, arr) => {
    const finded = arr.find((e) => e.number == i + 1);
    return finded.numberOfAyahs;
  };

  const nextAudio = () => {
    setForPlayer((e) => {
      if (forPlayer.ayahNumber < forPlayer.totalAyahs) {
        return { ...e, ayahNumber: e.ayahNumber + 1 };
      } else if (forPlayer.ayahNumber == forPlayer.totalAyahs) {
        if (e.surahNum < 114) {
          return {
            surahNum: e.surahNum + 1,
            ayahNumber: 1,
            totalAyahs: searchSurah(e?.surahNum, surah),
          };
        } else return e;
      } else return e;
    });
  };
  const lastAudio = () => {
    setForPlayer((e) => {
      if (forPlayer.ayahNumber > 1) {
        return { ...e, ayahNumber: e.ayahNumber - 1 };
      } else if (forPlayer.ayahNumber == 1) {
        if (e.surahNum > 1) {
          return {
            surahNum: e.surahNum - 1,
            ayahNumber: 1,
            totalAyahs: searchSurah(e?.surahNum - 2, surah),
          };
        } else return e;
      } else return e;
    });
  };

  return (
    <>
      <Container>
        <Head>
          <Search />
        </Head>
        <Wrapper>
          <Left bool={forPlayer}>
            <Navbar />
          </Left>
          <Right>
            <Body playAudio={playAudio}>{children}</Body>
          </Right>
        </Wrapper>
        {playAudio && (
          <Player>
            <Prew onClick={() => lastAudio()}>
              <AiFillFastBackward />
            </Prew>
            <Next onClick={() => nextAudio()}>
              <AiFillFastForward />
            </Next>
            <ReactAudioPlayer
              className="audio"
              src={playAudio.ayahs[forPlayer.ayahNumber - 1].audio}
              autoPlay
              controls={true}
              onEnded={() => nextAudio()}
            />
            <Delete
              onClick={() => {
                setPlayAudio(null);
                setForPlayer(null);
              }}
            >
              <HiXMark />
            </Delete>
          </Player>
        )}
        {/* <Loader /> */}
      </Container>
    </>
  );
};

export default Layout;
