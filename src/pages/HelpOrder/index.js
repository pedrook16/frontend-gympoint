import React, { useState } from 'react';
import Modal from 'react-awesome-modal';

import Box from '~/components/Box';
import ModalHelp from '~/components/ModalHelp';

import { Table } from './styles';

export default function Plan() {
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
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
              <tr>
                <td>Lennert Nijenbijvank</td>
                <td>
                  <button type="button" onClick={openModal}>
                    responder
                  </button>
                </td>
              </tr>
              <tr>
                <td>Lennert Nijenbijvank</td>
                <td>
                  <button type="button" onClick={openModal}>
                    responder
                  </button>
                </td>
              </tr>
              <tr>
                <td>Lennert Nijenbijvank</td>
                <td>
                  <button type="button" onClick={openModal}>
                    responder
                  </button>
                </td>
              </tr>
            </tbody>
          </Table>
        }
      />
      <Modal
        visible={open}
        width="450"
        height="425"
        effect="fadeInUp"
        onClickAway={closeModal}
      >
        <ModalHelp />
      </Modal>
    </>
  );
}
