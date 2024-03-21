import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated : false , 
    user:{
        id : "",
        name : "" , 
        email : ""  ,
        phone : "" , 
        avatar : "",
        isAdmin : "",
        access_token : ""
    }
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    doLoginAction: (state , action) => {
      state.isAuthenticated = true ,
      state.user = action.payload
    },
    doLogoutAction: (state ) => {
      state.isAuthenticated = false ,
      state.user =  {
        id : "",
        name : "" , 
        email : ""  ,
        phone : "" , 
        avatar : "",
        isAdmin : ""
    }
    localStorage.removeItem("access_token")
    },


   
  },
})



// Action creators are generated for each case reducer function
export const { doLoginAction , doLogoutAction , initializeFromLocalStorage} = accountSlice.actions

export default accountSlice.reducer