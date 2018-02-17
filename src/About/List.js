import React from 'react';
import styled from 'styled-components';
import articlesList from './articlesList';
import Article from './Article';

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export default () => {
  return (
    <List>
      {articlesList.map(article => {
        return (
          <Article
            pic={article.pic}
            text={article.desc}
            title={article.title}
          />
        );
      })}
    </List>
  );
};
