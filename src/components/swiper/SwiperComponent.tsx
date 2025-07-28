'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Card from "@/components/Testimonials/Card";
const SwiperComponent = () => {
    return (
        <div className="px-6 slider">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                <SwiperSlide>
                    <Card image={'spicycasinos.png'} link={"https://spicycasinos.com"} linkText={'www.spicycasinos.com'} text={'Partnering with Uranus Partners has been nothing short of excellent. Their team is reliable, responsive, and genuinely invested in building strong, long-term relationships. The brands they promote convert well and offer real value to players, which makes our collaboration smooth and rewarding. We’re proud to work with such a trustworthy and efficient affiliate program.'} />
                </SwiperSlide>
                <SwiperSlide>
                    <Card image={'TypedeWhiteYes1.png'} link={"https://mblizard.ca"} linkText={'www.mblizard.ca'} text={'Our collaboration with Uran Partners has exceeded expectations. The team is proactive, results-driven, and always available. It’s rare to find such consistency and transparency.'} />
                </SwiperSlide>
                <SwiperSlide>
                    <Card image={'TypedeWhiteYes1.png'} link={"https://gamblizard.ca"} linkText={'www.gamblizard.ca'} text={'From day one, Uran Partners has proven to be a top-tier affiliate network. Fast payouts, honest communication, and measurable growth — exactly what we need in this competitive space.'} />
                </SwiperSlide>
                <SwiperSlide>
                    <Card image={'TypedeWhiteYesde.png'} link={"https://gamblizard.de"} linkText={'www.gamblizard.de'} text={'We’ve seen strong ROI since partnering with Uran Partners. Their team is knowledgeable and easy to work with, and their traffic converts exceptionally well.'} />
                </SwiperSlide>
            </Swiper>
        </div>

    )
}

export default SwiperComponent;