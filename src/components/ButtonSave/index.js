import React from 'react';
import PropTypes from 'prop-types';
import { MdCheck } from 'react-icons/md';

import { Container } from './styles';

export default function ButtonSave({ formSubmit }) {
  return (
    <Container form={formSubmit}>
      <MdCheck size={20} color="#fff" />
      SALVAR
    </Container>
  );
}

ButtonSave.propTypes = {
  formSubmit: PropTypes.string.isRequired,
};
