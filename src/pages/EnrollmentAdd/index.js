import React, { useState, useEffect, useMemo } from 'react';
import { addMonths, format } from 'date-fns';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import { Form } from '@rocketseat/unform';
import { formatPrice } from '~/util/format';
import api from '~/services/api';
import history from '~/services/history';

import Box from '~/components/Box';
import ButtonSave from '~/components/ButtonSave';
import ReturnButton from '~/components/ReturnButton';

import { Content } from './styles';

export default function RegisterStudents() {
  const [plans, setPlans] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [startDate, setStartDate] = useState(null);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students');
      setStudents(response.data);
    }
    loadStudents();
  }, []);

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('plans');
      setPlans(response.data);
    }
    loadPlans();
  }, []);

  const endDate = useMemo(() => {
    if (!startDate || !selectedPlan) return '';
    return format(addMonths(startDate, selectedPlan.duration), 'dd/MM/yyyy');
  }, [selectedPlan, startDate]);

  const finalValue = useMemo(() => {
    if (!selectedPlan) return '';
    return formatPrice(selectedPlan.duration * selectedPlan.price);
  }, [selectedPlan]);

  function handleSubmit() {
    // const newData = {
    //   ...data,
    //   // 2019-10-22T12:00:00-03:00
    //   // start_date: format(data.start_date, "yyyy-MM-dd'T'00:00:00XXX"),
    // };
    console.tron.log({
      plan_id: selectedPlan.id,
      student_id: selectedStudent.id,
      start_date: format(startDate, "yyyy-MM-dd'T'00:00:00XXX"),
    });
  }
  return (
    <>
      <header>
        <h1>Cadastro de matrícula</h1>
        <div>
          <ReturnButton returnNavigate={() => history.push('/enrollment')} />

          <ButtonSave formSubmit="enrollment-submit" />
        </div>
      </header>
      <Box
        render={
          <Content>
            <Form id="enrollment-submit" onSubmit={handleSubmit}>
              <label>ALUNO</label>
              <Select
                name="student_id"
                placeholder="Buscar aluno"
                options={students}
                getOptionLabel={item => item.name}
                classNamePrefix="react-select"
                onChange={value => setSelectedStudent(value)}
                value={selectedStudent}
              />

              <section>
                <article>
                  <label>PLANO</label>
                  <Select
                    name="plan_id"
                    options={plans}
                    classNamePrefix="react-select"
                    onChange={value => setSelectedPlan(value)}
                    value={selectedPlan}
                    placeholder="Selecione o plano"
                    getOptionLabel={item => item.title}
                  />
                </article>
                <article>
                  <label>DATA DE INÍCIO</label>
                  <DatePicker
                    selected={startDate}
                    dateFormat="dd/MM/yyyy"
                    onChange={value => setStartDate(value)}
                    name="start_date"
                  />
                </article>
                <article>
                  <label>DATA DE TÉRMINO</label>
                  <input
                    value={endDate}
                    className="desabled"
                    type="text"
                    disabled
                    name="end_date"
                  />
                </article>
                <article>
                  <label>VALOR FINAL</label>
                  <input
                    value={finalValue}
                    className="desabled"
                    type="text"
                    disabled
                    name="data_termino"
                  />
                </article>
              </section>
            </Form>
          </Content>
        }
      />
    </>
  );
}
