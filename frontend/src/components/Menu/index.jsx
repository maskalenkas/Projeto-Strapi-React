import P from 'prop-types';
import * as Styled from './styles';

import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { SectionContainer } from '../SectionContainer/';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { useState } from 'react';

export const Menu = ({ links, logoData }) => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <Styled.Button
        menuIsVisible={menuIsVisible}
        onClick={() => setMenuIsVisible(true)}
        aria-label="Open/Close Menu"
      >
        {menuIsVisible ? (
          <CloseIcon aria-label="Open Menu" />
        ) : (
          <MenuIcon aria-label="Close Menu" />
        )}
      </Styled.Button>
      <Styled.Container
        menuIsVisible={menuIsVisible}
        onClick={() => setMenuIsVisible(false)}
      >
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
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
