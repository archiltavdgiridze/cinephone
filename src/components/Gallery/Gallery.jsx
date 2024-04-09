import React, { useState } from "react";
import "./Gallery.scss";

const Gallery = () => {
  const [showGallery, setShowGallery] = useState(false);

  const toggleGallery = () => {
    setShowGallery(!showGallery);
  };

  return (
    <div className="gal_body">
      <div className={showGallery ? "gallery expanded" : "gallery"} onClick={toggleGallery}>
        {!showGallery ? (
          [...Array(9)].map((_, index) => (
            <div key={index}></div>
          ))
        ) :
          <div className="circle">
            X
          </div>
        }
      </div>
      {showGallery && (
        <div className="gallery_images">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((e) => (
            <img key={e} alt={e} src="https://picsum.photos/100" />
          ))}
          {/* Add more images */}
        </div>
      )}
    </div>
  );
};

export default Gallery;
