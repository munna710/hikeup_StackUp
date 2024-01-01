import React from 'react';

import blogData from '../assets/blogdata';
import Blogcard from '../components/blogcard';
import TextWrapper from '../components/textwrapper';

const BlogList = () => {
  return (
    <div className='container'>
        <TextWrapper category='Blog' />
      {blogData.map(blog => (
        <Blogcard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default BlogList;