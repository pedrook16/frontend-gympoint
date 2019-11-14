import React from 'react';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete, MdCheckCircle } from 'react-icons/md';

import Box from '~/components/Box';
import Button from '~/components/Button';

import { Table } from './styles';

export default function Plan() {
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
              <tr>
                <td>Lennert Nijenbijvank</td>
                <td>Start</td>
                <td>30 de Abril de 2019</td>
                <td>30 de Maio de 2019</td>
                <td>
                  <MdCheckCircle size={20} color="#42cb59" />
                </td>
                <td>
                  <MdEdit size={20} color="#4d85ee" />
                  <MdDelete size={20} color="#de3b3b" />
                </td>
              </tr>
              <tr>
                <td>Lennert Nijenbijvank</td>
                <td>Start</td>
                <td>30 de Abril de 2019</td>
                <td>30 de Maio de 2019</td>
                <td>
                  <MdCheckCircle size={20} color="#42cb59" />
                </td>
                <td>
                  <MdEdit size={20} color="#4d85ee" />
                  <MdDelete size={20} color="#de3b3b" />
                </td>
              </tr>
              <tr>
                <td>Lennert Nijenbijvank</td>
                <td>Start</td>
                <td>30 de Abril de 2019</td>
                <td>30 de Maio de 2019</td>
                <td>
                  <MdCheckCircle size={20} color="#42cb59" />
                </td>
                <td>
                  <MdEdit size={20} color="#4d85ee" />
                  <MdDelete size={20} color="#de3b3b" />
                </td>
              </tr>
            </tbody>
          </Table>
        }
      />
    </>
  );
}
