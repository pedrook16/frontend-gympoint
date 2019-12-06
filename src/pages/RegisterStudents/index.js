import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import history from '~/services/history';

import Box from '~/components/Box';
import ButtonSave from '~/components/ButtonSave';
import ReturnButton from '~/components/ReturnButton';

import {
  addStudentsRequest,
  updateStudentsRequest,
} from '~/store/modules/student/actions';

import { Content } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email()
    .required('Insira um e-mail válido'),
  age: Yup.number()
    .max(100)
    .required('Insira a idade'),
  weight: Yup.number()
    .max(200)
    .required('Insira o peso'),
  height: Yup.number().required('Insira a altura'),
});

export default function RegisterStudents({ match }) {
  const dispach = useDispatch();
  const student = useSelector(state => state.student.student);

  const { id } = match.params;

  function handleSubmit(data) {
    if (!id) {
      dispach(addStudentsRequest(data));
    } else {
      dispach(updateStudentsRequest(data, id));
    }
  }
  return (
    <>
      <header>
        <h1>Cadastro de aluno</h1>
        <div>
          <ReturnButton returnNavigate={() => history.push('/student')} />

          <ButtonSave formSubmit="student-form" />
        </div>
      </header>
      <Box>
        <Content>
          <Form
            id="student-form"
            schema={schema}
            onSubmit={handleSubmit}
            initialData={id ? student : ''}
          >
            <label>NOME COMPLETO</label>
            <Input name="name" type="text" placeholder="Fulano dos Santos" />
            <label>ENDEREÇO DE E-MAIL</label>
            <Input name="email" type="text" placeholder="email@gmail.com" />

            <div>
              <div>
                <label>IDADE</label>
                <Input name="age" type="type" />
              </div>
              <div>
                <label>PESO (em kg)</label>
                <Input name="weight" type="type" />
              </div>
              <div>
                <label>ALTURA</label>
                <Input name="height" type="type" />
              </div>
            </div>
          </Form>
        </Content>
      </Box>
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
