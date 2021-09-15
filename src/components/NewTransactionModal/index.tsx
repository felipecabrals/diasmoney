import  Modal  from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/close.svg'
import entradaImg from '../../assets/icon-entrada.svg'
import saidaImg from '../../assets/icon-saida.svg'
import { useState } from 'react';

interface NewTransactionModalProps  {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal ({isOpen, onRequestClose}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');
  return (
    <Modal 
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >
          <button 
            type="button" 
            onClick={onRequestClose}
            className="react-modal-close"
          >
            <img src={closeImg} alt="Fechar Modal"/>
          </button>

          <Container>
            <h2>Cadastrar</h2>
            <input type="text" placeholder="Título"/>
            <input type="number" placeholder="Preço"/>
              <TransactionTypeContainer>
                <RadioBox 
                  type="button" 
                  onClick={() => { setType('deposit'); }}
                  isActive={type == 'deposit'}
                >
                  <img src={entradaImg} alt="Entrada"/>
                  <span>Entrada</span>
                </RadioBox>

                <RadioBox 
                  type="button" 
                  onClick={() => { setType('withdraw'); }}
                  isActive={type == 'withdraw'}
                >
                  <img src={saidaImg} alt="Saída"/>
                  <span>Saída</span>
                </RadioBox>
              </TransactionTypeContainer>
            <input type="text" placeholder="Categoria"/>
            <button type="submit">Cadastrar</button>
          </Container>
          
        </Modal>
  )
}