import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let initialState={
    users:[],
    status:"idle",  //pending || success || failure,
    error:null

}
export let fetchUser = createAsyncThunk(
    "user/fetchUser",
    async function(){
    // https://jsonplaceholder.typicode.com/users
        let users=await axios.get("https://jsonplaceholder.typicode.com/users")
        return users.data
    }
)
let userSlice= createSlice({
    name:"user",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUser.pending,(state,action)=>{
            state.status="pending"
        })
        .addCase(fetchUser.fulfilled,(state,action)=>{
            state.status="success",
            state.users=action.payload
        })
        .addCase(fetchUser.rejected,(state,action)=>{
            state.status="error",
            state.error=action.payload
        })

    }

})

export default userSlice.reducer
