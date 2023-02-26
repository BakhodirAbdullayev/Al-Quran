import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Pagination, ConfigProvider } from "antd";
import { instance } from "../../utils/axios";
import Card from "./Card";
import { SurahsContext } from "../../utils/SurahsContext";

const Container = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #fff;
`;
const CardsWrapper = styled.div`
  width: 100%;
  display: grid;
  justify-content: space-between;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Pag = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  margin-top: 50px;
`;

const AllSurahs = () => {
  const [forPag, setForPag] = useState([]);
  const [limit, setLimit] = useState(10);
  const [current, setCurrent] = useState(1);
  const { surah } = useContext(SurahsContext);

  useEffect(() => {
    surah && setForPag(surah.slice((current - 1) * limit, current * limit));
  }, [current, surah, limit]);

  const onChange = (cur, size) => {
    setCurrent(cur);
    setLimit(size);
  };

  return (
    <Container>
      <CardsWrapper>
        {forPag.map((s) => (
          <Card data={s} key={s.number} />
        ))}
      </CardsWrapper>
      <ConfigProvider
        theme={{
          components: {
            Pagination: {
              colorPrimary: "#005036",
              colorPrimaryHover: "#005036",
              colorBgTextHover: "#b4c8d2",
            },
          },
        }}
      >
        <Pag>
          <Pagination current={current} onChange={onChange} total={114} />
        </Pag>
      </ConfigProvider>
    </Container>
  );
};

export default AllSurahs;
