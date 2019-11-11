import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '~/pages/Home';
import Sign from '~/pages/Sign';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" component={Sign} />

            <Route path="/dashboard" exact component={Home} isPrivate />
        </Switch>
    );
}
