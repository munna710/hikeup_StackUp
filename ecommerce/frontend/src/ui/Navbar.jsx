import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, User, LogIn, X, ShoppingCart } from 'react-feather';
import { UserContext, CartContext } from '@/App';
import Button from '@/components/Button';
import Input from '@/components/Input';
import UserDropDown from '@/components/UserDropDown';
import api from '@/api';
import useClickOutside from '@/hooks/useClickOutside';

export default function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const { cart, cartDispatch } = useContext(CartContext);
  const [showMenu, setShowMenu] = useState(false);
  const navbarRef = useClickOutside(() => setShowMenu(false));

  return (
    <nav
      className={`navbar navbar-expand-md navbar-light bg-light sticky-top py-3 px-4 ${showMenu && 'navbar-expand'}`}
      ref={navbarRef}
    >
      <Link className="navbar-brand" to="/">
        BRAND
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? <X width={24} height={24} /> : <Menu width={24} height={24} />}
      </button>

      <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`}>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              <ShoppingCart width={24} height={24} />
              {cart.products.length ? (
                <span className="badge badge-danger ml-1">{cart.products.length}</span>
              ) : null}
            </Link>
          </li>
          {user ? (
            <li className="nav-item">
              <UserDropDown
                user={user}
                onLogout={() => {
                  api.logoutUser();
                  setUser(null);
                  cartDispatch({ type: 'RESET' });
                }}
              />
            </li>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  <Button secondary>
                    <LogIn width={20} height={20} className="mr-2" />
                    Login
                  </Button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  <Button>
                    <User width={20} height={20} className="mr-2" />
                    Register
                  </Button>
                </Link>
              </li>
            </>
          )}
          <li className="nav-item">
            <Input
              className="form-control"
              icon={<Search />}
              placeholder="Search..."
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
