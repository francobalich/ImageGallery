import React, { useContext, useEffect, useState } from "react";
import { Gallery } from "../components/Gallery";
import { Menu } from "../components/Menu";
import { useParams } from "react-router-dom";
import imageData from "../data/images.json";
import { Image } from "../components/Image";

export const ImagePage = () => {
  const params = useParams();
  const [img, setImg] = useState({});
  useEffect(() => {
    const img = imageData.filter((x) => x.id === params.id)[0];
    setImg(img);
  }, []);
  return (
    <>
      <Menu />
      <section className="imgSection">
        <h1>{img.alt}</h1>
        <Image id={img.id} image={img.src} alt={img.alt} />
      </section>
    </>
  );
};
