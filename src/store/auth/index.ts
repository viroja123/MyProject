import { createSlice ,createSelector } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    userDetails:null
}
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.isLoggedIn =  action.payload.isLoggedIn;
      state.userDetails = action.payload.userDetails;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.userDetails = null;
    }
  }
})



export const { logIn : logInAction, logOut: logOutAction } = authSlice.actions
export default authSlice.reducer;
export const selectUser = (state) => state.auth;

const selectLoggedInUserInfo = createSelector([selectUser], (auth) => auth?.userDetails);

const selectIsLoggedIn = createSelector([selectUser], (auth) => auth?.isLoggedIn);

export {selectLoggedInUserInfo,selectIsLoggedIn};