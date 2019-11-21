import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

export function* addEnrollment({ payload }) {
  try {
    const { planId, studentId, start_date } = payload;

    yield call(api.post, 'enrollment', {
      student_id: studentId.id,
      plan_id: planId.id,
      start_date,
    });

    toast.success('Matriculado com sucesso');
    history.push('/enrollment');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* updateEnrollment({ payload }) {
  try {
    const { data, id } = payload;

    yield call(api.put, `enrollment/${id}`, {
      ...data,
    });

    toast.success('Matrícula editada com sucesso');
    history.push('/enrollment');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* delEnrollment({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `enrollment/${id}`);
    toast.success(`Matrícula delatada com sucesso.`);
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

export default all([
  takeLatest('@enrollment/ENROLLMENT_ADD_REQUEST', addEnrollment),
  // takeLatest('@plan/PLAN_UPDATE_REQUEST', updatePlan),
  takeLatest('@enrollment/ENROLLMENT_DEL_REQUEST', delEnrollment),
]);
