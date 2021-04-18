import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Title as Heading } from '../Heading/styles';
import { Container as LinksContainer } from '../NavLinks/styles';

const menuVisible = (theme) => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div`
  ${({ theme, menuIsVisible }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    border-bottom: ${theme.colors.mediumGray};
    background: ${theme.colors.white};
    transition: all 300ms ease-in-out;

    /*  Tirando as configurações padrões de ambos (section e heading) */
    & ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }

    & ${Heading} {
      margin-top: 0;
      margin-bottom: 0;
    }

    @media ${theme.media.lteMedium} {
      height: 100vh;
      /* Esta como visibility e não display para criar uma transição */
      visibility: hidden;
      opacity: 0;
      /* Mudando a visibilidade caso o botão do menu tenha sido apertado */
      ${menuIsVisible && menuVisible(theme)}

      & ${SectionContainer} {
        height: 100vh;
        align-items: center;
        overflow-y: auto;
      }

      /* O "Logo" */
      & ${Heading} {
        padding-bottom: ${theme.spacings.large};
        display: flex;
        justify-content: center;
      }

      & ${LinksContainer} {
        /* direção column e wrap */
        flex-flow: column wrap;
        align-items: center;
      }
    }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.lteMedium} {
      /* Vai ficar um menu por coluna */
      display: block;
      text-align: center;
      padding: ${theme.spacings.xxlarge} 0;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme, menuIsVisible }) => css`
    z-index: 6;
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    border: none;
    /* Vai mudar com o mediaQuery */
    display: none;
    /* Fazendo com que caso o menu esteja aberto, feche ele em qualquer lugar clicado */
    pointer-events: ${menuIsVisible ? 'none' : 'all'};

    @media ${theme.media.lteMedium} {
    /* Tornando visivel */
      display:flex
      align-items: center;
      justify-content: center;
    }

    > svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  `}
`;
