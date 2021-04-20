import styled, { css } from 'styled-components';
import { Container as FooterComponent } from '../../components/Footer/styles';
import { Container as TextComponent } from '../../components/TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    & > ${FooterComponent} ${TextComponent} {
      font-size: ${theme.font.sizes.small};
    }

    padding-top: 5.4rem;

    @media ${theme.media.lteMedium} {
      padding-top: 0;
    }
  `}
`;
