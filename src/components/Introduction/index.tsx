import styled from 'styled-components';
import { colors } from '../../common/styles/colors';
import { breakpoints } from '../../contants';
import { messages } from './messages';

const S = {
  IntroWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${colors.green};
    height: 75vh;
    margin-left: 30px;
    max-width: 600px;

    @media screen and (max-width: ${breakpoints.mobile}px) {
      margin-left: 0;
    }
  `,
  Heading: styled.h1`
    position: relative;
    right: 6px;
    font-weight: 300;
    font-size: 96px;
    line-height: 5rem;
    letter-spacing: -2px;
    max-width: 100px;
    margin: 0 0 20px 0;

    @media screen and (max-width: ${breakpoints.mobile}px) {
      font-size: 4.5rem;
      line-height: 4rem;
    }
  `,
  Description: styled.p`
    color: ${colors.silver};
    text-align: justify;
  `,
}

export const Introduction = () => {
    return (
      <S.IntroWrapper>
        <S.Heading>{messages.heading1}</S.Heading>
        <h2>{messages.heading2}</h2>
        <S.Description>{messages.description}</S.Description>
      </S.IntroWrapper>
    );
}