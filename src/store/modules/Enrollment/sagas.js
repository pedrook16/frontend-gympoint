import { takeLatest, call, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { getByEnrollmentSuccess, deleteEnrollmentSuccess } from './actions';

export function* getByIdEnrollment({ payload }) {
  const { id } = payload;

  const response = yield call(api.get, `enrollment/${id}`);
  yield put(getByEnrollmentSuccess(response.data));
  history.push(`/enrollment/edit/${id}`);
}

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
    const { planId, studentId, start_date, id } = payload;

    yield call(api.put, `enrollment/${id}`, {
      student_id: studentId.id,
      plan_id: planId.id,
      start_date,
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
    yield put(deleteEnrollmentSuccess({ del: true }));
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

export default all([
  takeLatest('@enrollment/ENROLLMENT_GET_REQUEST', getByIdEnrollment),
  takeLatest('@enrollment/ENROLLMENT_ADD_REQUEST', addEnrollment),
  takeLatest('@enrollment/ENROLLMENT_UPDATE_REQUEST', updateEnrollment),
  takeLatest('@enrollment/ENROLLMENT_DEL_REQUEST', delEnrollment),
]);
