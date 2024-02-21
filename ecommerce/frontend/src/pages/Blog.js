// blog.js
import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import blogData from '../assets/blogdata';
import Blogcard from '../components/blogcard';
import TextWrapper from '../components/textwrapper';
import { getAllBlogs } from '../features/blogs/blogSlice';
import moment from 'moment';
const BlogList = () => {
  const blogState = useSelector((state) => state?.blog?.blog);

const dispatch = useDispatch();
useEffect(() => {
    getblogs();
}, []);
const getblogs = () => {
    dispatch(getAllBlogs());
};
console.log(blogState)
  return (
    <div className='container'>
      <TextWrapper category='Blog' />
      <div className='row'>
        {
          blogState?.map((item, index) => {
            const imageUrl = item?.images && item?.images[0] ? item.images[0].url : 'defaultImageUrl';

             return(
              <div className="col-lg-3 col-md-4 col-sm-6 blog-card" key={index}>
              <Blogcard id={item?._id} title={item?.title} description={item?.description.split('.')[0]} image={imageUrl} date={moment(item?.created_at).format('MMMM Do YYYY, h:mm:ss a')} />
            </div>
             )
             })
        }
        
      </div>
    </div>
  );
}

export default BlogList;
