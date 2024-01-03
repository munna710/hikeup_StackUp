import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../assets/blogdata'; // Assuming this is the correct path

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const blogPost = blogData.find(blog => blog.id === id);
    setBlog(blogPost);
  }, [id]);

  return (
    <div>
      {blog ? (
        <div>
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SingleBlog;