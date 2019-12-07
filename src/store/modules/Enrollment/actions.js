export function getByEnrollmentRequest(id) {
  return {
    type: '@enrollment/ENROLLMENT_GET_REQUEST',
    payload: { id },
  };
}

export function getByEnrollmentSuccess(data) {
  return {
    type: '@enrollment/ENROLLMENT_GET_SUCCESS',
    payload: { data },
  };
}

export function addEnrollmentRequest({ studentId, planId, start_date }) {
  return {
    type: '@enrollment/ENROLLMENT_ADD_REQUEST',
    payload: { studentId, planId, start_date },
  };
}

export function updateEnrollmentRequest({ studentId, planId, start_date, id }) {
  return {
    type: '@enrollment/ENROLLMENT_UPDATE_REQUEST',
    payload: { studentId, planId, start_date, id },
  };
}

export function deleteEnrollmentRequest(id) {
  return {
    type: '@enrollment/ENROLLMENT_DEL_REQUEST',
    payload: { id },
  };
}

export function deleteEnrollmentSuccess(del) {
  return {
    type: '@enrollment/ENROLLMENT_DEL_SUCCESS',
    payload: { del },
  };
}
