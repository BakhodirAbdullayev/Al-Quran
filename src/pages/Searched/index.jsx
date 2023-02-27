import React, { useContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { instance } from "../../utils/axios";
import { SurahsContext } from "../../utils/SurahsContext";
import { Pagination } from "antd";
import SearchedItem from "./SearchedItem";
import NotFinded from "./NotFinded";

const Searched = () => {
  const [val, setVal] = useSearchParams();
  const { lang } = useContext(SurahsContext);
  const [data, setData] = useState(null);
  const [forPag, setForPag] = useState(null);
  const [limit, setLimit] = useState(10);
  const [current, setCurrent] = useState(1);

  const q = val.get("q");

  useEffect(() => {
    instance
      .get(`/search/${q}/all/${lang}`)
      .then((r) => setData(r.data))
      .catch((e) => console.log(e));
  }, [q]);

  useEffect(() => {
    data &&
      setForPag(
        data?.data?.matches.slice((current - 1) * limit, current * limit)
      );
  }, [current, data, limit]);
  console.log(data);
  console.log(forPag);
  console.log(q);

  const onChange = (cur, size) => {
    setCurrent(cur);
    setLimit(size);
  };

  if (!data && data != null) {
    console.log(data);
    return <NotFinded />;
  } else
    return (
      <>
        <Container>
          {forPag && forPag.map((f, i) => <SearchedItem obj={f} key={i} />)}
        </Container>
        <Pag>
          <Pagination
            current={current}
            onChange={onChange}
            total={data?.data?.count}
          />
        </Pag>
      </>
    );
};

export default Searched;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Pag = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  margin-top: 50px;
  padding-bottom: 50px;
`;
