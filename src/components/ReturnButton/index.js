import React from 'react';
import { MdChevronLeft } from 'react-icons/md';

import { Container } from './styles';

export default function ReturnButton() {
  return (
    <Container>
      <MdChevronLeft size={20} color="#fff" />
      VOLTAR
    </Container>
  );
}
