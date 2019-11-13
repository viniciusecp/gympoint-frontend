import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2';

import history from '../../../services/history';
import api from '../../../services/api';

import Button from '../../../components/Button';
import Field from '../../../components/Field';

import { Container, Form } from './styles';

export default function AddModify({ match }) {
  const { id } = match.params;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadStudent(userId) {
      // const response = await api.

      setName('Vinicius');
    }

    if (id) loadStudent(id);
  }, [id]);

  function handleCancel() {
    history.push('/students');
  }

  async function handleAdd() {
    setLoading(true);

    try {
      await api.post('/students', {
        name,
        email,
        age,
        weight,
        height,
      });

      await Swal.fire('Cadastrado!', 'Estudante cadastrado.', 'success');

      history.push('/students');
    } catch (err) {
      console.tron.log(err.data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <header>
        <h1>Cadastro de aluno</h1>

        <div>
          <Button
            label="VOLTAR"
            type="button"
            onClick={handleCancel}
            width="160px"
            background="#ddd"
          />
          <Button
            label="SALVAR"
            type="button"
            onClick={handleAdd}
            width="160px"
            loading={loading ? 1 : 0}
          />
        </div>
      </header>

      <Form>
        <Field
          name="name"
          label="NOME COMPLETO"
          id="name"
          type="text"
          placeholder="Seu nome aqui"
          value={name}
          setValue={setName}
        />
        <Field
          name="email"
          label="ENDEREÇO DE E-MAIL"
          id="email"
          type="email"
          placeholder="exemplo@email.com"
          value={email}
          setValue={setEmail}
        />
        <div>
          <Field
            name="age"
            label="IDADE"
            id="age"
            type="number"
            value={age}
            setValue={setAge}
          />
          <Field
            name="weight"
            label="PESO (em kg)"
            id="weight"
            type="number"
            value={weight}
            setValue={setWeight}
          />
          <Field
            name="height"
            label="ALTURA"
            id="height"
            type="number"
            step="0.01"
            value={height}
            setValue={setHeight}
          />
        </div>
      </Form>
    </Container>
  );
}
