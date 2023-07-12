import React, { useContext, useEffect, useState } from "react";
import { Gallery } from "../components/Gallery";
import { Menu } from "../components/Menu";
import { useParams } from "react-router-dom";
import { Image } from "../components/Image";
import { useImageStore } from "../hooks/useImageStore";

export const ImagePage = () => {
  const params = useParams();
  const [img, setImg] = useState({});
  // Se usa al imageStore para obtener las imagenes actuales del usuario
  // Se renombre images por imageList (Solo en este archivo)
  const { images: imageList } = useImageStore()

  useEffect(() => {
    const img = imageList.filter((x) => x.id === params.id)[0];
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
