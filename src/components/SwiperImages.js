import { Navigation, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { colors } from '../colors';
import { useEffect, useState } from 'react';

var SwiperImages = (props) => {
  var { images } = props
  var [imageView, setImageView] = useState('')

  useEffect(() => {
    setImageView(images[0].image)
    window.scrollTo(0, 0)
  }, [images])

  return <div className='flex flex-col w-96'>
    <div className={`h-96 w-full bg-cover bg-no-repeat mb-10 rounded-md`} style={{backgroundImage: `url(${imageView})`}}></div>
    <div className='flex flex-1 w-full'>
      <Swiper
        modules={[Navigation, A11y]}
        navigation
        spaceBetween={50}
        slidesPerView={4}
      >
        {images.map(item => <SwiperSlide>
          <div className={`${images.filter(i => i.image === imageView).length > 0 && images.filter(i => i.image === imageView)[0].image === item.image ? `border-4 border-${colors.primary}` : 'opacity-50'}
          h-24 w-24 bg-cover bg-no-repeat hover:border-4 border-${colors.primary} rounded-md`} 
          style={{backgroundImage: `url(${item.image})`}}
          onClick={() => setImageView(item.image)}></div>
        </SwiperSlide>)}
      </Swiper>
    </div>
  </div>
}

export default SwiperImages