export function getByPlanRequest(id) {
  return {
    type: '@plan/PLAN_GET_REQUEST',
    payload: { id },
  };
}

export function getByPlanSuccess(data) {
  return {
    type: '@plan/PLAN_GET_SUCCESS',
    payload: { data },
  };
}

export function addPlanRequest(data) {
  return {
    type: '@plan/PLAN_ADD_REQUEST',
    payload: { data },
  };
}

export function studentFailure() {
  return {
    type: '@plan/PLAN_FAILURE',
  };
}

export function updatePlanRequest(plan, id) {
  return {
    type: '@plan/PLAN_UPDATE_REQUEST',
    payload: { plan, id },
  };
}

export function deletePlanRequest(id, title) {
  return {
    type: '@plan/PLAN_DEL_REQUEST',
    payload: { id, title },
  };
}
