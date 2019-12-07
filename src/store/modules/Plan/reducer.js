import produce from 'immer';

const INITIAL_STATE = {
  del: false,
  plan: {},
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@plan/PLAN_GET_SUCCESS': {
        draft.plan = action.payload.data;
        break;
      }
      case '@plan/PLAN_DEL_SUCCESS': {
        draft.del = action.payload.del;
        break;
      }
      default:
    }
  });
}
