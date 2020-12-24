import { AnyAction } from "redux";
import Session from "../models/Session";
import { Reducer as ReduxReducer } from "redux";

export declare interface ActionPayload<T = any> extends AnyAction {
    type: string;
    payload: T;
}

export declare type ActionDispatch<T> = (arg: T) => ActionPayload<T>;

export declare type Reducer<T = any> = (state: T, action: ActionPayload<any>) => T;

export declare interface AuthState extends Session {

}

export declare interface RootState {
    auth: AuthState;
}
