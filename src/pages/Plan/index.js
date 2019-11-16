import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete } from 'react-icons/md';

import api from '~/services/api';
import { formatPrice } from '~/util/format';

import Box from '~/components/Box';
import Button from '~/components/Button';

import { Table } from './styles';

export default function Plan() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('plans');

      const data = response.data.map(plan => ({
        ...plan,
        priceFormatted: formatPrice(plan.price),
      }));
      setPlans(data);
    }
    loadPlans();
  }, []);
  return (
    <>
      <header>
        <h1>Gerenciando planos</h1>
        <div>
          <Link to="/addplan">
            <Button />
          </Link>
        </div>
      </header>
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
              {plans.map(plan => (
                <tr key={plan.id}>
                  <td>{plan.title}</td>
                  <td>{plan.duration} mês</td>
                  <td>{plan.priceFormatted}</td>
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
