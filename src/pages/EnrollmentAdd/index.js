import React from 'react';

import Box from '~/components/Box';
import ButtonSave from '~/components/ButtonSave';
import ReturnButton from '~/components/ReturnButton';

import { Content } from './styles';

export default function RegisterStudents() {
  return (
    <>
      <div>
        <h1>Cadastro de matrícula</h1>
        <div>
          <ReturnButton />
          <ButtonSave />
        </div>
      </div>
      <Box
        render={
          <Content>
            <form>
              <label>ALUNO</label>
              <input type="text" />

              <div>
                <div>
                  <label>PLANO</label>
                  <input type="text" />
                </div>
                <div>
                  <label>DATA DE INÍCIO</label>
                  <input type="text" />
                </div>
                <div>
                  <label>DATA DE TÉRMINO</label>
                  <input type="text" disabled />
                </div>
                <div>
                  <label>VALOR FINAL</label>
                  <input type="text" disabled />
                </div>
              </div>
            </form>
          </Content>
        }
      />
    </>
  );
}
