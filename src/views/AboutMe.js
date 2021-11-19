import { GallerySlider } from 'components/organisms/GallerySlider/GallerySlider';
import React from 'react';
import styled from 'styled-components';
import Gallery from 'views/Gallery';

const Wrapper = styled.div`
  width: 100%;
  /* height: 100vh; */
  padding: 0 10px;
  /* display: grid;
  grid-template-rows: 150px 1fr; */
`;

const ViewWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 30px 0;
  padding: 0 10px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const SocialMediaLinks = styled.div`
  width: 150px;
  margin: 20px 0 0 0;
`;

const TextWrapper = styled.div`
  h2 {
    padding: 10px 0;
    text-align: center;
    letter-spacing: 1px;
  }

  p {
    line-height: 1.8;
  }
`;

const AboutMe = ({ slides }) => {
  return (
    <ViewWrapper>
      <Gallery slides={slides} />

      <SocialMediaLinks>SocialMediaLinks</SocialMediaLinks>
      <TextWrapper>
        <h2>Who am I?</h2>
        <p>
          Well, let's start with the basics: I'm Lauren, I'm in my late 20's,
          I'm a photographer. Okay, got that covered, let's move on to the good
          stuff! I love to laugh and do my best to make others laugh. I make
          puns, and the kind of jokes that are so-bad-they’re-good. I love
          mac-n-cheese & wine. (If that’s not class, I’m not sure what is)
        </p>
        <br />
        <p>
          One of my favorite parts of my job is you: the people I get to meet
          and work with. It is such an honor to be asked to capture important
          moments in people’s lives. To be asked to be a part of important
          events, hearing stories, witnessing love stories unfold, watching kids
          grow up, it is such a gift to call this my job!
        </p>
        <br />
        <img src="" alt="" />
      </TextWrapper>

      <Gallery slides={slides} />

      <TextWrapper>
        <h2>How did I get here?</h2>
        <p>
          I have always been a creative. I was homeschooled for most of my life,
          my mom, who taught my brother and I, is an artist. She would teach us
          about art —all kinds— sculpture, painting, drawing, art history, the
          list goes on. We would spend lots of time in nature, she would have us
          go outside and pick a flower or leaf and have us draw it. She also was
          always wanting to capture images of the two of us as we grew up. I
          spent a lot of time in front of a camera cheesin'. As much as I
          complained of a sore face, I am now very grateful that my mom spent
          hours putting together albums to capture our childhoods, they are
          albums that I will cherish forever.
        </p>
        <br />
        <p>
          When I was in middle school I asked my parents for a little point and
          shoot camera so that I could take pictures with my friends (and let's
          be honest - to take MySpace pics! haha!) Once I got the camera I ended
          up rarely using it for what I had originally intended. I would go to
          my backyard, go on walks and take pictures of flowers, and landscapes.
          I ended up submitting some pictures into the local county fair and
          winning some blue ribbons! And of course my mom immediately started
          researching photography colleges for me, which at the time I thought
          was totally ridiculous.
        </p>
        <br />
      </TextWrapper>
    </ViewWrapper>
  );
};

export default AboutMe;
