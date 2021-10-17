import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';

export const Wrapper = styled.div`
  width: 400px;
  height: 500px;
  padding: 40px;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  overflow-y: scroll;
`;

export const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 200px;
    height: 150px;
  }
`;

export const TitleWrapper = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const StyledButton = styled(Button)`
  width: 100px;
  padding: 5px;
  font-size: ${({ theme }) => theme.fontSize.m};
`;
