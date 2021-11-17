import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div`
  max-width: 800px;
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

const ArticleWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  margin: 0 0 50px;
  padding: 40px 40px;
  border-radius: 15px;
  box-shadow: 0px 10px 42px 0px rgba(226, 222, 243, 0.75);
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

const spinningEllipsis1 = keyframes`
 0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
`;

const spinningEllipsis2 = keyframes`
   0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
`;

const spinningEllipsis3 = keyframes`
     0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
`;

const Ellipsis = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fcf;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  div:nth-child(1) {
    left: 8px;
    animation: ${spinningEllipsis1} 0.6s infinite;
  }
  div:nth-child(2) {
    left: 8px;
    animation: ${spinningEllipsis2} 0.6s infinite;
  }
  div:nth-child(3) {
    left: 32px;
    animation: ${spinningEllipsis2} 0.6s infinite;
  }
  div:nth-child(4) {
    left: 56px;
    animation: ${spinningEllipsis3} 0.6s infinite;
  }
`;

const API_TOKEN = '13c2360ec380ada9e33efaa6f1db3f';

const Post = (props) => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(props.match.params.id);
  let { id } = useParams();
  console.log(id);

  const fetchData = async () => {
    let response = await axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: `
      {
        article(filter: {id: {eq: ${id}}}) {
          id
          title
          content
          category
          image {
            url
          }
          imageGallery {
            url
            id
          }
        }
      }
      
      `,
        },
        {
          headers: {
            authorization: `Bearer ${API_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setPost(data.article);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();

    // axios
    //   .post(
    //     'https://graphql.datocms.com/',
    //     {
    //       query: `
    //     {
    //       article(filter: {id: {eq: ${id}}}) {
    //         id
    //         title
    //         content
    //         category
    //         image {
    //           url
    //         }
    //         imageGallery {
    //           url
    //           id
    //         }
    //       }
    //     }
    //     `,
    //     },
    //     {
    //       headers: {
    //         authorization: `Bearer ${API_TOKEN}`,
    //       },
    //     }
    //   )
    //   .then(({ data: { data } }) => {
    //     setTimeout(() => {
    //       setArticle(data.article);
    //       setLoading(true);
    //     }, 2000);
    //   })
    //   .catch((err) => console.log(err));
  }, []);

  const { title, category, image, imageGallery, content } = post;
  console.log(imageGallery);

  if (loading) {
    return (
      <Ellipsis>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Ellipsis>
    );
  }

  return (
    <Wrapper>
      <ArticleWrapper>
        <CircleBackground />
        <ImgWrapper>
          <BackgroundImg src={image.url} />
        </ImgWrapper>
        <h1>{title}</h1>
        <p>{category}</p>
        <p>{content}</p>
        <div>
          {imageGallery.map((img) => (
            <img
              key={img.url}
              src={img.url}
              alt={'Wedding photo'}
              style={{ width: '100px', height: '100px' }}
            />
          ))}
        </div>
      </ArticleWrapper>
    </Wrapper>
  );
};

export default Post;
