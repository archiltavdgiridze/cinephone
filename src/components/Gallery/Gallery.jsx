import React, { useState } from "react";
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

  console.log(images);

  return (
    <div className="gal_body">
      <h1>Adjarian Film Tales' gallery</h1>

      <div className="gallery_images">
        {Object.keys(images).map((imageName, index) => (
          <img key={index} src={images[imageName]} alt={imageName} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
