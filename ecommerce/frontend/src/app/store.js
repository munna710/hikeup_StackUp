import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/user/userSlice';
import productReducer from '../features/products/productSlice';
import contactReducer from '../features/contacts/contactSlice';
import blogReducer from '../features/blogs/blogSlice';
export const store=configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    contact:contactReducer,
    blog:blogReducer,

    
  },
});
