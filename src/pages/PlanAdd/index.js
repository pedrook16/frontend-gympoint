import React, { useState, useMemo } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import api from '~/services/api';
import history from '~/services/history';
import { formatPrice } from '~/util/format';

import Box from '~/components/Box';
import ButtonSave from '~/components/ButtonSave';
import ReturnButton from '~/components/ReturnButton';

import { Content } from './styles';

export default function RegisterStudents() {
  const [durationCalc, setDuration] = useState(null);
  const [priceCalc, setPrice] = useState(null);

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

  async function handleSubmit({ title, duration, price }, { resetForm }) {
    try {
      await api.post('plans', {
        title,
        duration,
        price,
      });
      toast.success('Enviado com sucesso!');
      resetForm();
    } catch (err) {
      toast.error('Erro no envio.');
    }
  }

  return (
    <>
      <div>
        <h1>Cadastro de plano</h1>
        <div>
          <ReturnButton returnNavigate={() => history.push('/plan')} />

          <ButtonSave formSubmit="plan-submit" />
        </div>
      </div>
      <Box
        render={
          <Content>
            <Form id="plan-submit" schema={schema} onSubmit={handleSubmit}>
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
