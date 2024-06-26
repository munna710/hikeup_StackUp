
import './App.css';
import {BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Girls from './pages/girls';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup';
import Singlepd from './pages/Singlepd';
import Women from './pages/women';
import Blog from './pages/Blog';
import SingleBlog from './pages/Singleblog';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import { PrivateRoutes } from './routing/PrivateRoute';
import { OpenRoutes } from './routing/OpenRoutes';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import Product from './pages/product';


function App() {
  return (<>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path ="About" element={<About />} />
          <Route path ="Contact" element={<Contact />} />
          <Route path ="Login" element={<Login />} />
          <Route path ="product" element={<Product / >} />
          <Route path ="Forgotpassword" element={<Forgotpassword />} />
          <Route path ="Signup" element={<Signup />} />
          <Route path="Cart" element={<PrivateRoutes><Cart /></PrivateRoutes>} />
          <Route path="Orders" element={<PrivateRoutes><Orders /></PrivateRoutes>} />
          <Route path='women/*' element={<Women category='women'/>} />
          <Route path='girls/*' element={<Girls category='girls'/>} />
          <Route path ="Blog" element={<Blog />} />
          <Route path=':product/:id' element={<Singlepd />} />
          <Route path='Blog/:id' element={<SingleBlog />} />
          <Route path='Wishlist' element={<PrivateRoutes><Wishlist /></PrivateRoutes>} />
          <Route path='Checkout' element={<PrivateRoutes><Checkout /></PrivateRoutes>} />
          <Route path="my-profile" element={<PrivateRoutes><Profile/></PrivateRoutes>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
