import React from 'react';
import { Button } from 'components/atoms/Button/Button';
// import { ArticleWrapper, TitleWrapper, StyledButton } from './Blog.styles';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 800px;
`;

export const ArticleWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  margin: 0 0 50px;
  padding: 40px 40px;
  border-radius: 15px;
  box-shadow: 0px 10px 42px 0px rgba(226, 222, 243, 0.75);

  img {
    width: 100%;
    max-height: 405px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    margin: 30px 0 0;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.xl};
    text-shadow: #fff 0px 0px 5px, #fff 0px 0px 10px, #fff 0px 0px 15px,
      #668cce 0px 0px 20px, 2px 2px 2px rgba(206, 89, 55, 0);
  }

  p {
    margin: 0 0 25px;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  & > p {
    &:nth-child(3) {
      text-align: left;
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
`;

const TextButton = styled(Button)`
  margin: 0;
  padding: 15px 30px;
`;

export const StyledButton = styled(Button)`
  width: 100px;
  padding: 5px;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const BackgroundImg = styled.div`
  background: url(${(props) => props.src}) no-repeat;
  width: 100%;
  height: 405px;
  background-origin: border-box;
  background-size: cover;
  border: 15px solid white;
  border-radius: 5px;
  box-shadow: 0px 9px 24px 0px rgba(172, 194, 228, 1);
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircleBackground = styled.div`
  position: absolute;
  width: 2000px;
  height: 2000px;
  background-color: #f9f5ff;
  border-radius: 50%;
  top: 55%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: -999;
`;

// wrzucać zdjęcia w konkretnym formacie?

const Blog = ({ articles, error }) => {
  return (
    <Wrapper>
      {articles.length > 0 ? (
        articles.map(({ title, category, content, image }) => {
          return (
            <ArticleWrapper key={title}>
              <CircleBackground></CircleBackground>
              {/* {image ? <img src={image.url} alt="article_image" /> : null} */}
              <ImgWrapper>
                <BackgroundImg src={image.url} />
              </ImgWrapper>
              <TextWrapper>
                <h3>{title}</h3>
                <p>{category}</p>
                <p>{content}</p>
                <TextButton>Read more</TextButton>
              </TextWrapper>
            </ArticleWrapper>
          );
        })
      ) : (
        <TextWrapper>{error ? error : 'Loading ...'}</TextWrapper>
      )}
    </Wrapper>
  );
};

export default Blog;
