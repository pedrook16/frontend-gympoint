import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete, MdCheckCircle } from 'react-icons/md';

import api from '~/services/api';

import Box from '~/components/Box';
import Button from '~/components/Button';

import { Table } from './styles';

export default function Plan() {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    async function loadEnrollments() {
      const response = await api.get('enrollment');
      // const data = response.data.map(enrollment => ({
      //   ...enrollment,
      //   // dateStartFormatted: format(
      //   //   enrollment.start_date,
      //   //   "d 'de' MMMM",
      //   //   { locale: pt }
      //   // ),
      //   // dateEndFormatted: format(enrollment.end_date, "d 'de' MMMM", {
      //   //   locale: pt,
      //   // }),
      // }));
      setEnrollments(response.data);
    }
    loadEnrollments();
  }, []);
  return (
    <>
      <div>
        <h1>Gerenciando matrículas</h1>
        <div>
          <Link to="/addenrollment">
            <Button />
          </Link>
        </div>
      </div>
      <Box
        render={
          <Table>
            <thead>
              <tr>
                <th>ALUNO</th>
                <th>PLANO</th>
                <th>INÍCIO</th>
                <th>TÉRMINO</th>
                <th>ATIVA</th>
                <th>AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {enrollments.map(enrollment => (
                <tr key={enrollment.id}>
                  <td>{enrollment.student.name}</td>
                  <td>{enrollment.plan.title}</td>
                  <td>{enrollment.start_date}</td>
                  <td>{enrollment.end_date}</td>
                  <td>
                    <MdCheckCircle
                      size={20}
                      color={enrollment.active === true ? '#42cb59' : '#999'}
                    />
                  </td>
                  <td>
                    <MdEdit size={20} color="#4d85ee" />
                    <MdDelete size={20} color="#de3b3b" />
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
