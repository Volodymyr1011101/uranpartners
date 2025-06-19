import Image from "next/image";

const Hero = () => {
    return (
        <div className={`hero relative pt-[100px] pb-[8vw] 2xl:pb-[13vw] `}>
            <Image src={`/images/Uranus.webp`} alt={`planet`}  width={844} height={824} className={`absolute left-[50%] translate-x-[-50%] w-[59%]`}/>
            <Image src={`/images/roulette.webp`} alt={'roulette'} width={494} height={494} className={`absolute z-[1] w-[30%] right-6 top-[90px]`}/>
            <Image src={'/images/main_logo.webp'} alt={'logo'} width={1910} height={489} className={`relative z-2 pt-[10vw]`}/>
            <div className={`relative z-2 flex flex-col items-center justify-center gap-7`}>

            <h1 className={`uppercase text-[#FF7700] text-center  text-[22px]  text-shadow-lg/30 odyssey title`}>
                Turn Traffic Into Gold With Us
            </h1>
                <a href="https://dashboard.uranpartners.com/partner/register" className={`text-[#fff] uppercase py-[13px] px-[34px] bg-[#FF7700] odyssey text-[18px] m-auto lg:py-[19px] lg:px-50px`} target={'_blank'}> join uranus partners</a>
            </div>
        </div>
    )
}

export default Hero