import produce from 'immer';

const INITIAL_STATE = {
  student: {},
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/STUDENT_GET_SUCCESS': {
        draft.student = action.payload.data;
        break;
      }
      default:
    }
  });
}
