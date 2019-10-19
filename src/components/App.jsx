import React, { useState, useCallback } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Header from './Header';
import Result from './Result';
import Loading from './Loading';
import GlobalStyle from '../GlobalStyle';

const S = {
  Container: styled.div`
    width: 100%;
    max-width: 940px;
    margin: auto;
    padding: 5rem 0;
  `,
  ErrorMessage: styled.div`
    width: 100%;
    padding: 1rem 2rem;
    background-color: #e99002;
    color: #fff;
  `,
};

const App = () => {
  const [value, setValue] = useState('');
  const [user, setUser] = useState([]);
  const [errorName, setErrorName] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async (username) => {
    try {
      const response = await axios(
        `https://api.github.com/search/repositories?q=+user:${username}`,
      );
      setUser(response.data.items);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsError(false);
    setIsLoading(true);
    setUser([]);
    fetchData(value);
    setErrorName(value);
    setValue('');
  };

  return (
    <>
      <S.Container>
        <Header
          value={value}
          setValue={setValue}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />
        {user.length !== 0 && <Result user={user} />}
        {isLoading && <Loading />}
        {isError && (
          <S.ErrorMessage>
User '
{errorName}
' is not found.
</S.ErrorMessage>
        )}
      </S.Container>
      <GlobalStyle />
    </>
  );
};

export default App;
