import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete, MdSearch } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import Button from '~/components/Button';
import Box from '~/components/Box';

import { deleteStudentsRequest } from '~/store/modules/student/actions';

import { Table, Search } from './styles';

export default function Stutents() {
  const [students, setStudents] = useState([]);
  const [studentValue, setStudentValue] = useState('');
  const dispach = useDispatch();

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students', {
        params: { q: studentValue },
      });
      setStudents(response.data);
    }
    loadStudents();
  }, [studentValue]);

  function handleRedirectEdit(id) {
    history.push(`/student/edit/${id}`);
  }

  function handleDel(id, name) {
    if (window.confirm(`Deseja realmente deletar o aluno(a) ${name}?`)) {
      dispach(deleteStudentsRequest(id, name));
    }
  }

  return (
    <>
      <header>
        <h1>Gerenciando alunos</h1>
        <div>
          <Link to="/student/create">
            <Button />
          </Link>
          <Search>
            <MdSearch size={20} color="#999" />
            <input
              onChange={e => setStudentValue(e.target.value)}
              value={studentValue}
              type="text"
              placeholder="Buscar aluno"
            />
          </Search>
        </div>
      </header>
      <Box
        render={
          <Table>
            <thead>
              <tr>
                <th>NOME</th>
                <th>E-MAIL</th>
                <th>IDADE</th>
                <th>AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.age}</td>
                  <td>
                    <MdEdit
                      size={20}
                      color="#4d85ee"
                      onClick={() => handleRedirectEdit(student.id)}
                    />
                    <MdDelete
                      size={20}
                      color="#de3b3b"
                      onClick={() => handleDel(student.id, student.name)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        }
      />
    </>
  );
}
