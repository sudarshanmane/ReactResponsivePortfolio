import { Carousel } from "react-responsive-carousel";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ProjectImageCarousel = ({ images }) => (
  <PhotoProvider
    className="project-fullscreen-viewer"
    loop
    maskClosable
    maskOpacity={0.95}
    photoClosable
  >
    <Carousel
      className="project-carousel"
      showStatus={false}
      showThumbs={false}
      infiniteLoop
      useKeyboardArrows
    >
      {images.map((image) => (
        <PhotoView key={image.src} src={image.src}>
          <img
            className="project-carousel-image"
            src={image.src}
            alt={image.alt}
            title="Click to view full screen"
          />
        </PhotoView>
      ))}
    </Carousel>
  </PhotoProvider>
);

export default ProjectImageCarousel;
