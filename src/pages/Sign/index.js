import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import { Container, Box, Logo } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function Sign() {
  const dispach = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispach(signInRequest(email, password));
  }
  return (
    <Container>
      <Box>
        <Logo />
        <Form schema={schema} onSubmit={handleSubmit}>
          <label>SEU E-MAIL</label>
          <Input type="email" name="email" placeholder="exemplo@email.com" />

          <label>SUA SENHA</label>
          <Input type="password" name="password" placeholder="*********" />

          <button type="submit">
            {loading ? 'Carregando...' : 'Entrar no sistema'}
          </button>
        </Form>
      </Box>
    </Container>
  );
}
