import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logo from '~/assets/logo-red.svg';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Logout, Navigate } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.auth.user);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="logo" />

          <Navigate to="/student">ALUNOS</Navigate>
          <Navigate to="/plan">PLANOS</Navigate>
          <Navigate to="/enrollment">MATRÍCULAS</Navigate>
          <Navigate to="/help">PEDIDOS DE AUXÍLIO</Navigate>
        </nav>
        <aside>
          <Logout>
            <span>{userName.name}</span>
            <button type="button" onClick={handleSignOut}>
              sair do sistema
            </button>
          </Logout>
        </aside>
      </Content>
    </Container>
  );
}
