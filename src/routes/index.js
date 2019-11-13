import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Student from '~/pages/Students';
import Sign from '~/pages/Sign';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Sign} />

      <Route path="/dashboard" component={Student} isPrivate />
    </Switch>
  );
}
