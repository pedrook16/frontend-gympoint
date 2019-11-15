import React from 'react';
import { MdChevronLeft } from 'react-icons/md';

import { Container } from './styles';

export default function ReturnButton({ returnNavigate }) {
  return (
    <Container onClick={returnNavigate}>
      <MdChevronLeft size={20} color="#fff" />
      VOLTAR
    </Container>
  );
}
