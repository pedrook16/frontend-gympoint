import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Students from '~/pages/Students';
import AddAndEditStudent from '~/pages/AddAndEditStudents';
import Plans from '~/pages/Plans';
import AddAndEditPlan from '~/pages/AddAndEditPlan';
import Enrollments from '~/pages/Enrollments';
import AddAndEditEnrollment from '~/pages/AddAndEditEnrollment';
import HelpOrders from '~/pages/HelpOrders';
import SignIn from '~/pages/SignIn';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/student" exact component={Students} isPrivate />
      <Route path="/student/create" component={AddAndEditStudent} isPrivate />
      <Route path="/student/edit/:id" component={AddAndEditStudent} isPrivate />
      <Route path="/plan" exact component={Plans} isPrivate />
      <Route path="/plan/create" exact component={AddAndEditPlan} isPrivate />
      <Route path="/plan/edit/:id" exact component={AddAndEditPlan} isPrivate />
      <Route path="/enrollment" exact component={Enrollments} isPrivate />
      <Route
        path="/enrollment/create"
        component={AddAndEditEnrollment}
        isPrivate
      />
      <Route
        path="/enrollment/edit/:id"
        component={AddAndEditEnrollment}
        isPrivate
      />
      <Route path="/help" component={HelpOrders} isPrivate />
    </Switch>
  );
}
