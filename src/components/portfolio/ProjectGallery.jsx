import { useState } from "react";
import { Maximize2 } from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import { PhotoSlider } from "react-photo-view";

const ProjectGallery = ({ images, title }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewerVisible, setViewerVisible] = useState(false);

  const openViewer = (index) => {
    setActiveIndex(index);
    setViewerVisible(true);
  };

  const imageSlides = images.map((image) => (
    <img
      key={image.src}
      src={image.src}
      alt={image.alt}
      title="View full screen"
    />
  ));

  return (
    <>
      <div className="project-gallery" aria-label={`${title} screenshots `}>
        {images.length > 1 ? (
          <Carousel
            showStatus={false}
            showThumbs={false}
            infiniteLoop
            useKeyboardArrows
            swipeable
            selectedItem={activeIndex}
            onChange={setActiveIndex}
            onClickItem={openViewer}
          >
            {imageSlides}
          </Carousel>
        ) : (
          <button
            className="project-single-image"
            type="button"
            onClick={() => openViewer(0)}
            aria-label={`View ${title} image full screen`}
          >
            {imageSlides}
          </button>
        )}
        <span className="gallery-hint">
          <Maximize2 size={11} /> View full screen
        </span>
      </div>

      <PhotoSlider
        className="portfolio-lightbox"
        images={images.map((image) => ({
          key: image.src,
          src: image.src,
        }))}
        visible={viewerVisible}
        index={activeIndex}
        onIndexChange={setActiveIndex}
        onClose={() => setViewerVisible(false)}
        loop
        maskClosable
        maskOpacity={0.96}
        photoClosable
      />
    </>
  );
};

export default ProjectGallery;
