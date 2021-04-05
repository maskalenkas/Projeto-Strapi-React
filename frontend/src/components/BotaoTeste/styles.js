import styled, { css } from 'styled-components';

const lightIsTrue = {
  background: 'black',
  color: 'white',
};

const lightIsFalse = {
  background: 'white',
  color: 'black',
};

const buttonDefault = {
  padding: '10px',
  borderRadius: '100px',
  textTransform: 'uppercase',
};

export const BotaoPreto = styled.button`
  ${({ light, theme }) => css`
    ${light ? lightIsTrue : lightIsFalse};
    ${buttonDefault}
  `};

  &:hover {
    background: ${({ light }) => (light ? 'red' : 'blue')};
  }
`;
