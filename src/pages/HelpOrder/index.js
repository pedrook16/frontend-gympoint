import React, { useState, useEffect, useCallback } from 'react';
import { Form, Textarea } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import api from '~/services/api';

import Box from '~/components/Box';
import ModalHelp from '~/components/ModalHelp';

import { Table, Container } from './styles';

export default function Plan() {
  const [helps, setHelps] = useState([]);
  const [respondItem, setRespondItem] = useState({});

  useEffect(() => {
    async function loadHelp() {
      const response = await api.get('help-orders');
      setHelps(response.data);
    }
    loadHelp();
  }, [respondItem]);

  const onClose = useCallback(() => {
    setRespondItem({});
  }, []);

  async function handleSubmit({ answer }) {
    const { id } = respondItem;
    const { name } = respondItem.student;

    try {
      await api.post(`/help-orders/${id}/answer`, {
        answer,
      });
      toast.success(`Aluno ${name} respondido com sucesso.`);
    } catch (err) {
      toast.error(`Erro ao responder ${name}.`);
    }
    setRespondItem({});
  }
  return (
    <>
      <div>
        <h1>Pedidos de auxílio</h1>
      </div>
      <Box
        render={
          <Table>
            <thead>
              <tr>
                <th>ALUNO</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {helps.map(help => (
                <tr>
                  <td>{help.student.name}</td>
                  <td>
                    <button type="button" onClick={() => setRespondItem(help)}>
                      responder
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        }
      />

      <ModalHelp
        visible={!!respondItem.id}
        width="450"
        height="425"
        effect="fadeInUp"
        onClickAway={onClose}
      >
        <Container>
          <div>
            <strong>PERGUNTA DO ALUNO</strong>
            <span>{respondItem.question}</span>
          </div>
          <Form onSubmit={handleSubmit}>
            <label>SUA RESPOSTA</label>
            <Textarea name="answer" cols="30" rows="10" />
            <button type="submit">Responder aluno</button>
          </Form>
        </Container>
      </ModalHelp>
    </>
  );
}
