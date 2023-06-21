import { Image } from './Image';
import imageData from '../data/images.json'
import { useEffect, useState } from 'react';
import { Column } from './Column';

export const Gallery2 = () => {
  const [columns, setColumns] = useState([])
  const [imagesData, setImagesData] = useState(<></>)

  const loadImages = () => {
    let images = []
    let i = 0
    imageData.forEach(data => {
      images.push(<Image
        key={i}
        image={data.src}
        alt={data.alt} />)
      i++
    });
    return images
  }
  const generateImages = () => {
    let cantidadImgs = columns.length / 3
    setImagesData(imagesData =>
      <>
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 ">
          {columns.slice(0,cantidadImgs)}
        </div>
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 ">
          {columns.slice(cantidadImgs,cantidadImgs*2)}
        </div>
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 ">
          {columns.slice(cantidadImgs*2,columns.length-1)}
        </div>
      </>
    )
  }
  useEffect(() => {
    const images = loadImages()
    setColumns(images)
    //console.log(columnsData);
  }, [])

  useEffect(() => {
    generateImages()
    //console.log(columnsData);
  }, [columns])

  return (
    <div className="row galleryImage">
      {imagesData}
    </div >
  )
}
