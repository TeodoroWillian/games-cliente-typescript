import styled, { css } from "styled-components";

export const GameDetails = styled.section`
  ${({ theme }) => css`
    width: 350px;
    justify-self: end;
    background: ${theme.colors.baseBg2};
    padding: 20px;
    box-sizing: border-box;
    overflow: auto;
    min-height: 100vh;
  `}
`;

export const GameDetailsTitle = styled.h2`
  ${({ theme }) => css`
    ${theme.mixins.headingStyle()};
    font-size: 20px;
    font-weight: 600;
    margin: 0;
    text-align:center;
  `}
`;

export const GameDetailsButtonGroup = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-top: 10px;
    img{
      border-radius: 78.5px;
    }
  `}
`;

export const GameDetailsList = styled.div`
  ${({theme}) => css`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    p {
      color: ${theme.colors.textEmphatic}
    }
    span{
      color: ${theme.colors.textLight}
    }
  `}
`;

