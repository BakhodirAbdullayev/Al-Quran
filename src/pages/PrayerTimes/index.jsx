import moment from "moment";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaCloudMoon } from "react-icons/fa";
import { IoPartlySunny } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";
import { BsFillSunsetFill, BsFillSunriseFill, BsSunFill } from "react-icons/bs";
import axios from "axios";
import { Select, ConfigProvider } from "antd";

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
`;
const Settings = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;
const Now = styled.div`
  font-size: 32px;
  font-weight: 600;
  font-family: "Courier New", Courier, monospace;
`;
const Region = styled.div``;
const TimesWrapper = styled.div`
  width: 90%;
  margin: 30px auto;
  display: grid;
  justify-content: space-evenly;
  gap: 30px;
  align-items: center;
  grid-template-columns: repeat(2, minmax(300px, 600px));
`;
const Time = styled.div`
  max-width: 500px;
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1px solid #5da59b;
  border-radius: 10px;
  padding: 10px 20px;
`;
const Left = styled.div`
  width: 20%;
  height: 100%;
  font-size: 50px;
  display: grid;
  place-items: center;
  border-right: 1px solid #5da59b;
  color: #005036;
`;
const Right = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Name = styled.div`
  font-size: 30px;
  font-weight: 600;
`;
const TimePray = styled.div`
  font-family: "Courier New", Courier, monospace;
  font-size: 26px;
  font-weight: 600;
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

  const comp = (t1, t2) => {
    const [h1, m1] = t1.split(":").map((i) => +i);
    const [h2, m2] = t2.split(":").map((i) => +i);
    const bool = time.indexOf("PM");
    const [h3, m3] = time.split(":").map((i, x) => {
      if (bool > -1 && x == 0) {
        // i + 12;
        return i;
      }
      return i;
    });

    console.log(h3, bool);
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
              size="large"
            />
          </Region>
        </Settings>
        {timePray && (
          <TimesWrapper>
            <Time
              className={comp(
                timePray?.times?.tong_saharlik,
                timePray?.times?.quyosh
              )}
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
            <Time>
              <Left>
                <BsSunFill />
              </Left>
              <Right>
                <Name>Zuhar</Name>
                <TimePray>{timePray?.times?.peshin}</TimePray>
              </Right>
            </Time>
            <Time>
              <Left>
                <IoPartlySunny />
              </Left>
              <Right>
                <Name>Asar</Name>
                <TimePray>{timePray?.times?.asr}</TimePray>
              </Right>
            </Time>
            <Time>
              <Left>
                <BsFillSunsetFill />
              </Left>
              <Right>
                <Name>Magrib</Name>
                <TimePray>{timePray?.times?.shom_iftor}</TimePray>
              </Right>
            </Time>
            <Time>
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
