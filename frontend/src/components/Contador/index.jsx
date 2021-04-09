import P from 'prop-types';
import { useState } from 'react';
import * as Styled from './styles';

export const Contador = ({ numeroAumentar, numeroInicial }) => {
  const [cont, setCont] = useState(numeroInicial);
  const [isMaior5, setIsMaior5] = useState(false);

  function aumentar() {
    setCont(cont + numeroAumentar);

    cont >= 5 && setIsMaior5(true);
  }

  function diminuir() {
    setCont(cont - 1);

    cont <= 4 && setIsMaior5(false);
  }

  return (
    <Styled.Container isMaior={isMaior5}>
      <Styled.NumeroContador>{cont}</Styled.NumeroContador>
      <div>
        <Styled.BotaoAcrescentar onClick={aumentar}>+</Styled.BotaoAcrescentar>
        <Styled.BotaoDiminuir onClick={diminuir}>-</Styled.BotaoDiminuir>
      </div>
    </Styled.Container>
  );
};

Contador.propTypes = {
  numeroAumentar: P.number.isRequired,
  numeroInicial: P.number.isRequired,
};
