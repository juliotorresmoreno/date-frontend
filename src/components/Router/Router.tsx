
import { Switch, Route } from 'react-router-native';
import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../@types/redux';
import RouterWithAuth from './RouterWithAuth';
import RouterWithouAuth from './RouterWithouAuth';

interface RouterProps {

}

interface RouterBaseProps extends RouterProps {
    logged: boolean
}

const RouterBase: React.FC<RouterBaseProps> = ({ logged }) => {
    if (logged) return <RouterWithAuth />;
    return <RouterWithouAuth />;
}

const mapProps = ({ auth }: RootState) => ({
    logged: auth.token !== ''
})

const Router: React.FC<RouterProps> = connect(mapProps)(RouterBase);

export default Router;
