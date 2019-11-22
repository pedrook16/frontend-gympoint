import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import student from './student/reducer';
import plan from './Plan/reducer';
import enrollment from './Enrollment/reducer';

export default combineReducers({
  auth,
  user,
  student,
  plan,
  enrollment
});
