import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../../styles/responsive";

const Container = styled.div`
  padding: 10px 15px;
  background-color: #fff;
  border-radius: 10px;
`;
const Top = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  font-style: italic;
  span {
    color: #005036;
  }
`;
const Text = styled.p`
  font-size: 15px;
  line-height: 1.2;
  margin: 5px 0;
  text-align: justify;
`;
const ToFull = styled(Link)`
  display: block;
  width: max-content;
  margin-top: 15px;
  font-size: 17px;
  font-weight: 600;
  position: relative;
  opacity: 0.9;
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    border-radius: 2px;
    background-color: #005036;
    position: absolute;
    left: 0;
    bottom: -3px;
    transition: 0.4s;
  }
  &:hover {
    opacity: 1;
    color: #005036;
    &::after {
      width: 100%;
    }
  }
  ${mobile({
    color: "#005036",
  })}
`;

const SearchedItem = ({ obj }) => {
  const { numberInSurah, text, surah } = obj;
  return (
    <Container>
      <Top>
        Surah <span>{surah?.englishName}</span> ayah{" "}
        <span>{numberInSurah}</span>
      </Top>
      <Text>{text}</Text>
      <ToFull to={`/surahs/${surah.number}`}>See full surah</ToFull>
    </Container>
  );
};

export default SearchedItem;
