import React from 'react';
import styled from 'styled-components';
import Info from './Info';
import Categories from './Categories';
import Cards from './Cards';

const Destination = styled.section`
  background: #f8fcff;
`;

export default () => {
  return (
    <Destination>
      <Info />
      <div className="container">
        <Categories />
        <Cards />
      </div>
    </Destination>
  );
};
