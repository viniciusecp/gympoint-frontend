import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions';
import history from '../../services/history';

import { Container, Menu, UserFunctions, MenuItem } from './styles';

import menu from '../../assets/menu.svg';

const pages = [
  { path: 'students', label: 'ALUNOS' },
  { path: 'plans', label: 'PLANOS' },
  { path: 'enrollments', label: 'MATRÍCULAS' },
  { path: 'help-orders', label: 'PEDIDOS DE AUXÍLIO' },
];

export default function Header() {
  const [active, setActive] = useState('students');

  const profile = useSelector(state => state.user.profile);

  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  function handleChangePage(path) {
    setActive(path);
    history.push(`/${path}`);
  }

  return (
    <Container>
      <Menu>
        <img src={menu} alt="GymPoint" />

        <nav>
          {pages.map(page => (
            <MenuItem
              key={page.path}
              active={page.path === active}
              onClick={() => handleChangePage(page.path)}
              type="button"
            >
              {page.label}
            </MenuItem>
          ))}
        </nav>
      </Menu>

      <UserFunctions>
        <strong>{profile.name}</strong>
        <button onClick={handleSignOut} type="button">
          sair do sistema
        </button>
      </UserFunctions>
    </Container>
  );
}
