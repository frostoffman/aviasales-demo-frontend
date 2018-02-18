import React from 'react';
import styled from 'styled-components';
import List from './List';

const Articles = styled.section`
  background-color: #fff;
  padding: 20px 0 24px 0;
`;

export default () => {
  return (
    <Articles>
      <div className="container">
        <List />
      </div>
    </Articles>
  );
};
