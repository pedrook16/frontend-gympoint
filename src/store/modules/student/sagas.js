import { takeLatest, call, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { getIdStudentsSuccess, deleteStudentsSuccess } from './actions';

export function* getByIdStudent({ payload }) {
  const { id } = payload;

  const response = yield call(api.get, `students/${id}`);

  yield put(getIdStudentsSuccess(response.data));
  history.push(`/student/edit/${id}`);
}

export function* addStudent({ payload }) {
  try {
    const { data } = payload;

    yield call(api.post, 'students', {
      ...data,
    });

    toast.success('Aluno cadastrado com sucesso');
    history.push('/student');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* updateStudent({ payload }) {
  try {
    const { student, id } = payload;

    yield call(api.put, `students/${id}`, {
      ...student,
    });

    toast.success('Aluno editado com sucesso');
    history.push('/student');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* deleteStudent({ payload }) {
  try {
    const { name, id } = payload;

    yield call(api.delete, `students/${id}`);

    toast.success(`Aluno ${name} deletado com sucesso`);
    yield put(deleteStudentsSuccess({ del: true }));
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export default all([
  takeLatest('@student/STUDENT_GET_REQUEST', getByIdStudent),
  takeLatest('@student/STUDENT_ADD_REQUEST', addStudent),
  takeLatest('@student/STUDENT_UPDATE_REQUEST', updateStudent),
  takeLatest('@student/STUDENT_DELETE_REQUEST', deleteStudent),
]);
