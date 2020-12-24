
import { ActionDispatch } from "../@types/redux";
import Session from "../models/Session";
import { authTypes } from "./actionTypes";

export const setSession: ActionDispatch<Session> = (session) => ({
    type: authTypes.setSession,
    payload: session
});
