import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth, db } from "../../../Firebase";
import { setDoc, doc } from "firebase/firestore";

export default function storeEmail() {
  return (
    <div>

    </div>
  )
}


const StoreEmail = createSlice({
    name: "storeEmailSlices",
    initialState: {
        user:null,
    },
    reducers: {
        addEmail: (state, action) => {
           state.user = action.payload;
           console.log(state.user)
        },

    },

    
});

export const { addEmail } = StoreEmail.actions;
