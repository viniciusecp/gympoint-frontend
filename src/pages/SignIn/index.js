import React, { useState } from 'react';
import * as Yup from 'yup';

import Field from '../../components/Field';
import SubmitButton from '../../components/SubmitButton';

import logo from '../../assets/logo.svg';

// const schema = Yup.object().shape({
//   email: Yup.string()
//     .email('Insira um e-mail válido')
//     .required('O e-mail é obrigatório'),
//   password: Yup.string().required('A senha é obrigatória'),
// });

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    console.tron.log(email, password);
  }

  return (
    <>
      <img src={logo} alt="GymPoint" />

      <form onSubmit={handleSubmit}>
        <Field
          name="email"
          label="SEU E-MAIL"
          id="email"
          type="email"
          placeholder="exemplo@email.com"
          value={email}
          setValue={setEmail}
        />
        <Field
          label="SUA SENHA"
          id="password"
          type="password"
          placeholder="********"
          value={password}
          setValue={setPassword}
        />
        <SubmitButton label="Entrar no sistema" justifyContent="center" />
      </form>
    </>
  );
}
