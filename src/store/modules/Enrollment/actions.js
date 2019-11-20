export function addStudentsRequest(data) {
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

export function updateStudentsRequest(data, id) {
  return {
    type: '@plan/PLAN_UPDATE_REQUEST',
    payload: { data, id },
  };
}

export function deletePlanRequest(id) {
  return {
    type: '@plan/PLAN_DEL_REQUEST',
    payload: { id },
  };
}
