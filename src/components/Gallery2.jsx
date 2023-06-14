import { Image } from './Image';
import imageData from '../data/images.json'
import { useEffect, useState } from 'react';
import { Column } from './Column';

export const Gallery2 = () => {
  const [columns, setColumns] = useState([])
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
  useEffect(() => {
    const images = loadImages()
    setColumns(images)
    //console.log(columnsData);
  }, [])

  return (
    <div className="row ">
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
        {columns[0]}
        {columns[1]}
      </div>
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
        {columns[2]}
        {columns[3]}
      </div>
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
        {columns[4]}
        {columns[5]}
      </div>
    </div >
  )
}
