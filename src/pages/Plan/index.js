import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';

import Box from '~/components/Box';
import Button from '~/components/Button';

import { Table } from './styles';

export default function Plan() {
  return (
    <>
      <div>
        <h1>Gerenciando planos</h1>
        <div>
          <Button />
        </div>
      </div>
      <Box
        render={
          <Table>
            <thead>
              <tr>
                <th>TÍTULO</th>
                <th>DURAÇÃO</th>
                <th>VALOR p/ MÊS</th>
                <th>AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Start</td>
                <td>1 mês</td>
                <td>R$129,00</td>
                <td>
                  <MdEdit size={20} color="#4d85ee" />
                  <MdDelete size={20} color="#de3b3b" />
                </td>
              </tr>
              <tr>
                <td>Gold</td>
                <td>3 meses</td>
                <td>R$109,00</td>
                <td>
                  <MdEdit size={20} color="#4d85ee" />
                  <MdDelete size={20} color="#de3b3b" />
                </td>
              </tr>
              <tr>
                <td>Diamond</td>
                <td>6 meses</td>
                <td>R$89,00</td>
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
