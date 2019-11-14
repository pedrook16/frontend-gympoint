import React from 'react';
import { Link } from 'react-router-dom';

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
          <Link to="/dashboard">
            <ReturnButton />
          </Link>
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
                <div>
                  <label>IDADE</label>
                  <input type="text" />
                </div>
                <div>
                  <label>PESO (em kg)</label>
                  <input type="text" />
                </div>
                <div>
                  <label>ALTURA</label>
                  <input type="text" />
                </div>
              </div>
            </form>
          </Content>
        }
      />
    </>
  );
}
