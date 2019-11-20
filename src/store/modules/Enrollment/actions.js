export function addEnrollmentRequest({ studentId, planId, start_date }) {
  return {
    type: '@enrollment/ENROLLMENT_ADD_REQUEST',
    payload: { studentId, planId, start_date },
  };
}

export function updateEnrollmentRequest(data, id) {
  return {
    type: '@enrollment/ENROLLMENT_UPDATE_REQUEST',
    payload: { data, id },
  };
}

export function deleteEnrollmentRequest(id) {
  return {
    type: '@enrollment/ENROLLMENT_DEL_REQUEST',
    payload: { id },
  };
}
