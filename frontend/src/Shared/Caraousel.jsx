import React, { useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import ProductCard from './ProductCard'

const Caraousel = ({ data }) => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <div className=" mx-auto mt-10 relative">
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
        spaceBetween={5}
        slidesPerView={4}
        onInit={(swiper) => {
          // Connect buttons after Swiper initializes
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
          swiper.navigation.init()
          swiper.navigation.update()
        }}
      >
        {data.map((ele, index) => (
          <SwiperSlide key={index}>
            <div key={index}>
                <ProductCard  product={ele}/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Caraousel
