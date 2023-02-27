import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { instance } from "../../utils/axios";
import { HeartFilled } from "@ant-design/icons";
import { Modal } from "antd";
import { BsShareFill, BsPlayCircle } from "react-icons/bs";
import { GiKneeling } from "react-icons/gi";
import { SurahsContext } from "../../utils/SurahsContext";
import Loader from "../../components/Loader/loader";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;
const Ayah = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  /* align-items: center; */
  justify-content: space-between;
  margin: 10px auto;
  font-size: 20px;
`;
const Left = styled.div`
  font-weight: 600;
  color: #005036;
`;
const Right = styled.div`
  text-align: right;
  font-weight: 600;
`;
const Translate = styled.div`
  width: 100%;
  padding: 15px 0 20px;
  text-align: justify;
  font-size: 16px;
  line-height: 1;
  border-bottom: 2px solid #b4c8d2;
`;
const Bottom = styled.div`
  padding: 20px 0 0;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 20px;
  color: #a5bcc6;
`;
const Like = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: #a5bcc6;
  font-size: 20px;
`;
const Share = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: #a5bcc6;
  font-size: 20px;
`;
const Play = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: #a5bcc6;
  font-size: 20px;
`;
const Sajda = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: #a5bcc6;
  font-size: 20px;
  .active {
    color: #005036;
  }
`;

const Ayahs = ({ surahId, forScrool }) => {
  const [ayahsAr, setAyahsAr] = useState(null);
  const [ayahsUz, setAyahsUz] = useState(null);
  const [ayahsEng, setAyahsEng] = useState(null);
  const [ayahsRu, setAyahsRu] = useState(null);

  const [value, setValue] = useState(null);

  const [ayahs, setAyahs] = useState(null);
  const { lang, setForPlayer, forPlayer } = useContext(SurahsContext);

  const warning = () => {
    Modal.warning({
      title: "Please be aware of this",
      content:
        "If this button is in the active state, then it is a verse of SAJDA",
    });
  };
  const toTop = () => {
    forScrool.current?.firstElementChild?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    instance.get(`/surah/${surahId}`).then((r) => setAyahsAr(r.data.data));
    instance
      .get(`/surah/${surahId}/uz.sodik`)
      .then((r) => setAyahsUz(r.data.data));
    instance
      .get(`/surah/${surahId}/en.asad`)
      .then((r) => setAyahsEng(r.data.data));
    instance
      .get(`/surah/${surahId}/ru.kuliev`)
      .then((r) => setAyahsRu(r.data.data))
      .then(() => toTop());
  }, [surahId]);

  useEffect(() => {
    if (lang == "uz") {
      setAyahs(ayahsUz);
    } else if (lang == "ru") {
      setAyahs(ayahsRu);
    } else setAyahs(ayahsEng);
  }, [lang, ayahsAr, ayahsUz, ayahsRu, ayahsEng]);

  return (
    <Container ref={forScrool}>
      {ayahs && ayahsAr ? (
        ayahs?.ayahs.map((a, i) => (
          <Ayah key={a?.number}>
            <Top>
              <Left>{ayahs?.number + ":" + a?.numberInSurah}</Left>
              <Right>{ayahsAr?.ayahs[i]?.text}</Right>
            </Top>
            <Translate>{a?.text}</Translate>
            <Bottom>
              <Like>
                <HeartFilled />
              </Like>
              <Share>
                <BsShareFill />
              </Share>
              <Play
                onClick={() => {
                  setForPlayer({
                    surahNum: ayahs.number,
                    ayahNumber: a.numberInSurah,
                    totalAyahs: ayahs.numberOfAyahs,
                  });
                  setValue(i);
                }}
                style={{
                  color:
                    forPlayer &&
                    forPlayer.surahNum == ayahs.number &&
                    forPlayer.ayahNumber == a.numberInSurah &&
                    "#005036",
                }}
              >
                <BsPlayCircle />
              </Play>
              <Sajda onClick={warning}>
                <GiKneeling className={a.sajda && "active"} />
              </Sajda>
            </Bottom>
          </Ayah>
        ))
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default Ayahs;
