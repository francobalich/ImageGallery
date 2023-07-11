import { Image } from "./Image";
//import imageData from "../data/images.json";
import { useEffect, useState } from "react";
import { AddImageForm } from "./AddImageForm";
import { MDBBtn } from 'mdb-react-ui-kit';
import { useAuthStore } from "../hooks/useAuthStore";
import { useImageStore } from "../hooks/useImageStore";

export const Gallery = () => {
  //Estado que vamos a estar manejando en este componte
  const { user } = useAuthStore()
  const [columns, setColumns] = useState([]);
  const [statusForm, setStatusForm] = useState(false);
  const [imagesData, setImagesData] = useState(<></>);
  const [imageList, setImageList] = useState([])
  const { getAllImages } = useImageStore()
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
          {columns.slice(cantidadImgs * 2, columns.length )}
        </div>
      </>
    ));
  };

  // Hook que indica el código que se va a ejecutar cuando se cambie el estado de columns
  useEffect(() => {
    generateImages();
  }, [columns]);

  useEffect(() => {
    getAllImages(user.email).then((imageList) => {
      const images = loadImages(imageList)
      setColumns(images)
    })
  }, [imageList])
  return (
    <section className="galleryComponent">
      <div className="row galleryImage">
        {imagesData}
      </div>
      <MDBBtn type='button'
        style={{ "width": "500px", "margin": "auto" }}
        className='mb-4'
        onClick={() => {
          setStatusForm(true)
        }}
        block>
        Haga clic aca para subir una imagen
      </MDBBtn>
      <AddImageForm status={statusForm} setStatus={setStatusForm} setImageList={setImageList} />
    </section>
  );
};
