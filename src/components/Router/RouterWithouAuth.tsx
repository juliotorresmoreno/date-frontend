
import React from 'react';
import { Route, Switch } from 'react-router-native';
import AuthPage from '../../pages/AuthPage';
import RegisterPage from '../../pages/RegisterPage';

const RouterWithouAuth: React.FC = () => {
    return (
        <Switch>
            <Route exact path='/sign-up' component={RegisterPage} />
            <Route path='/' component={AuthPage} />
        </Switch>
    );
}

export default RouterWithouAuth;
