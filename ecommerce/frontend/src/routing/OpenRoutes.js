import { Navigate } from 'react-router-dom';

export const OpenRoutes = ({ children }) => {
    const getTokenFromLocalStorage = JSON.parse(localStorage.getItem("customer"));
    console.log(getTokenFromLocalStorage?.token);
    return getTokenFromLocalStorage?.token === undefined ? children : <Navigate to="/" replace={true} />;
}
