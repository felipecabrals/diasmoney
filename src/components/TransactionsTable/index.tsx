import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
  }, [])
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          </tr>
        </tbody>
            <td>Desenvolviemnto Web</td>
            <td>r$12.000</td>
            <td>Dev</td>
            <td>20/02/2021</td>
      </table>
    </Container>
  )
}