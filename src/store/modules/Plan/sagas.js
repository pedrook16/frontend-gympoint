import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

export function* addPlan({ payload }) {
  try {
    const { data } = payload;

    yield call(api.post, 'plans', {
      ...data,
    });

    toast.success('Plano cadastrado com sucesso');
    history.push('/plan');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* updatePlan({ payload }) {
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

export function* delPlan({ payload }) {
  try {
    const { id, title } = payload;

    yield call(api.delete, `plans/${id}`);
    toast.success(`Plano ${title} apagado com sucesso.`);
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

export default all([
  takeLatest('@plan/PLAN_ADD_REQUEST', addPlan),
  takeLatest('@plan/PLAN_UPDATE_REQUEST', updatePlan),
  takeLatest('@plan/PLAN_DEL_REQUEST', delPlan),
]);
