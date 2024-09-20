import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

//Thi slice is useful in some cases where we want to reload the screen after some action
export interface ReloadState {
  [key: string]: boolean;
}

const initialState: ReloadState = {
  myTeamReload: false,
  HomeReload: false,
  MyContestReload: false,
  TransactionReload: false,
  ProfileReload: false,
  WalletReload:false
};

const reloadSlice = createSlice({
  name: 'Reload',
  initialState,
  reducers: {
    setReload: (state, action: PayloadAction<{ screenName: string; value: boolean }>) => {
      state[action.payload.screenName] = action.payload.value;
    },
  },
});

export const { setReload } = reloadSlice.actions;
export default reloadSlice.reducer;
