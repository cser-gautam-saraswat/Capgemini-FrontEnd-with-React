import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
    name : "userSlice",
    initialState : {user:[]},
    reducers :{
        addUser : (state,action)=>{
            console.log(state,action);
            state = {...state,user:[...state.user, action.payload]}
            return state
        }
    },
})

export let {addUser} = userSlice.actions
export default userSlice.reducer