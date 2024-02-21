import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { blogService} from "./blogService";


export const getAllBlogs = createAsyncThunk("blogs/get", async ( thunkAPI) => {
        try {
            return await blogService.getBlogs();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    });
    export const getABlog = createAsyncThunk("blog/get", async (id, thunkAPI) => {
        try {
            return await blogService.getBlog(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    });

const blogState={
        blogs:[],
        blog:[],
        isError:false,
        isSuccess:false,
        isLoading:false,
        message:""
    }
    const blogSlice=createSlice({
        name:"blogs",
        initialState:blogState,
        reducers: {},
        extraReducers:(builder)=>{
                builder
                .addCase(getAllBlogs.pending,(state)=>{
                state.isLoading=true;
                }).addCase(getAllBlogs.fulfilled,(state,action)=>
                {
                        state.isLoading = false;
                        state.isSuccess = true;
                        state.isError = false;
                        state.blog = action.payload;
                }).addCase(getAllBlogs.rejected,(state,action)=>
                {
                        state.isLoading = false;
                        state.isSuccess = false;
                        state.isError = true;
                        state.message = action.error;
                })
                .addCase(getABlog.pending,(state)=>{
                    state.isLoading=true;
                    }).addCase(getABlog.fulfilled,(state,action)=>
                    {
                            state.isLoading = false;
                            state.isSuccess = true;
                            state.isError = false;
                            state.singleBlog = action.payload;
                    }).addCase(getABlog.rejected,(state,action)=>
                    {
                            state.isLoading = false;
                            state.isSuccess = false;
                            state.isError = true;
                            state.message = action.error;
                    })
                ;
        }
});

export default blogSlice.reducer;