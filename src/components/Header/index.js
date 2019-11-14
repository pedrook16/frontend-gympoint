import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '~/assets/images/logo.png';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Logout } from './styles';

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

          <Link to="/dashboard">ALUNOS</Link>
          <Link to="/plan">PLANOS</Link>
          <Link to="/enrollment">MATRÍCULAS</Link>
          <Link to="/help">PEDIDOS DE AUXÍLIO</Link>
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
