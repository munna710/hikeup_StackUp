import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import sizeService from "./sizeService";

export const getSizes = createAsyncThunk(
  "size/get-sizes",
  async (_, thunkAPI) => {
    try {
      return await sizeService.getSizes();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createSize = createAsyncThunk(
  "size/create-size",
  async (size, thunkAPI) => {
    try {
      return await sizeService.createSize(size);
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

export const deleteSize = createAsyncThunk(
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
};

const sizeSlice = createSlice({
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
            state.message = action.error;
        })
        .addCase(createSize.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(createSize.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.sizes.push(action.payload);
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
            const updatedSize = action.payload;
            const index = state.sizes.findIndex((size) => size.id === updatedSize.id);
            if (index !== -1) {
                state.sizes[index] = updatedSize;
            }
        })
        .addCase(updateSize.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
        .addCase(deleteSize.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(deleteSize.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            const deletedSizeId = action.payload;
            state.sizes = state.sizes.filter((size) => size.id !== deletedSizeId);
        })
        .addCase(deleteSize.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
        .addCase(resetState, () => initialState);
},
});

export default sizeSlice.reducer;