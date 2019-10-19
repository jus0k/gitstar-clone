import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const S = {
  Container: styled.div`
    width: 100%;
    padding: 3rem;
    background-color: #fafafa;
    box-sizing: border-box;
    margin-bottom: 3rem;
  `,
  Title: styled.h1`
    font-size: 4rem;
    margin-bottom: 1rem;
  `,
  SubTitle: styled.h2`
    font-size: 1.5rem;
    font-weight: lighter;
    margin-bottom: 1rem;
  `,
  InputContainer: styled.form``,
  Input: styled.input`
    padding: 1rem 1rem;
    border: 1px solid #eaeaea;
    font-size: 0.875rem;
    width: 100%;
    max-width: 380px;
  `,
  Button: styled.input`
    padding: 1rem 2rem;
    font-size: 0.875rem;
    background-color: #eaeaea;
    outline: none;
    border: none;
  `,
};

const Header = ({ value, setValue, onSubmit }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <S.Container>
      <S.Title>Gitstar Ranking</S.Title>
      <S.SubTitle>
        Unofficial GitHub star ranking for users, organizations and
        repositories.
      </S.SubTitle>
      <S.InputContainer onSubmit={onSubmit}>
        <S.Input
          name="username"
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Github username"
        />
        <S.Button type="submit" value="Search" />
      </S.InputContainer>
    </S.Container>
  );
};

Header.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Header;
