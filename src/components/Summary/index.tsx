import { useContext } from 'react';
import entradaImg from '../../assets/icon-entrada.svg';
import saidaImg from '../../assets/icon-saida.svg';
import totalImg from '../../assets/icon-total.svg';
import { TransactionContext } from '../../hooks/useTransactions';

import { Container } from './styles';

export function Summary() {
  const { transactions } = useContext(TransactionContext);

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }
    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradaImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={saidaImg} alt="Saídas" />
        </header>
        <strong>
        {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Entradas" />
        </header>
        <strong>
        {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  )
}