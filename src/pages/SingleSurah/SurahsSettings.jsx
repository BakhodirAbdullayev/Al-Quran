import React, { useContext } from "react";
import styled from "styled-components";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Collapse, Select, ConfigProvider } from "antd";
import { SurahsContext } from "../../utils/SurahsContext";
import { hafizs } from "../../utils/hafizs";
import { mobile, first } from "../../styles/responsive";

const { Panel } = Collapse;

const Wrapper = styled.div``;

const Container = styled.div`
  /* width: 100%; */
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #fff;
  ${first({
    width: 250,
    transition: "0.6s",
    position: "fixed",
    right: (p) => (p.stBool ? "20px" : "-300px"),
    border: "1px solid #005036",
    boxShadow: "0 0 3px #005036",
  })}
`;
const Head = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
`;
const Accordion = styled.div`
  width: 100%;
  margin: 15px 0;
  font-weight: 600;
  div {
    background-color: #fff;
  }
`;
const Lang = styled.div`
  width: 100%;
`;
const Title = styled.div`
  font-weight: 600;
  color: #005036;
  font-size: 18px;
  margin-bottom: 5px;
`;

const SurahsSettings = ({ stBool }) => {
  const { setLang, lang, setHafiz, hafiz } = useContext(SurahsContext);
  const options = hafizs.map((h) => {
    return {
      value: h.value,
      label: h.name,
    };
  });
  const handleChange = (val) => {
    localStorage.setItem("lang", val);
    setLang(val);
  };
  const handleHafizChange = (val) => {
    setHafiz(val);
    console.log(val);
  };

  return (
    <Wrapper>
      <Container stBool={stBool}>
        <Head>Settings</Head>
        <Accordion>
          <Collapse accordion bordered={false} size="middle">
            <Panel header={"Reading settings"} key="1">
              <Lang>
                <Title>Language</Title>
                <Select
                  defaultValue={lang}
                  style={{
                    width: "100%",
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "en",
                      label: "English",
                    },
                    {
                      value: "uz",
                      label: "Uzbek",
                    },
                    {
                      value: "ru",
                      label: "Russian",
                    },
                  ]}
                />
              </Lang>
            </Panel>
            <Panel header="Audio settings" key="2">
              <Lang>
                <Title>Hafiz</Title>
                <Select
                  defaultValue={hafiz}
                  style={{ width: "100%" }}
                  onChange={handleHafizChange}
                  options={options}
                />
              </Lang>
            </Panel>
          </Collapse>
        </Accordion>
      </Container>
    </Wrapper>
  );
};

export default SurahsSettings;
