import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logo from '~/assets/images/logo.png';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Logout, Navigate } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.user.user);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="logo" />

          <Navigate to="/dashboard">ALUNOS</Navigate>
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
