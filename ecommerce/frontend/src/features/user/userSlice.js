import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import  {authService} from "./userServices";
import { toast } from "react-toastify";

export const registerUser=createAsyncThunk("auth/register",async(userData,thunkAPI)=>{
  try{
    return await authService.register(userData)
  }catch(error){
    return thunkAPI.rejectWithValue(error)

  }
})
export const loginUser=createAsyncThunk("auth/login",async(userData,thunkAPI)=>{
  try{
    return await authService.login(userData)
  }catch(error){
    return thunkAPI.rejectWithValue(error)

  }
})
export const addTowishlist = createAsyncThunk(
  "product/wishlist",
  async (prodId, thunkAPI) => {
    try {
      return await authService.addTowishlist(prodId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getUserProductWishlist = createAsyncThunk(
  "user/wishlist",
  async (thunkAPI) => {
    try {
      return await authService.getUserWishlist();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addProdToCart = createAsyncThunk(
  "user/cart/add",
  async (cartData, thunkAPI) => {
    try {
      return await authService.addToCart(cartData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getUserCart = createAsyncThunk(
  "user/cart/get",
  async ( thunkAPI) => {
    try {
      return await authService.getCart();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const getCustomerfromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;
const initialState={
  user:getCustomerfromLocalStorage,
  wishlist:[],
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
  
          })
          .addCase(addTowishlist.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(addTowishlist.fulfilled, (state, action) => {
              state.isLoading = false;
              state.isError = false;
              state.isSuccess = true;
              state.addToWishlist = action.payload;
              state.message = "Product Added To Wishlist !";
          })
          .addCase(addTowishlist.rejected, (state, action) => {
              state.isLoading = false;
              state.isError = true;
              state.isSuccess = false;
              state.message = action.error;
          })
          .addCase(getUserProductWishlist.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getUserProductWishlist.fulfilled, (state, action) => {
              state.isLoading = false;
              state.isError = false;
              state.isSuccess = true;
              state.wishlist = action.payload;
             
          })
          .addCase(getUserProductWishlist.rejected, (state, action) => {
              state.isLoading = false;
              state.isError = true;
              state.isSuccess = false;
              state.message = action.error;
          })
          .addCase(addProdToCart.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(addProdToCart.fulfilled, (state, action) => {
              state.isLoading = false;
              state.isError = false;
              state.isSuccess = true;
              state.cartProduct = action.payload;
              if(state.isSuccess ===true){
                toast.info("product added to cart successfully");
              }

          })
          .addCase(addProdToCart.rejected, (state, action) => {
              state.isLoading = false;
              state.isError = true;
              state.isSuccess = false;
              state.message = action.error;
              if(state.isError ===true){
                toast.info("Something went wrong! Please try again.");
              }
          })
          .addCase(getUserCart.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getUserCart.fulfilled, (state, action) => {
              state.isLoading = false;
              state.isError = false;
              state.isSuccess = true;
              state.cartProducts = action.payload;
          })
          .addCase(getUserCart.rejected, (state, action) => {
              state.isLoading = false;
              state.isError = true;
              state.isSuccess = false;
              state.message = action.error;
          });
        
    }

 })

export default authSlice.reducer;