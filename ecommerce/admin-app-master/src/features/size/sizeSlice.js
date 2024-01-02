import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import sizeService from "./sizeService";

export const getSizes = createAsyncThunk(
  "size/get-sizes",
  async (thunkAPI) => {
    try {
      return await sizeService.getSizes();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createSize = createAsyncThunk(
  "size/create-size",
  async (sizeData, thunkAPI) => {
    try {
      return await sizeService.createSize(sizeData);
    } catch (error) {
      
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getASize = createAsyncThunk(
        "size/get-size",
        async (id, thunkAPI) => {
            try {
                return await sizeService.getSize(id);
            } catch (error) {
                return thunkAPI.rejectWithValue(error);
            }
        }
    );
export const updateSize = createAsyncThunk(
  "size/update-size",
  async (size, thunkAPI) => {
    try {
      return await sizeService.updateSize(size);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteASize = createAsyncThunk(
  "size/delete-size",
  async (id, thunkAPI) => {
    try {
      return await sizeService.deleteSize(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

const initialState = {
  // Define your initial state here...
  sizes: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const sizeSlice = createSlice({
  name: "sizes",
  initialState,
  reducers: {
    // Define your reducers here...
  },
extraReducers: (builder) => {
    builder
        .addCase(getSizes.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getSizes.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.sizes = action.payload;
        })
        .addCase(getSizes.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error.message;
        })
        .addCase(createSize.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(createSize.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.createdSize = action.payload;
        })
        .addCase(createSize.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
        .addCase(getASize.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getASize.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.sizeName = action.payload.title;
        })
        .addCase(getASize.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
        .addCase(updateSize.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(updateSize.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.updatedSize = action.payload;
            
        })
        .addCase(updateSize.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
        .addCase(deleteASize.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(deleteASize.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.deletedSize = action.payload.title;
  
        })
        .addCase(deleteASize.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
        .addCase(resetState, () => initialState);
},
});

export default sizeSlice.reducer;