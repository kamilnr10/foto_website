import React, { useState, useEffect } from 'react';
import 'views/App.css';
import MainTemplate from 'components/templates/MainTemplate';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import Form from './Form';
import Blog from 'components/templates/NewsSection/Blog';
import axios from 'axios';
import Gallery from 'views/Gallery';
import { DataSlider } from 'assets/data/DataSlider';
import WeddingsSlider from 'components/organisms/WeddingsSlider/WeddingsSlider';

const ViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const API_TOKEN = '13c2360ec380ada9e33efaa6f1db3f';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [weddingsPhotos, setWeddingsPhotos] = useState([]);
  const [lifestylePhotos, setLifestylePhotos] = useState([]);
  const [engagementsPhotos, setEngagementsPhotos] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
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
        console.log(data);
        setArticles(data.allArticles);
        setLifestylePhotos(data.lifestyle);
        setWeddingsPhotos(data.wedding);
        setEngagementsPhotos(data.engagement);
        console.log(weddingsPhotos);
      })
      .catch(() => {
        setError(`sorry, we couldn't load articles`);
      });
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <ViewWrapper>
            <Switch>
              <Route path="/" exact>
                <h1>O mnie</h1>
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
              <Route path="/blog">
                <Blog articles={articles} error={error} />
              </Route>
            </Switch>
          </ViewWrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default App;
