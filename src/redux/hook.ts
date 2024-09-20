import { useSelector, useDispatch } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { ThunkAction } from "@reduxjs/toolkit";


export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type MyThunkAPITypes = {
    dispatch: ThunkAction<void, RootState, null, any>;
    getState: () => RootState;
    rejectWithValue<T = void>(value: T): void;
}