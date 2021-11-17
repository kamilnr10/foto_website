import React, { useState, useEffect } from 'react';
import 'views/App.css';
import MainTemplate from 'components/templates/MainTemplate';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import Form from './Form';
import Blog from 'components/templates/NewsSection/Blog';
import axios from 'axios';
import Gallery from 'views/Gallery';
import { DataSlider } from 'assets/data/DataSlider';
import WeddingsSlider from 'components/organisms/WeddingsSlider/WeddingsSlider';
import AboutMe from 'views/AboutMe';
import Slider from 'components//organisms/Slider/Slider';
import Portfolio from 'components/templates/Portfolio/Portfolio';
import { useParams } from 'react-router-dom';
import Post from 'components/organisms/Post/Post';

const images = [
  'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
  'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
  'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80',
];

// const Post = (props) => {
//   const [article, setArticle] = useState([]);
//   console.log(props.match.params.id);
//   let { id } = useParams();
//   console.log(id);

//   useEffect(() => {
//     axios
//       .post(
//         'https://graphql.datocms.com/',
//         {
//           query: `
//       {
//         article(filter: {id: {eq: ${id}}}) {
//           id
//           title
//           content
//           category
//           image {
//             url
//           }
//           imageGallery {
//             url
//             id
//           }
//         }
//       }

//       `,
//         },
//         {
//           headers: {
//             authorization: `Bearer ${API_TOKEN}`,
//           },
//         }
//       )
//       .then(({ data: { data } }) => {
//         console.log(data);
//         setArticle(data.article);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const { title, category, image, imageGallery, content } = article;

//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>{category}</p>
//       <p>{content}</p>
//       <div>IMAGE</div>
//     </div>
//   );
// };

const ViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const API_TOKEN = '13c2360ec380ada9e33efaa6f1db3f';

const heartBeat = keyframes`
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
`;

const LoadingBar = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  transform: rotate(45deg);
  transform-origin: 40px 40px;

  div {
    top: 32px;
    left: 32px;
    position: absolute;
    width: 32px;
    height: 32px;
    background: pink;
    animation: ${heartBeat} 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  div:after,
  div:before {
    content: ' ';
    position: absolute;
    display: block;
    width: 32px;
    height: 32px;
    background: pink;
  }

  div:before {
    left: -24px;
    border-radius: 50% 0 0 50%;
  }

  div:after {
    top: -24px;
    border-radius: 50% 50% 0 0;
  }
`;

const App = () => {
  const [articles, setArticles] = useState([]);
  const [weddingsPhotos, setWeddingsPhotos] = useState([]);
  const [lifestylePhotos, setLifestylePhotos] = useState([]);
  const [engagementsPhotos, setEngagementsPhotos] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    // console.log('działa');
    let response = await axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: `
        {
          allArticles {
            id
            title
            category
            content
            image {
              url
            }
          }
          wedding {
            weddings {
              url
            }
          }
          lifestyle {
            lifestyles {
              url
              id
            }
          }
          engagement {
            engagements {
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
        setTimeout(() => {
          // console.log(data);
          setArticles(data.allArticles);
          setLifestylePhotos(data.lifestyle);
          setWeddingsPhotos(data.wedding);
          setEngagementsPhotos(data.engagement);
          setLoading(true);
          // console.log(weddingsPhotos);
        }, 2000);
      })
      .catch(() => {
        setError(`sorry, we couldn't load articles`);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {loading ? (
          <MainTemplate>
            <ViewWrapper>
              <Switch>
                <Route path="/" exact>
                  <AboutMe slides={DataSlider} />
                </Route>
                <Route path="/portfolio" exact>
                  <Portfolio slides={lifestylePhotos.lifestyles} />
                </Route>
                <Route path="/weddings">
                  <WeddingsSlider slides={weddingsPhotos.weddings} />
                </Route>
                <Route path="/lifestyle">
                  <WeddingsSlider slides={lifestylePhotos.lifestyles} />
                </Route>
                <Route path="/gallery">
                  <WeddingsSlider slides={engagementsPhotos.engagements} />
                </Route>
                <Route path="/contact">
                  <Form />
                </Route>
                <Route exact path="/blog">
                  <Blog articles={articles} error={error} />
                </Route>
                <Route
                  path="/blog/:id"
                  render={(props) => <Post {...props} />}
                ></Route>
              </Switch>
            </ViewWrapper>
          </MainTemplate>
        ) : (
          <LoadingWrapper>
            <LoadingBar>
              <div></div>
            </LoadingBar>
          </LoadingWrapper>
        )}
      </ThemeProvider>
    </Router>
  );
};

export default App;
