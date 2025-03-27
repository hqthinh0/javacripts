import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Data/Data";

const UserSlice = createSlice({
    name:"user",
    initialState: userList,
    reducers:{
        addUser: (state, action) =>{
            state.push(action.payload)
        },
        Updates: (state, action) =>{
           let {id, name, email} = action.payload;
           let update = state.find(user => user.id == id);
           
           if(update){
            update.name = name;
            update.email = email;
           }
        },
        Delete: (state, action) =>{
            let {id} = action.payload;
            let deletes = state.find(user => user.id == id);
            if(deletes){
                return state.filter(f => f.id !== id);
            }
        }
    }
})

export const {addUser, Updates, Delete} = UserSlice.actions;
export default UserSlice.reducer;
