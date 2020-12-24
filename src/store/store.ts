
import { createStore, Store } from "redux";
import AsyncStorage from '@react-native-community/async-storage';
import { ActionPayload, RootState } from "../@types/redux";
import reducers from "../reducers";

type AppStore = Store<RootState, ActionPayload<any>>;

export default async function configureStore(): Promise<AppStore> {
    const result = await AsyncStorage.getItem('state')
        .then((value) => value || '{}')
        .catch(() => '{}');
    const defaultState = JSON.parse(result);
    return createStore(reducers, defaultState);
};