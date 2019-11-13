import React from 'react';
import { MdCheck } from 'react-icons/md';

import { Container } from './styles';

export default function ButtonSave() {
  return (
    <Container>
      <MdCheck size={20} color="#fff" />
      SALVAR
    </Container>
  );
}
