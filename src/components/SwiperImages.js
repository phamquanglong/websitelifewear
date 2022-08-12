import { Navigation, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { colors } from "../colors";
import { useEffect, useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

var SwiperImages = (props) => {
  var { images } = props;
  var [imageView, setImageView] = useState(images[0].image);

  let [isOpen, setIsOpen] = useState(false);
  let [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [images, photoIndex, imageView]);

  useEffect(() => {
    setImageView(images[0].image);
  }, [images]);

  return (
    <div className="flex flex-col w-96">
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex].image}
          nextSrc={images[(photoIndex + 1) % images.length].image}
          prevSrc={
            images[(photoIndex + images.length - 1) % images.length].image
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
      <div
        onClick={() => setIsOpen(true)}
        className={`h-96 w-full bg-cover bg-no-repeat mb-10 rounded-md cursor-pointer`}
        style={{ backgroundImage: `url(${imageView})` }}
      ></div>
      <div className="flex flex-1 w-full">
        <Swiper
          modules={[Navigation, A11y]}
          navigation
          spaceBetween={50}
          slidesPerView={images.length < 4 ? images.length : 4}
        >
          {images.map((item) => (
            <SwiperSlide>
              <div
                className={`${
                  images.filter((i) => i.image === imageView).length > 0 &&
                  images.filter((i) => i.image === imageView)[0].image ===
                    item.image
                    ? `border-4 border-${colors.primary}`
                    : "opacity-50"
                }
          h-24 w-24 bg-cover bg-no-repeat hover:border-4 border-${
            colors.primary
          } rounded-md`}
                style={{ backgroundImage: `url(${item.image})` }}
                onMouseEnter={() => {
                  setImageView(item.image);
                  setPhotoIndex(
                    images.indexOf(
                      images.filter((i) => i.image === item.image)[0]
                    )
                  );
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperImages;
