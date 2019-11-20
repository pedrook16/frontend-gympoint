import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Student from '~/pages/Students';
import RegisterStudent from '~/pages/RegisterStudents';
import Plan from '~/pages/Plan';
import PlanAdd from '~/pages/PlanAdd';
import Enrollment from '~/pages/Enrollment';
import EnrollmentAdd from '~/pages/EnrollmentAdd';
import HelpOrder from '~/pages/HelpOrder';
import Sign from '~/pages/Sign';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Sign} />

      <Route path="/student" exact component={Student} isPrivate />
      <Route
        path="/student/create"
        exact
        component={RegisterStudent}
        isPrivate
      />
      <Route
        path="/student/edit/:id"
        exact
        component={RegisterStudent}
        isPrivate
      />
      <Route path="/plan" exact component={Plan} isPrivate />
      <Route path="/plan/create" exact component={PlanAdd} isPrivate />
      <Route path="/plan/edit/:id" exact component={PlanAdd} isPrivate />
      <Route path="/enrollment" component={Enrollment} isPrivate />
      <Route path="/addenrollment" component={EnrollmentAdd} isPrivate />
      <Route path="/help" component={HelpOrder} isPrivate />
    </Switch>
  );
}
