import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2';

import history from '../../services/history';
import api from '../../services/api';
import showError from '../../errors';

import Button from '../../components/Button';
import Table from '../../components/Table';

import { Container } from './styles';

const headers = [
  {
    key: 'name',
    label: 'NOME',
  },
  {
    key: 'email',
    label: 'E-MAIL',
  },
  {
    key: 'age',
    label: 'IDADE',
  },
  {
    key: 'actions',
    label: 'AÇÕES',
  },
];

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('/students');

      setStudents(response.data);
    }

    loadStudents();
  }, []);

  function handleAdd() {
    history.push('/students/add');
  }

  function handleEdit(id) {
    history.push(`/students/${id}/modify`);
  }

  async function handleDelete(id) {
    console.log('deletar', id);

    const result = await Swal.fire({
      title: 'Você tem certeza?',
      text: 'Você não poderá reverter isso!',
      icon: 'warning',
      showCloseButton: true,
      reverseButtons: true,
      showCancelButton: true,
      cancelButtonColor: '#ee4d64',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Sim, deletar!',
    });

    if (!result.value) return;

    try {
      await api.delete(`/students/${id}`);

      setStudents(students.filter(student => student.id !== id));

      Swal.fire('Apagado!', 'Estudante deletado.', 'success');
    } catch (err) {
      showError(err.response.status, err.response.data.error);
    }
  }

  const actions = [
    {
      label: 'editar',
      color: '#4D85EE',
      onClick: handleEdit,
    },
    {
      label: 'apagar',
      color: '#DE3B3B',
      onClick: handleDelete,
    },
  ];

  return (
    <Container>
      <header>
        <h1>Gerenciando alunos</h1>

        <div>
          <Button
            label="CADASTRAR"
            type="button"
            onClick={handleAdd}
            width="160px"
          />
          <input type="text" placeholder="Buscar aluno" />
        </div>
      </header>

      <Table
        model={headers}
        data={students.map(student => ({
          id: student.id,
          name: student.name,
          email: student.email,
          age: student.age,
          actions,
        }))}
      />
    </Container>
  );
}
