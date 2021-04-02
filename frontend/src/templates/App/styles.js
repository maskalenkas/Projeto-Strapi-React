import styled, { css } from 'styled-components';

export const Titulo = styled.h1`
  ${() => css`
    color: white;
  `}
`;

export const divA = styled.div`
  // Sempre vai receber props, e neas podem vir theme e etc...
  ${(props) =>
    // Isso vai vir por padrão
    css`
      background: blue;
    `}

  // Quando passar o mouse, todos os h1 ficaram verdes, e quando passar o mouse em um h1, ele ficara amarelo
 // & == div
 &:hover > h1 {
    transition: all 0.5s;
    background: green;

    // & == h1
    &:hover {
      background: yellow;
    }
  }
`;
