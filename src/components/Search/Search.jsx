import { Form, Input } from "antd";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const Container = styled.div`
  height: 100%;
  width: 100%;
  /* display: flex;
  align-items: center; */
`;
const SearchForm = styled.form`
  max-width: 500px;
  margin-left: 25px;
  height: 100%;
  display: flex;
  align-items: center;
`;
const FormItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  font-size: 16px;

  transition: 0.3s;
  border-radius: 5px;
  border: 1px solid ${(p) => (p.isFocused ? "#5da59b" : "transparent")};
  box-shadow: 0 0 3px ${(p) => (p.isFocused ? "#005036" : "transparent")};
  &:hover {
    border: 1px solid #5da59b;
  }
  &:focus-visible,
  &:focus {
    border: 1px solid #5da59b;
  }
  input {
    border: none;
    outline: none;
    width: 100%;
  }
`;
const Button = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  height: 100%;
  width: 20px;
  display: grid;
  place-items: center;
  font-size: 22px;
  color: #005036;
`;

const Search = () => {
  const searchRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const onFinish = (e) => {
    e.preventDefault();
    console.log(searchRef.current.focus());
  };

  return (
    <Container>
      <SearchForm onSubmit={onFinish}>
        <FormItem name="searchValue" isFocused={isFocused}>
          <Button type="submit">
            <HiOutlineMagnifyingGlass />
          </Button>
          <input
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            type={"text"}
            placeholder="Search here for surah, ayah"
            ref={searchRef}
          />
        </FormItem>
      </SearchForm>
    </Container>
  );
};

export default Search;
