import React, { useState, useEffect, useMemo } from 'react';
import { addMonths, format, parseISO } from 'date-fns';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';
import Select from 'react-select';
import { Form, Input } from '@rocketseat/unform';
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
      const options = response.data.map(student => ({
        value: student.id,
        label: student.name,
      }));
      setStudents(options);
    }
    loadStudents();
  }, []);

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('plans');
      const options = response.data.map(plan => ({
        value: plan.id,
        label: plan.title,
      }));
      setPlans(options);
    }
    loadPlans();
  }, []);

  // useEffect(() => {
  //   async function loadPlansId() {
  //     const response = await api.get('plans');
  //     console.tron.log(response.data);
  //     setPlans();
  //   }
  //   loadPlansId();
  // }, []);

  // Memos
  const endDate = useMemo(() => {
    if (!startDate || !selectedPlan) return '';
    return format(addMonths(startDate, selectedPlan.duration), 'dd/MM/yyyy');
  }, [selectedPlan, startDate]);

  const finalValue = useMemo(() => {
    if (!selectedPlan) return '';
    return formatPrice(selectedPlan.duration * selectedPlan.price);
  }, [selectedPlan]);

  function handleSubmit(data) {
    const newData = {
      ...data,
      // 2019-10-22T12:00:00-03:00
      start_date: format(data.start_date, "yyyy-MM-dd'T'00:00:00XXX"),
    };
    console.tron.log(newData);
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
                options={students}
                classNamePrefix="react-select"
                onChange={value => setSelectedStudent(value)}
                value={selectedPlan}
                name="student_id"
              />

              <section>
                <article>
                  <label>PLANO</label>
                  <Select
                    options={plans}
                    classNamePrefix="react-select"
                    onChange={value => setSelectedPlan(value)}
                    value={selectedStudent}
                    name="plan_id"
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
                  <Input
                    value={endDate}
                    className="desabled"
                    type="text"
                    disabled
                    name="end_date"
                  />
                </article>
                <article>
                  <label>VALOR FINAL</label>
                  <Input
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
