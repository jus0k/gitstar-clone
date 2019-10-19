import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuid from 'uuid/v4';

import RepositoryItem from './RepositoryItem';

const S = {
  Container: styled.div`
    width: 100%;
  `,
  Name: styled.div`
    font-size: 2rem;
  `,
  Info: styled.div`
    font-size: 1.25rem;
    padding: 1rem 0;
    border-bottom: 1px solid #ededed;
    margin-bottom: 1rem;
  `,
  Repositories: styled.div`
    width: 100%;
  `,
};

const Result = ({ user }) => {
  const totalStar = user.reduce((acc, cur) => {
    console.log(cur.stargazers_count);
    return acc + cur.stargazers_count;
  }, 0);
  const userInfo = `${user.length} Repositories | ${totalStar} Stars`;

  return (
    <S.Container>
      <S.Name>{user[0].owner.login}</S.Name>
      <S.Info>{userInfo}</S.Info>
      <S.Repositories>
        {user.map((item) => (
          <RepositoryItem
            index={uuid()}
            name={item.full_name}
            star={item.stargazers_count}
          />
        ))}
      </S.Repositories>
    </S.Container>
  );
};

Result.propTypes = {
  user: PropTypes.objectOf.isRequired,
};

export default Result;
