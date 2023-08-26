import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${() => css`
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${ ({ theme }) => theme.colors.primary[800] };
  `}
`;

export const Title = styled.Text`
  ${() => css`
    font-size: 30px;
    color: ${ ({ theme }) => theme.colors.lightColor[600] };
    font-family: ${ ({ theme }) => theme.fonts.medium };
    font-weight: 700;
    line-height: 50px;
  `}
`;

export const Description = styled(Title)`
  ${() => css`
    font-size: 18px;
    opacity: 0.7;
    margin-top: 10px;
    font-weight: 500;
    line-height: 30px;
  `}
`;