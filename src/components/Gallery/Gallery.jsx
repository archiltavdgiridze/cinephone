import React from "react";
import './Gallery.scss'
const Gallery = () => {
  return <div className='gal_body'>
    <div className="gallery">
      <input type="checkbox" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((e) => (
        <img key={e} src={'https://picsum.photos/100'} alt={e} />
      ))}
    </div>
  </div>;
};

export default Gallery;
