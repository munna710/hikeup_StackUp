import React, {useEffect} from 'react';
import WishlistCard from '../components/WishlistCard';
import TextWrapper from '../components/textwrapper';
import womenProducts from '../assets/womenProduct';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProductWishlist} from '../features/user/userSlice';

const Wishlist = () => {
  const dispatch = useDispatch();
    useEffect(() => {
        getWishlistFromDb();
    }, []);
    const getWishlistFromDb = () => {
        dispatch(getUserProductWishlist());
    };
    const wishlistState = useSelector((state) => state.auth.wishlist.wishlist);
  return (
    <div className='container'>
            <TextWrapper category={"Wishlist"} />
            <div className='row'>
                
            {wishlistState && wishlistState.length > 0 ? (
          <WishlistCard data={wishlistState} />
        ) : (
          <h3 className='text-center fs-3 bg-dark text-light'>No data in wishlist</h3>
        )}
       
        
      </div>
    </div>
  );
      
};


export default Wishlist;