import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import history from '~/services/history';
import { formatPrice } from '~/util/format';

import Box from '~/components/Box';
import ButtonSave from '~/components/ButtonSave';
import ReturnButton from '~/components/ReturnButton';

import {
  addPlanRequest,
  updatePlanRequest,
} from '~/store/modules/Plan/actions';

import { Content } from './styles';

export default function RegisterStudents({ match }) {
  const [durationCalc, setDuration] = useState(null);
  const [priceCalc, setPrice] = useState(null);
  const dispach = useDispatch();
  const plan = useSelector(state => state.plan.plan);

  const { id } = match.params;

  function planPriceAndDuration() {
    setDuration(plan.duration);
    setPrice(plan.price);
  }

  useEffect(() => {
    if (id) {
      planPriceAndDuration();
    }
  }, [id]); //eslint-disable-line

  const total = useMemo(() => durationCalc * priceCalc, [
    durationCalc,
    priceCalc,
  ]);
  const totalFormatted = formatPrice(total);

  const schema = Yup.object().shape({
    title: Yup.string('Título inválido').required('Campo obrigatório'),
    duration: Yup.number()
      .min(1)
      .max(12)
      .required('Campo obrigatório')
      .typeError('Duração inválida'),
    price: Yup.number()
      .min(1, 'Preço mínimo inválido')
      .required('Campo obrigatório')
      .typeError('Preço inválido'),
  });

  async function handleSubmit(data, { resetForm }) {
    if (!id) {
      dispach(addPlanRequest(data));
    } else {
      dispach(updatePlanRequest(data, id));
    }
    resetForm();
  }

  return (
    <>
      <header>
        <h1>Cadastro de plano</h1>
        <div>
          <ReturnButton returnNavigate={() => history.push('/plan')} />

          <ButtonSave formSubmit="plan-submit" />
        </div>
      </header>
      <Box
        render={
          <Content>
            <Form
              id="plan-submit"
              schema={schema}
              onSubmit={handleSubmit}
              initialData={id ? plan : ''}
            >
              <label>TÍTULO DO PLANO</label>
              <Input name="title" type="text" placeholder="Gold" />

              <div>
                <div>
                  <label>DURAÇÃO (em meses)</label>
                  <Input
                    name="duration"
                    type="text"
                    placeholder="12"
                    onChange={e => setDuration(e.target.value)}
                  />
                </div>
                <div>
                  <label>PREÇO MENSAL ( somente números )</label>
                  <Input
                    name="price"
                    type="text"
                    placeholder="99.90"
                    onChange={e => setPrice(e.target.value)}
                  />
                </div>
                <div>
                  <label>PREÇO TOTAL</label>
                  <Input
                    name="total"
                    className="desabled"
                    type="text"
                    disabled
                    value={totalFormatted}
                  />
                </div>
              </div>
            </Form>
          </Content>
        }
      />
    </>
  );
}

RegisterStudents.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

RegisterStudents.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: null,
    }),
  }),
};
