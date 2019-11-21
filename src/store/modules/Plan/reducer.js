import produce from 'immer';

const INITIAL_STATE = {
  plan: {},
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@plan/PLAN_GET_SUCCESS': {
        draft.plan = action.payload.data;
        break;
      }
      default:
    }
  });
}
