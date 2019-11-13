import React from 'react';
import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

export default function InputAddStudents() {
  return (
    <Container>
      <MdSearch size={20} color="#999" />
      <input type="text" placeholder="Buscar aluno" />
    </Container>
  );
}
