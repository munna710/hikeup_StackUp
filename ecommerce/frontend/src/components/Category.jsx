import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

export default function Category({ title, imgSrc, link }) {
  return (
    <Link to={link} className="text-decoration-none">
      <Card className="max-w-48 max-h-sm sm:max-w-64">
        <Card.Img variant="top" src={imgSrc} />
        <Card.ImgOverlay className="d-flex justify-content-center align-items-center bg-black" style={{ transition: 'background 0.5s ease-out' }}>
          <h3 className="text-2xl font-bold tracking-widest uppercase p-4 bg-black-30 text-white">{title}</h3>
        </Card.ImgOverlay>
      </Card>
    </Link>
  );
}

