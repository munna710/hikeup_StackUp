import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import subcategoryService from "./subcategoryService";

export const getSubcategories = createAsyncThunk(
    "subcategory/get-subcategories",
    async (thunkAPI) => {
        try {
            return await subcategoryService.getSubcategories();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const createSubcategory = createAsyncThunk(
    "subcategory/create-subcategory",
    async (subcategoryData, thunkAPI) => {
        try {
            return await subcategoryService.createSubcategory(subcategoryData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const updateASubcategory = createAsyncThunk(
    "subcategory/update-subcategory",
    async (subcategory, thunkAPI) => {
        try {
            return await subcategoryService.updateSubcategory(subcategory);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const deleteASubcategory = createAsyncThunk(
    "subcategory/delete-subcategory",
    async (id, thunkAPI) => {
        try {
            return await subcategoryService.deleteSubcategory(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const getASubcategory = createAsyncThunk(
    "subcategory/get-subcategory",
    async (id, thunkAPI) => {
        try {
            return await subcategoryService.getSubcategory(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const resetState = createAction("RevertAll");

const initialState = {
    subcategories: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};
export const subcategorySlice = createSlice({
    name: "subcategories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSubcategories.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getSubcategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.subcategories = action.payload;
            })
            .addCase(getSubcategories.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(createSubcategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createSubcategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.createdSubcategory = action.payload;
            })
            .addCase(createSubcategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(updateASubcategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateASubcategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.updatedSubcategory = action.payload;
            })
            .addCase(updateASubcategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(deleteASubcategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteASubcategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.deletedSubcategory = action.payload;
            })
            .addCase(deleteASubcategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(getASubcategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getASubcategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.subcategoryName = action.payload.title;
            })
            .addCase(getASubcategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(resetState, () => initialState);
    },
});
export default subcategorySlice.reducer;
