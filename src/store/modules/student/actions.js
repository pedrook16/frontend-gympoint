export function getIdStudentsRequest(id) {
  return {
    type: '@student/STUDENT_GET_REQUEST',
    payload: { id },
  };
}

export function getIdStudentsSuccess(data) {
  return {
    type: '@student/STUDENT_GET_SUCCESS',
    payload: { data },
  };
}

export function addStudentsRequest(data) {
  return {
    type: '@student/STUDENT_ADD_REQUEST',
    payload: { data },
  };
}

export function studentFailure() {
  return {
    type: '@student/SIGN_FAILURE',
  };
}

export function updateStudentsRequest(student, id) {
  return {
    type: '@student/STUDENT_UPDATE_REQUEST',
    payload: { student, id },
  };
}

export function deleteStudentsRequest(id, name) {
  return {
    type: '@student/STUDENT_DELETE_REQUEST',
    payload: { id, name },
  };
}

export function deleteStudentsSuccess(del) {
  return {
    type: '@student/STUDENT_DELETE_SUCCESS',
    payload: { del },
  };
}
