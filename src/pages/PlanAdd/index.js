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
        <h1>Cadastro de plano</h1>
        <div>
          <Link to="/plan">
            <ReturnButton />
          </Link>
          <ButtonSave />
        </div>
      </div>
      <Box
        render={
          <Content>
            <form>
              <label>TÍTULO DO PLANO</label>
              <input type="text" />

              <div>
                <div>
                  <label>DURAÇÃO (em meses)</label>
                  <input type="text" />
                </div>
                <div>
                  <label>PREÇO MENSAL</label>
                  <input type="text" />
                </div>
                <div>
                  <label>PREÇO TOTAL</label>
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
