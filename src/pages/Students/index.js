import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';

import Button from '~/components/Button';
import Box from '~/components/Box';
import InputStudents from '~/components/InputAddStudents';

import { Table } from './styles';

export default function Stutents() {
  return (
    <>
      <div>
        <h1>Gerenciando alunos</h1>
        <div>
          <Button />
          <InputStudents />
        </div>
      </div>
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
              <tr>
                <td>Pedro Henrique </td>
                <td>pedro@gmail.com</td>
                <td>23</td>
                <td>
                  <MdEdit size={20} color="#4d85ee" />
                  <MdDelete size={20} color="#de3b3b" />
                </td>
              </tr>
              <tr>
                <td>Pedro</td>
                <td>pedro@gmail.com</td>
                <td>23</td>
                <td>
                  <MdEdit size={20} color="#4d85ee" />
                  <MdDelete size={20} color="#de3b3b" />
                </td>
              </tr>
              <tr>
                <td>Pedro</td>
                <td>pedro@gmail.com</td>
                <td>23</td>
                <td>
                  <MdEdit size={20} color="#4d85ee" />
                  <MdDelete size={20} color="#de3b3b" />
                </td>
              </tr>
              <tr>
                <td>Pedro</td>
                <td>pedro@gmail.com</td>
                <td>23</td>
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
