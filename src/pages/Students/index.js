import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Button from '../../components/Button';
import Table from '../../components/Table';

import { Container } from './styles';

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('/students');
      console.tron.log(response);
    }

    loadStudents();
  }, []);

  function handleAddStudent(id) {
    console.log('adicionar');
  }

  function handleEditStudent(id) {
    console.log('editar', id);
  }

  function handleDeleteStudent(id) {
    console.log('deletar', id);
  }

  return (
    <Container>
      <header>
        <h1>Gerenciando alunos</h1>

        <div>
          <Button
            label="CADASTRAR"
            type="button"
            onClick={handleAddStudent}
            width="160px"
          />
          <input type="text" placeholder="Buscar aluno" />
        </div>
      </header>

      <Table
        model={[
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
        ]}
        data={[
          {
            id: 1,
            name: 'Vinicius Faustino',
            email: 'v@gympoint.com',
            age: '23',
            actions: [
              {
                label: 'editar',
                color: '#4D85EE',
                onClick: handleEditStudent,
              },
              {
                label: 'apagar',
                color: '#DE3B3B',
                onClick: handleDeleteStudent,
              },
            ],
          },
          {
            id: 2,
            name: 'Joriane Cristina',
            email: 'j@gympoint.com',
            age: '24',
            actions: [
              {
                label: 'editar',
                color: '#4D85EE',
                onClick: handleEditStudent,
              },
              {
                label: 'apagar',
                color: '#DE3B3B',
                onClick: handleDeleteStudent,
              },
            ],
          },
        ]}
      />
    </Container>
  );
}
