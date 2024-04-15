import React from "react";
import LazyLoad from "react-lazyload"; // Import LazyLoad component
import "./Gallery.scss";

const Gallery = () => {
  const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  };

  const images = importAll(
    require.context("../../assets/GalleryPage", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div className="gal_body">
      <h1>Adjarian Film Tales' gallery</h1>

      <div className="gallery_images">
        {Object.keys(images).map((imageName, index) => (
          <LazyLoad key={index} height={200} offset={100}>
            {/* LazyLoad wrapper */}
            <img src={images[imageName]} alt={imageName} />
          </LazyLoad>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
