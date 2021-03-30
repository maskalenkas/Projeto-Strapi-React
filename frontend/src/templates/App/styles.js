import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${(props) => {
    return props.corDoTexto == 'blue'
      ? css`
          color: blue;
        `
      : false;
  }}
  background: red;
`;
