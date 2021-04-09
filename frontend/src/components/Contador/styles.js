import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, isMaior }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > ${NumeroContador} {
      color: ${isMaior ? 'red' : 'black'};
    }

    & > div ${BotaoAcrescentar}, ${BotaoDiminuir} {
      text-align: center;
      font-size: 5rem;
      width: 5rem;
    }
  `}
`;

export const BotaoAcrescentar = styled.button`
  background: red;
`;

export const BotaoDiminuir = styled.button`
  background: green;
`;

export const NumeroContador = styled.span``;
