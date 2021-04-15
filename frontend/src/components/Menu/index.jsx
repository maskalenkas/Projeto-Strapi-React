import P from 'prop-types';
import * as Styled from './styles';

import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { SectionContainer } from '../SectionContainer/';

export const Menu = ({ links, logoData }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <Styled.MenuContainer>
          <LogoLink {...logoData} />
          <NavLinks links={links} />
        </Styled.MenuContainer>
      </SectionContainer>
    </Styled.Container>
  );
};

Menu.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
    }),
  ),
  logoData: P.shape({
    text: P.string.isRequired,
    srcImg: P.string,
    link: P.string.isRequired,
  }).isRequired,
};
