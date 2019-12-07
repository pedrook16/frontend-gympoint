import { takeLatest, call, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { getByPlanSuccess, deletePlanSuccess } from './actions';

export function* getIdPlan({ payload }) {
  const { id } = payload;

  const response = yield call(api.get, `plans/${id}`);

  yield put(getByPlanSuccess(response.data));
  history.push(`/plan/edit/${id}`);
}

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
    const { plan, id } = payload;

    yield call(api.put, `plans/${id}`, {
      ...plan,
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
    yield put(deletePlanSuccess({ del: true }));
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

export default all([
  takeLatest('@plan/PLAN_GET_REQUEST', getIdPlan),
  takeLatest('@plan/PLAN_ADD_REQUEST', addPlan),
  takeLatest('@plan/PLAN_UPDATE_REQUEST', updatePlan),
  takeLatest('@plan/PLAN_DEL_REQUEST', delPlan),
]);
