import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { productService } from "./productService";


export const getAllProducts = createAsyncThunk("product/get", async (category, thunkAPI) => {
  try {
    return await productService.getProducts(category);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const addTowishlist = createAsyncThunk(
  "product/wishlist",
  async (prodId, thunkAPI) => {
    try {
      return await productService.addTowishlist(prodId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const productState={
    product:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
  }



export const productSlice= createSlice({
    name: 'product',
    initialState: productState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getAllProducts.pending,(state)=>{
        state.isLoading=true;
        }).addCase(getAllProducts.fulfilled,(state,action)=>
        {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.product = action.payload;
        }).addCase(getAllProducts.rejected,(state,action)=>
        {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.error;
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
        });
        
    }

 })

export default productSlice.reducer;