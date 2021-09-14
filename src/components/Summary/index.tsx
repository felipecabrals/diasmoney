import entradaImg from '../../assets/icon-entrada.svg';
import saidaImg from '../../assets/icon-saida.svg';
import totalImg from '../../assets/icon-total.svg';

import { Container } from './styles';

export function Summary () {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradaImg} alt="Entradas"/>
        </header>
        <strong>R$ 100,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={saidaImg} alt="Saídas"/>
        </header>
        <strong>R$ 10,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Entradas"/>
        </header>
        <strong>R$ 90,00</strong>
      </div>
    </Container>
  )
}