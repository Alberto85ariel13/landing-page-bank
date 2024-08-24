import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { dataTestimonials } from '../Testimonials.data'
import { Reveal } from '@/components/Reveal'
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules'

export function Slide() {
    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                678: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            }}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay ]}
            className="h-[250px] w-full md:max-w-7xl"
        >
            {dataTestimonials.map(({ id, name, date, testimonial, bank }) => (
                <SwiperSlide key={id} className="my-5 cursor-pointer md:px-10">
                    <Reveal>
                        <div className="flex">
                            <div className='w-6 h-6 bg-[#4654C8] text-center rounded-full  shadow-2xl mr-2 text-white'>
                                {name[0].toUpperCase()}    
                            </div>
                            <div className='block'>
                                <h4 className="mr-2">{name}</h4>
                                <p className="text-gray-500">{date}</p>
                                <h4 className="bg-gray-300 rounded px-2 w-fit text-xs text-gray-700">{bank}</h4>
                            </div>
                        </div>
                        <div className="my-5 ml-3">
                            👍 {testimonial}
                        </div>
                    </Reveal>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
