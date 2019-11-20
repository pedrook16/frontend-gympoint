import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

export function* addEnrollment({ payload }) {
  try {
    const { planId, studentId, start_date } = payload;

    yield call(api.post, 'enrollment', {
      student_id: planId.id,
      plan_id: studentId.id,
      start_date,
    });

    toast.success('Matriculado com sucesso');
    history.push('/plan');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* updateEnrollment({ payload }) {
  try {
    const { data, id } = payload;

    yield call(api.put, `plan/${id}`, {
      ...data,
    });

    toast.success('Plano editado com sucesso');
    history.push('/plan');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* delEnrollment({ payload }) {
  try {
    const { id, title } = payload;

    yield call(api.delete, `plans/${id}`);
    toast.success(`Plano ${title} apagado com sucesso.`);
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

export default all([
  takeLatest('@enrollment/ENROLLMENT_ADD_REQUEST', addEnrollment),
  // takeLatest('@plan/PLAN_UPDATE_REQUEST', updatePlan),
  // takeLatest('@plan/PLAN_DEL_REQUEST', delPlan),
]);
