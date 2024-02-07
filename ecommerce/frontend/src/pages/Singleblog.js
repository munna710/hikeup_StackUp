
import React from 'react';
import blogData from '../assets/blogdata';


const Singleblog = () => {
  const blog = blogData[0]; // Assuming you want to use the first blog entry

  return (
    <>
      <div style={{backgroundColor:"#e8e8e8"}} className='container'>
        <div className='row'>
          
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <div className="blog-content">
              <h2>{blog.title}</h2>
              <p>{blog.content}</p>
              <p><span className="text-primary">Author: </span>{blog.author}</p>
              <p><span className="text-primary">Published on: </span>{blog.publishedDate}</p>
              
              <img className="image-fluid custom-imageBLOG" src={blog.image} alt="" />
              
              <article>
                
                
                <p className='title bg-dark text-light'>{blog.description}</p>
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
