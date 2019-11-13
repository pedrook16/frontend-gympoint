import React from 'react';

import Box from '~/components/Box';
import ButtonSave from '~/components/ButtonSave';
import ReturnButton from '~/components/ReturnButton';

import { Content } from './styles';

export default function RegisterStudents() {
  return (
    <>
      <div>
        <h1>Cadastro de aluno</h1>
        <div>
          <ReturnButton />
          <ButtonSave />
        </div>
      </div>
      <Box
        render={
          <Content>
            <form>
              <label>NOME COMPLETO</label>
              <input type="text" placeholder="Fulano dos Santos" />
              <label>ENDEREÇO DE E-MAIL</label>
              <input type="text" placeholder="email@gmail.com" />

              <div>
                <label>IDADE</label>
                <input type="text" placeholder="Fulano dos Santos" />
                <label>PESO (em kg)</label>
                <input type="text" placeholder="email@gmail.com" />
                <label>ALTURA</label>
                <input type="text" placeholder="email@gmail.com" />
              </div>
            </form>
          </Content>
        }
      />
    </>
  );
}
