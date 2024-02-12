import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addTowishlist } from '../features/user/userSlice';
import { getUserProductWishlist} from '../features/user/userSlice';

const WishlistCard = (props) => {
  const {data} = props;
  const dispatch = useDispatch();
  console.log(data);
  const removeWish = (id) => {
    dispatch(addTowishlist(id));
    setTimeout(() => {
      dispatch(getUserProductWishlist());
    }, 500);
};
  return (
    <>
    {data?.map((item, index) => {
      const imageUrl = item.images && item.images[0] ? item.images[0].url : 'defaultImageUrl';
      const imageUrl2 = item.images && item.images[1] ? item.images[1].url : 'defaultImageUrl';

       return (
    <div className="col-md-3 col-sm-6"  key={index}>
          <div className="product-grid">
            <div className="product-image">
              <a href="#" className="image">
                <img className="pic-1" src={imageUrl} alt="Product Image" />
                <img className="pic-2" src={imageUrl2} alt="Product Image" />
              </a>
              
              <a href="#" className="product-like-icon" data-tip="remove from Wishlist" onClick={(e) => removeWish(item?._id)}>
              <i class="fas fa-times"></i>
              </a>
              <ul className="product-links">
                <li><a href="#"><i className="fa fa-search"></i></a></li>
                <li><a href="#"><i className="fas fa-shopping-cart"></i></a></li>
                <li><a href="#"><i className="fa fa-random"></i></a></li>
              </ul>
            </div>
            <div className="product-content">
              <h3 className="title"><Link to={`/product/${item?._id}`}>{item?.title}</Link></h3>
              <div class="price"><span>₹{item?.price}</span> ₹{item?.price}</div>
            </div>
          </div>
        </div>
    );
     })}
    </>
  )
}

export default WishlistCard;