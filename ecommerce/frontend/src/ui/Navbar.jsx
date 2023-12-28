import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, User, LogIn, X, ShoppingCart } from 'react-feather';
import Button from '@/components/Button';
import Input from '@/components/Input';
import UserDropDown from '@/components/UserDropDown';
import useClickOutside from '@/hooks/useClickOutside';

import { AuthContext } from '@/context/AuthContext';
import { CartContext } from '@/context/CartContext';
function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserDropDownOpen, setIsUserDropDownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const searchRef = useClickOutside(() => setIsSearchOpen(false));
  const userDropDownRef = useClickOutside(() => setIsUserDropDownOpen(false));
  const cartRef = useClickOutside(() => setIsCartOpen(false));

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      // redirect to search page
    }
  }
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <button
              className="text-gray-500 focus:outline-none lg:hidden"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu />
            </button>
            <Link to="/" className="text-gray-800 font-bold text-xl ml-2">
              Ecommerce
            </Link>
          </div>
          <div className="hidden lg:flex items-center">
            <form
              className="relative"
              onSubmit={handleSearch}
              ref={searchRef}
            >
              <button
                type="submit"
                className="absolute right-0 top-0 mt-3 mr-2"
              >
                <Search />
              </button>
              <Input
                placeholder="Search"
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsSearchOpen(true)}
              />
              {isSearchOpen && (
                <div className="absolute bg-white w-full mt-2 rounded-lg shadow-lg p-4">
                  <p>Search Result</p>
                </div>
              )}
            </form>
            <div className="ml-6">
              {user ? (
                <div className="relative" ref={userDropDownRef}>
                  <button
                    className="flex items-center focus:outline-none"
                    onClick={() => setIsUserDropDownOpen(true)}
                  >
                    <User className="mr-2" /> {user.name}
                  </button>
                  {isUserDropDownOpen && (
                    <UserDropDown
                      setIsUserDropDownOpen={setIsUserDropDownOpen}
                      logout={logout}
                    />
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center focus:outline-none"
                >
                  <LogIn className="mr-2" /> Login
                </Link>
              )}
            </div>
            <div className="ml-6 relative" ref={cartRef}>
              <button
                className="flex items-center focus:outline-none"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="mr-2" /> Cart
                {cartItems.length > 0
                  ? <span className="ml-1 bg-red-500 text-white px-1 rounded-full text-xs">{cartItems.length}</span>
                  : null
                }
              </button>
              {isCartOpen && (
                <div className="absolute bg-white w-64 mt-2 rounded-lg shadow-lg p-4">
                  <p>Cart</p>
                </div>
              )}  
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center">
                <Link to="/" className="text-gray-800 font-bold text-xl ml-2">
                  Ecommerce
                </Link>
              </div>
              <div className="flex items-center">
                <button
                  className="text-gray-500 focus:outline-none lg:hidden"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
export default Navbar;

