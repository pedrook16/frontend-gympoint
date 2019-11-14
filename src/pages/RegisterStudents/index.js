import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import InputMask from 'react-input-mask';
import * as Yup from 'yup';

import Box from '~/components/Box';
import ButtonSave from '~/components/ButtonSave';
import ReturnButton from '~/components/ReturnButton';

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

export default function RegisterStudents() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <div>
        <h1>Cadastro de aluno</h1>
        <div>
          <Link to="/dashboard">
            <ReturnButton />
          </Link>
          <ButtonSave formSubmit="student-form" />
        </div>
      </div>
      <Box
        render={
          <Content>
            <Form id="student-form" schema={schema} onSubmit={handleSubmit}>
              <label>NOME COMPLETO</label>
              <Input name="name" type="text" placeholder="Fulano dos Santos" />
              <label>ENDEREÇO DE E-MAIL</label>
              <Input name="email" type="text" placeholder="email@gmail.com" />

              <div>
                <div>
                  <label>IDADE</label>
                  <Input name="age" type="text" />
                </div>
                <div>
                  <label>PESO (em kg)</label>
                  <InputMask mask="" name="weight" type="text" />
                </div>
                <div>
                  <label>ALTURA</label>
                  <InputMask mask="" name="height" type="text" />
                </div>
              </div>
            </Form>
          </Content>
        }
      />
    </>
  );
}
