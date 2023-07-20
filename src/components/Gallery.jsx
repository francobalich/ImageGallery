import { Image } from "./Image";
//import imageData from "../data/images.json";
import { useEffect, useState } from "react";
import { AddImageForm } from "./AddImageForm";
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { useAuthStore } from "../hooks/useAuthStore";
import { useImageStore } from "../hooks/useImageStore";

export const Gallery = () => {
  //Estado que vamos a estar manejando en este componte
  const { user } = useAuthStore()
  const [columns, setColumns] = useState([]);
  const [statusForm, setStatusForm] = useState(false);
  const [imagesData, setImagesData] = useState(<></>);
  const { images: imageList, getAllImages } = useImageStore()
  //Función para agregar las imágenes en una lista de <Image /> y devolverla
  const loadImages = (imageData) => {
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
          {columns.slice(cantidadImgs * 2, columns.length)}
        </div>
      </>
    ));
  };

  // Hook que indica el código que se va a ejecutar cuando se cambie el estado de columns
  useEffect(() => {
    generateImages();
  }, [columns]);
  // Hook que indica el código que se va a ejecutar cuando se cambie el store de imagenes (Redux)
  useEffect(() => {
    getAllImages(user.email).then((imageList) => {
      const images = loadImages(imageList)
      setColumns(images)
    })
  }, [statusForm])
  return (
    <section className="galleryComponent">
      <div className="row galleryImage">
        {imagesData}
      </div>
      <MDBBtn type='button'
        className='btnAddImage'
        onClick={() => {
          setStatusForm(true)
        }}
        block>
        <MDBIcon fas icon="upload" />
      </MDBBtn>
      <AddImageForm status={statusForm} setStatus={setStatusForm} />
    </section>
  );
};
