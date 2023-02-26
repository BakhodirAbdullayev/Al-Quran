import React, { useContext } from "react";
import styled from "styled-components";
import { SurahsContext } from "../../utils/SurahsContext";
import { NavLink } from "react-router-dom";
import { mobile, first } from "../../styles/responsive";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;
const Card = styled(NavLink)`
  width: 100%;
  padding: 15px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  gap: 15px;
  border: 2px solid transparent;
  transition: 0.3s;
  &:hover {
    background-color: rgba(93, 165, 155, 0.2);
    box-shadow: 0px 2px 3px 1px rgba(93, 165, 155, 0.7);
  }
  &.active {
    border-color: #005036;
    &:hover {
      background-color: #5da59b;
      color: #fff;
      box-shadow: none;
    }
  }
`;
const Left = styled.div`
  width: 12%;
`;
const Num = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #005036;
  color: #fff;
  text-align: center;
  font-weight: 600;
  font-size: 12px;
  display: grid;
  place-items: center;
`;
const Right = styled.div`
  width: 70%;
`;
const Name = styled.div`
  font-size: 16px;
  font-weight: 600;
`;
const NameT = styled.div`
  font-size: 14px;
  color: #a5bcc6;
`;

const SurahsList = () => {
  const { surah } = useContext(SurahsContext);

  return (
    <Container>
      {surah &&
        surah.map((s) => (
          <Card key={s.number} to={`/surahs/${s?.number}`}>
            <Left>
              <Num>{s.number}</Num>
            </Left>
            <Right>
              <Name>{s.englishName}</Name>
              <NameT>{s.englishNameTranslation}</NameT>
            </Right>
          </Card>
        ))}
    </Container>
  );
};

export default SurahsList;
