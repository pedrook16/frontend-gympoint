import React from 'react';

import { Container } from './styles';

export default function ModalHelp() {
  return (
    <Container>
      <div>
        <strong>PERGUNTA DO ALUNO</strong>
        <span>
          Olá pessoal da academia, gostaria de saber se quando acordar devo
          ingerir batata doce e frango logo de primeira, preparar as marmitas e
          lotar a geladeira? Dou um pico de insulina e jogo o hipercalórico?
        </span>
      </div>
      <form>
        <label>SUA RESPOSTA</label>
        <textarea name="" id="" cols="30" rows="10" />
        <button type="submit">Responder aluno</button>
      </form>
    </Container>
  );
}
