
import React, { useEffect, useState } from 'react';
import { NativeRouter } from 'react-router-native';
import { Provider } from 'react-redux';
import Router from '../Router';
import configureStore from '../../store';

const App: React.FC = () => {
    const [isLoad, setIsLoad] = useState(false);
    const [store, setStore] = useState(null);
    useEffect(function () {
        if (isLoad) return;
        setIsLoad(true);
        configureStore()
            .then(function (currentStore) {
                setStore(currentStore);
            });
    });
    if (!store) return null;
    return (
        <NativeRouter>
            <Provider store={store}>
                <Router />
            </Provider>
        </NativeRouter>
    );
}

export default App;
