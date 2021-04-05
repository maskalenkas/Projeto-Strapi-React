import P from 'prop-types';
import * as Styled from './styles';

export const BotaoTeste = ({ children, light = false }) => {
  return (
    <div>
      <Styled.BotaoPreto light={light}>{children}</Styled.BotaoPreto>
    </div>
  );
};

BotaoTeste.propTypes = {
  children: P.node.isRequired,
  light: P.bool.isRequired,
};
