import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import ProductCard from './ProductCard'

const Caraousel = ({ data }) => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <div className="mx-auto mt-10 relative flex justify-center items-center">
      {/* Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border px-3 py-1 rounded-l shadow"
      >
        prev
      </button>

      <button
        ref={nextRef}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border px-3 py-1 rounded-r shadow"
      >
        next
      </button>

      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
          swiper.navigation.init()
          swiper.navigation.update()
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
      >
        {data.map((ele, index) => (
          <SwiperSlide key={index} className='flex justify-center'>
            <ProductCard product={ele} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Caraousel
