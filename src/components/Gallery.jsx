import { Image } from "./Image";
import imageData from "../data/images.json";
import { useEffect, useRef, useState } from "react";
import { startUploadFiles } from "../utils/fileManager";

export const Gallery = () => {
  //Estado que vamos a estar manejando en este componte
  const [columns, setColumns] = useState([]);
  const [imagesData, setImagesData] = useState(<></>);

  //Función para agregar las imágenes en una lista de <Image /> y devolverla
  const loadImages = () => {
    let images = [];
    let i = 0;
    imageData.forEach((data) => {
      images.push(
        <Image key={i} id={data.id} image={data.src} alt={data.alt} />
      );
      i++;
    });
    return images;
  };

  //Función para convertir la lista de imágenes en la estructura que necesitamos en la página web
  const generateImages = () => {
    let cantidadImgs = columns.length / 3;
    setImagesData((imagesData) => (
      <>
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 ">
          {columns.slice(0, cantidadImgs)}
        </div>
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 ">
          {columns.slice(cantidadImgs, cantidadImgs * 2)}
        </div>
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 ">
          {columns.slice(cantidadImgs * 2, columns.length - 1)}
        </div>
      </>
    ));
  };
  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return;

    startUploadFiles(target.files);
  };
  const fileInputRef = useRef();
  // Hook que indica el código que se va a ejecutar solo cuando se cree el componente
  useEffect(() => {
    const images = loadImages();
    setColumns(images);
    //console.log(columnsData);
  }, []);

  // Hook que indica el código que se va a ejecutar cuando se cambie el estado de columns
  useEffect(() => {
    generateImages();
    //console.log(columnsData);
  }, [columns]);

  return (
    <div className="row galleryImage">
      {imagesData}
      <div>
        <input
          type="file"
          multiple
          ref={fileInputRef}
          onChange={onFileInputChange}
          style={{ display: "none" }}
        />
        <button
          color="primary"
          onClick={() => {
            fileInputRef.current.click();
          }}
        >
          Haga clic aca para subir una imagen
        </button>
      </div>
    </div>
  );
};
