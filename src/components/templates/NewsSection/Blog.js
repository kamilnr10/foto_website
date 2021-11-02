import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import {
  Wrapper,
  ArticleWrapper,
  TitleWrapper,
  StyledButton,
} from './Blog.styles';

const Blog = ({ articles, error }) => {
  return (
    <Wrapper>
      {articles.length > 0 ? (
        articles.map(({ title, category, content, image }) => {
          return (
            <ArticleWrapper key={title}>
              <TitleWrapper>
                <h3>{title}</h3>
                <p>{category}</p>
              </TitleWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt="article_image" /> : null}
              <Button>Read more</Button>
            </ArticleWrapper>
          );
        })
      ) : (
        <TitleWrapper>{error ? error : 'Loading ...'}</TitleWrapper>
      )}
    </Wrapper>
  );
};

export default Blog;
