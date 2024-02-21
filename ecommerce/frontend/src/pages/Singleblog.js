
import React , { useEffect, useState } from 'react';
import blogData from '../assets/blogdata';
import { useDispatch, useSelector } from 'react-redux';
import { getABlog } from '../features/blogs/blogSlice';

import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Singleblog = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const getBlogId = location.pathname.split("/")[2];

  const blogState = useSelector((state) => state?.blog?.singleBlog);

  const getblog = () => {
    dispatch(getABlog(getBlogId));
  }
  useEffect(() => {
    getblog();
  }, []);
console.log(blogState)

  return (
    <>
      <div style={{backgroundColor:"#e8e8e8"}} className='container-fluid'>
        <div className='row'>
          
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <div className="blog-content">
              <h2>{blogState?.title}</h2>
              <p>{blogState?.content}</p>
              <p><span className="text-primary">Published on: </span>{blogState?.createdAt}</p>
              
              <img className="image-fluid custom-imageBLOG" src={blogState?.images[0].url} alt="" />
              
              <article>
                
                
              <p className='title bg-dark text-light' dangerouslySetInnerHTML={{ __html: blogState?.description }} />
                {/* Additional content */}
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Singleblog;
