import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete } from 'react-icons/md';

import api from '~/services/api';
import { formatPrice } from '~/util/format';

import {
  deletePlanRequest,
  getByPlanRequest,
} from '~/store/modules/Plan/actions';

import Box from '~/components/Box';
import Button from '~/components/Button';

import { Table } from './styles';

export default function Plan() {
  const [plans, setPlans] = useState([]);
  const dispach = useDispatch();

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

  function handleEditPlan(id) {
    dispach(getByPlanRequest(id));
  }

  function handleDeletePlan(id, title) {
    if (window.confirm(`Deseja realmente deletar o plano ${title}?`)) {
      dispach(deletePlanRequest(id, title));
    }
  }

  return (
    <>
      <header>
        <h1>Gerenciando planos</h1>
        <div>
          <Link to="/plan/create">
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
                    <MdEdit
                      size={20}
                      color="#4d85ee"
                      onClick={() => handleEditPlan(plan.id)}
                    />
                    <MdDelete
                      size={20}
                      color="#de3b3b"
                      onClick={() => handleDeletePlan(plan.id, plan.title)}
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
