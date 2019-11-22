import produce from 'immer';

const INITIAL_STATE = {
  enrollment: {},
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@enrollment/ENROLLMENT_GET_SUCCESS': {
        draft.enrollment = action.payload.data;
        break;
      }
      default:
    }
  });
}
