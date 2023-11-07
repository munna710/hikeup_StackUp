
import './App.css';
import {BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Pdgirls from './pages/Pdgirls';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup';
function App() {
  return (<>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path ="About" element={<About />} />
          <Route path ="Contact" element={<Contact />} />
          <Route path ="Pdgirls" element={<Pdgirls />} />
          <Route path ="Login" element={<Login />} />
          <Route path ="Forgotpassword" element={<Forgotpassword />} />
          <Route path ="Signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
