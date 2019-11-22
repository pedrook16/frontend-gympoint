import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addMonths, format, parseISO } from 'date-fns';
import DatePicker from 'react-datepicker';
import { Form } from '@rocketseat/unform';

import { formatPrice } from '~/util/format';

import api from '~/services/api';
import history from '~/services/history';

import Box from '~/components/Box';
import ButtonSave from '~/components/ButtonSave';
import ReturnButton from '~/components/ReturnButton';
import InputSelect from '~/components/InputSelect';

import {
  addEnrollmentRequest,
  updateEnrollmentRequest,
} from '~/store/modules/Enrollment/actions';

import { Content } from './styles';

export default function EnrollmentAdd({ match }) {
  const [plans, setPlans] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const dispach = useDispatch();
  const enrollment = useSelector(state => state.enrollment.enrollment);

  const { id } = match.params;

  function planPriceAndDuration() {
    setSelectedStudent(enrollment.student);
    setSelectedPlan(enrollment.plan);
    setStartDate(parseISO(enrollment.start_date));
  }

  useEffect(() => {
    if (id) {
      planPriceAndDuration();
    }
  }, [id, plans, students]); //eslint-disable-line

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

  function handleSubmit({ studentId, planId }) {
    const newData = {
      studentId,
      planId,
      start_date: format(startDate, "yyyy-MM-dd'T'00:00:00XXX"),
      id,
    };
    if (!id) {
      dispach(addEnrollmentRequest(newData));
      setSelectedStudent(null);
      setSelectedPlan(null);
      setStartDate(null);
    } else {
      dispach(updateEnrollmentRequest(newData));
    }
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
            <Form
              id="enrollment-submit"
              onSubmit={handleSubmit}
              initialData={enrollment}
            >
              <label>ALUNO</label>
              <InputSelect
                name="studentId"
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
                  <InputSelect
                    name="planId"
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
                    placeholderText="Selecione data da matrícula"
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

EnrollmentAdd.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

EnrollmentAdd.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: null,
    }),
  }),
};
