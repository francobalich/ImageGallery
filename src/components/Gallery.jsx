import { Image } from './Image';

export const Gallery = () => {
  return (
    <div className="row">
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <Image
          image="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
          alt="Boat on Calm Water" />
        <Image
          image="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
          alt="Wintry Mountain Landscape" />
      </div>

      <div className="col-lg-4 mb-4 mb-lg-0">
        <Image
          image="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
          alt="Mountains in the Clouds" />

        <Image
          image="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
          alt="Boat on Calm Water" />
      </div>

      <div className="col-lg-4 mb-4 mb-lg-0">
        <Image
          image="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
          alt="Waves at Sea" />
        <Image
          image="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
          alt="Yosemite National Park" />
      </div>
    </div>
  )
}
