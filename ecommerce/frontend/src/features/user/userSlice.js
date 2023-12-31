import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import  {authService} from "./userServices";
import { toast } from "react-toastify";

export const registerUser=createAsyncThunk("auth/register",async(userData,thunkAPI)=>{
  try{
    return await authService.register(userData)
  }catch(error){
    return thunkAPI.rejectwithvalue(error)

  }
})
export const loginUser=createAsyncThunk("auth/login",async(userData,thunkAPI)=>{
  try{
    return await authService.login(userData)
  }catch(error){
    return thunkAPI.rejectwithvalue(error)

  }
})
const initialState={
  user:"",
  isError:false,
  isSuccess:false,
  isLoading:false,
  message:""
}
export const authSlice= createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(registerUser.pending,(state)=>{
        state.isLoading=true;
        }).addCase(registerUser.fulfilled,(state,action)=>{
          state.isLoading=false;
          state.isSuccess=true;
          state.isError=false;
          state.createduser = action.payload;
          if(state.isSuccess ===true){
            toast.info("User created successfully");
          }
        }).addCase(registerUser.rejected,(state,action)=>{
          state.isLoading=false;
          state.isSuccess=false;
          state.isError=true;
          state.message=action.error;
          if(state.isError ===true){
            toast.error(action.error);
          }

        })
        .addCase(loginUser.pending,(state)=>{
          state.isLoading=true;
          }).addCase(loginUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isError=false;
            state.user = action.payload;
            if(state.isSuccess ===true){
              toast.info("User logged in successfully");
              localStorage.setItem("token",action.payload.token)

            }
          }).addCase(loginUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=false;
            state.isError=true;
            state.message=action.error;
            if(state.isError ===true){
              toast.error(action.error);
            }
  
          });
        
    }

 })

export default authSlice.reducer;