'use client'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import type {Swiper as SwiperClass} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Card from "@/components/Testimonials/Card";
import {useRef, useState} from "react";
import SliderButton from "@/components/sliderButton/SliderButton";

const SwiperComponent = () => {
    const [swiper, setSwiper] = useState<SwiperClass | null>(null);
    const slideNext = () => {
        swiper?.slideNext();
    }
    const sliderPrev = () => {
        swiper?.slidePrev();
    }

    return (
        <div className="px-6 slider">
            <SliderButton sliderClick={sliderPrev} side={'prev'}/>
            <Swiper
                // modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={1}
                // navigation
                loop={true}
                pagination={{clickable: true}}
                scrollbar={{draggable: true}}
                onSwiper={(swiper) => setSwiper(swiper)}
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
                {comments.map(item => (
                    <SwiperSlide>
                        <Card image={item.imageRef} link={item.linkRef} linkText={item.linkText} text={item.comment}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <SliderButton sliderClick={slideNext} side={'next'}/>

            {/*<div className="text-white next-slide" onClick={() => {*/}
            {/*    swiper?.slideNext(300)*/}
            {/*    setAnimation()*/}
            {/*}} >*/}
            {/*    <span className={`top-arrow-line line ${active ? 'arrow-active' : ''}`}/>*/}
            {/*    <span className={`middle-arrow-line line ${active ? 'arrow-middle-active' : ''}`}/>*/}
            {/*    <span className={`bottom-arrow-line line ${active ? 'arrow-active' : ''}`}/>*/}
            {/*    <span className={`additional-line line ${active ? 'active' : ''}`}/>*/}
            {/*</div>*/}
        </div>

    )
}

export default SwiperComponent;


const comments = [
    {
        imageRef: 'spicycasinos.png',
        linkRef: 'https://spicycasinos.com',
        linkText: 'www.spicycasinos.com',
        comment: 'Partnering with Uranus Partners has been nothing short of excellent. Their team is reliable, responsive, and genuinely invested in building strong, long-term relationships. The brands they promote convert well and offer real value to players, which makes our collaboration smooth and rewarding. We’re proud to work with such a trustworthy and efficient affiliate program.'
    },
    {
        imageRef: 'TypedeWhiteYes1.png',
        linkRef: 'https://mblizard.ca',
        linkText: 'www.mblizard.ca',
        comment: 'Our collaboration with Uran Partners has exceeded expectations. The team is proactive, results-driven, and always available. It’s rare to find such consistency and transparency.'
    },
    {
        imageRef: 'TypedeWhiteYes1.png',
        linkRef: 'https://gamblizard.ca',
        linkText: 'www.gamblizard.ca',
        comment: 'From day one, Uran Partners has proven to be a top-tier affiliate network. Fast payouts, honest communication, and measurable growth — exactly what we need in this competitive space.'
    },
    {
        imageRef: 'TypedeWhiteYesde.png',
        linkRef: 'https://gamblizard.de',
        linkText: 'www.gamblizard.de',
        comment: 'We’ve seen strong ROI since partnering with Uran Partners. Their team is knowledgeable and easy to work with, and their traffic converts exceptionally well.'
    },
]