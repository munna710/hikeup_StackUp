// blog.js
import React from 'react';

import blogData from '../assets/blogdata';
import Blogcard from '../components/blogcard';
import TextWrapper from '../components/textwrapper';

const BlogList = () => {
  return (
    <div className='container'>
      <TextWrapper category='Blog' />
      <div className='row'>
        {blogData.map(blog => (
          <div className="col-lg-3 col-md-4 col-sm-6 blog-card" key={blog.id}>
            <Blogcard blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
