
import { authTypes } from "../actions/actionTypes";
import { ActionPayload, AuthState, Reducer } from "../@types/redux";
import Session from "../models/Session";

const defaultState: AuthState = {
    token: ''
};

const defaultAction: ActionPayload = {
    type: 'NONE',
    payload: undefined
}

interface Reducers {
    [x: string]: Reducer<AuthState>
}

const reducers: Reducers = {
    [authTypes.setSession]: (state, action: ActionPayload<Session>) => {
        return action.payload;
    },
    [authTypes.logout]: () => {
        return { token: '' };
    }
}

const authReducer: Reducer<AuthState> = (state = defaultState, action = defaultAction) => {
    if (action.type in reducers) {
        const actionType: string = action.type;
        return { ...reducers[actionType](state, action) };
    }
    return state;
};

export default authReducer;
