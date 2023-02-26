import moment from "moment";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaCloudMoon } from "react-icons/fa";
import { IoPartlySunny } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";
import { BsFillSunsetFill, BsFillSunriseFill, BsSunFill } from "react-icons/bs";
import axios from "axios";
import { Select, ConfigProvider } from "antd";
import { first, mobile } from "../../styles/responsive";
import Loader from "../../components/Loader/loader";

const Container = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #fff;
`;
const Head = styled.div`
  width: 100%;
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  text-shadow: 2px 2px 5px rgba(0, 80, 55, 0.85);
  color: #005036;
  ${first({
    fontSize: "28px",
    lineHeight: 1,
  })}
`;
const Settings = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 5px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 5px;
  }
`;
const Now = styled.div`
  font-size: 32px;
  font-weight: 600;
  font-family: "Courier New", Courier, monospace;
  ${first({
    fontSize: 25,
  })}
`;
const Region = styled.div``;
const TimesWrapper = styled.div`
  width: 90%;
  margin: 30px auto;
  display: grid;
  justify-content: space-evenly;
  gap: 30px;
  align-items: center;
  grid-template-columns: repeat(2, minmax(250px, 600px));
  ${first({
    width: "98%",
  })}
  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
`;
const Time = styled.div`
  max-width: 600px;
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1px solid #5da59b;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 0 5px #005036, 0 0 8px #005036;
  }
  &.active {
    background-color: #b4c8d2;
    box-shadow: 2px 3px 2px #005036;
  }
  ${first({
    padding: "8px 10px",
  })}
`;
const Left = styled.span`
  width: 20%;
  height: 100%;
  font-size: 50px;
  display: grid;
  place-items: center;
  border-right: 1px solid #5da59b;
  color: #005036;
  ${first({
    fontSize: 35,
  })}
`;
const Right = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${first({
    alignItems: "flex-end",
  })}
`;
const Name = styled.div`
  font-size: 30px;
  font-weight: 600;
  ${first({
    fontSize: 25,
  })}
`;
const TimePray = styled.div`
  font-family: "Courier New", Courier, monospace;
  font-size: 26px;
  font-weight: 600;
  ${first({
    fontSize: 22,
  })}
`;

const regions = [
  "Оltiariq",
  "Bishkek",
  "O'smat",
  "To'rtko'l",
  "Uzunquduq",
  "Jizzax",
  "Оltinko'l",
  "Chimkent",
  "Rishtоn",
  "Xo'jaоbоd",
  "Do'stlik",
  "Buxoro",
  "Termiz",
  "Dushanbye",
  "Turkmanоbоd",
  "Qоrоvulbоzоr",
  "Оlmaоta",
  "Xоnqa",
  "Tallimarjоn",
  "Uchqo'rg'оn",
  "Uchtepa",
  "Xоnоbоd",
  "Toshkent",
  "G'uzоr",
  "Bekоbоd",
  "Navoiy",
  "Qo'rg'оntepa",
  "Mubоrak",
  "Ashxabоd",
  "Оlоt",
  "Jalоlоbоd",
  "Nurоta",
  "Andijon",
  "Turkistоn",
  "Shumanay",
  "Namangan",
  "Chimbоy",
  "Jоmbоy",
  "Sherоbоd",
  "Mo'ynоq",
  "Bulоqbоshi",
  "Uchquduq",
  "Samarqand",
  "Qiziltepa",
  "Zоmin",
  "Xo'jand",
  "Tоmdi",
  "Yangibоzоr",
  "Jambul",
  "Nukus",
  "Chоrtоq",
  "Taxtako'pir",
  "Tоshhоvuz",
  "Xiva",
  "Kоsоnsоy",
  "Kоnimex",
  "Mingbulоq",
  "Paxtaоbоd",
  "Denоv",
  "O'g'iz",
  "Qo'ng'irоt",
  "Chust",
  "Kattaqo'rg'оn",
  "Farg'оna",
  "Qоrako'l",
  "Arnasоy",
  "Osh",
  "Sayram",
  "Angren",
  "Pоp",
  "G'allaоrоl",
  "Urgut",
  "Shahrixоn",
  "Guliston",
  "Qumqo'rg'оn",
  "Bоysun",
  "Urganch",
  "Qo'qon",
  "Gazli",
  "Xazоrasp",
  "Marg'ilon",
  "Shоvоt",
  "Kоnibоdоm",
  "Quva",
  "Burchmulla",
  "Dehqоnоbоd",
  "Zarafshоn",
  "Qarshi",
  "Kоsоn",
].map((a) => {
  return {
    value: a,
    label: a,
  };
});

const PrayerTimes = () => {
  const [timePray, setTimePray] = useState(null);
  const [region, setRegion] = useState("Toshkent");

  let time = new Date().toLocaleTimeString();
  const [ctime, setTime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };
  setInterval(UpdateTime);

  useEffect(() => {
    axios
      .get(`https://islomapi.uz/api/present/day?region=${region}`)
      .then((r) => setTimePray(r.data));
  }, [region]);

  const comp = (t1, t2, p) => {
    const [h1, m1] = t1.split(":").map((i) => +i);
    const [h2, m2] = t2.split(":").map((i) => +i);
    const bool = time.indexOf("PM");
    const [h3, m3] = time
      .split(":")
      .map((i) => +i)
      .map((i, x) => {
        if (bool > -1 && x == 0) {
          i = i + 12;
          return i;
        }
        return i;
      });
    if ((p == "hufton" && h1 < h3) || (h1 == h3 && p == "hufton" && m3 > m1)) {
      return true;
    }
    if (
      (h1 < h3 && h3 < h2) ||
      (h1 == h3 && m3 >= m1) ||
      (h2 == h3 && m3 <= m2)
    ) {
      return true;
    } else return false;
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            colorPrimary: "#005036",
            colorPrimaryHover: "#005036",
            colorBgTextHover: "#b4c8d2",
          },
        },
      }}
    >
      <Container>
        <Head>Prayer Time for {region}</Head>
        <Settings>
          <Now>{ctime}</Now>
          <Region>
            <Select
              defaultValue={region}
              style={{ width: 200 }}
              options={regions}
              onChange={(e) => setRegion(e)}
              size={window.innerWidth < 1001 ? "middle" : "large"}
            />
          </Region>
        </Settings>
        {!timePray ? (
          <Loader />
        ) : (
          <TimesWrapper>
            <Time
              className={
                comp(timePray?.times?.tong_saharlik, timePray?.times?.quyosh)
                  ? "active"
                  : ""
              }
            >
              <Left>
                <FaCloudMoon />
              </Left>
              <Right>
                <Name>Fajar</Name>
                <TimePray>{timePray?.times?.tong_saharlik}</TimePray>
              </Right>
            </Time>
            <Time>
              <Left>
                <BsFillSunriseFill />
              </Left>
              <Right>
                <Name>Sun Rise</Name>
                <TimePray>{timePray?.times?.quyosh}</TimePray>
              </Right>
            </Time>
            <Time
              className={
                comp(timePray?.times?.peshin, timePray?.times?.asr)
                  ? "active"
                  : ""
              }
            >
              <Left>
                <BsSunFill />
              </Left>
              <Right>
                <Name>Zuhar</Name>
                <TimePray>{timePray?.times?.peshin}</TimePray>
              </Right>
            </Time>
            <Time
              className={
                comp(timePray?.times?.asr, timePray?.times?.shom_iftor)
                  ? "active"
                  : ""
              }
            >
              <Left>
                <IoPartlySunny />
              </Left>
              <Right>
                <Name>Asar</Name>
                <TimePray>{timePray?.times?.asr}</TimePray>
              </Right>
            </Time>
            <Time
              className={
                comp(timePray?.times?.shom_iftor, timePray?.times?.hufton)
                  ? "active"
                  : ""
              }
            >
              <Left>
                <BsFillSunsetFill />
              </Left>
              <Right>
                <Name>Magrib</Name>
                <TimePray>{timePray?.times?.shom_iftor}</TimePray>
              </Right>
            </Time>
            <Time
              className={
                comp(
                  timePray?.times?.hufton,
                  timePray?.times?.tong_saharlik,
                  "hufton"
                )
                  ? "active"
                  : ""
              }
            >
              <Left>
                <IoIosMoon />
              </Left>
              <Right>
                <Name>Isha</Name>
                <TimePray>{timePray?.times?.hufton}</TimePray>
              </Right>
            </Time>
          </TimesWrapper>
        )}
      </Container>
    </ConfigProvider>
  );
};

export default PrayerTimes;
