import React from 'react';
import { MdAdd } from 'react-icons/md';

import { Container } from './styles';

export default function Button() {
  return (
    <Container>
      <MdAdd size={25} color="#fff" />
      CADASTRAR
    </Container>
  );
}
