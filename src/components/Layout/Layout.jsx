import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import ReactAudioPlayer from "react-audio-player";
import { SurahsContext } from "../../utils/SurahsContext";

const Container = styled.div`
  max-width: 1340px;
  /* height: 100vh; */
  margin: 0 auto;
  padding: 0 20px;
  /* overflow: hidden; */
  /* position: relative; */
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Left = styled.div`
  width: 80px;
  position: sticky;
  top: 0;
  left: 0;
  height: ${(p) => (p.bool ? "calc(100vh - 50px)" : "100vh")};
`;
const Right = styled.div`
  width: 100%;
  background-color: #f4f6f8;
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
`;
const Player = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 50px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  background-color: #5da59b;
  .audio {
    width: 100%;
    height: 100%;
    &::-webkit-media-controls-panel {
      background-color: #5da59b;
      border-color: #5da59b;
      border-radius: 0;
      height: 100%;
    }
    &::-webkit-media-controls-play-button {
      background-color: #fff;
      border-radius: 50%;
      color: #fff important !important;
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
      color: red;
    }
  }
`;

const Layout = ({ children }) => {
  const { forPlayer, audioSurah, setForPlayer } = useContext(SurahsContext);
  const [playAudio, setPlayAudio] = useState(null);

  useEffect(() => {
    audioSurah &&
      forPlayer &&
      setPlayAudio(...audioSurah.filter((a) => a.number == forPlayer.surahNum));
  }, [forPlayer, audioSurah]);

  return (
    <>
      <Container>
        <Wrapper>
          <Left bool={forPlayer}>
            <Navbar />
          </Left>
          <Right>
            <Head>
              <Search />
            </Head>
            <Body>{children}</Body>
          </Right>
        </Wrapper>
        {playAudio && (
          <Player>
            <ReactAudioPlayer
              className="audio"
              src={playAudio.ayahs[forPlayer.ayahNumber - 1].audio}
              autoPlay
              controls={true}
              onEnded={() => {
                setForPlayer((e) => {
                  if (forPlayer.ayahNumber < forPlayer.totalAyahs) {
                    return { ...e, ayahNumber: e.ayahNumber + 1 };
                  } else return e;
                });
              }}
            />
          </Player>
        )}
      </Container>
    </>
  );
};

export default Layout;
