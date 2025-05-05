import Image from "next/image";
import {Oswald} from "next/font/google";

const oswald = Oswald({subsets: ['latin']})

const Bonuses = () => {
    const youGet = [
        {
            title: "personal deals",
            images: '/images/bonusesBorder.webp'
        },
        {
            title: 'fats payouts',
            images: '/images/bonusesBorder.webp'
        },
        {
            title: 'pro-level creatives',
            images: '/images/bonusesBorder.webp'
        },
        {
            title: `<span class=${oswald.className}>24/7</span> support`,
            images: '/images/bonusesBorder.webp'
        }
    ]

    const welcome = [
        {
            title: 'SEO traffic',
            images: '/images/bonusesBorder.webp'
        },
        {
            title: 'paid media traffic',
            images: '/images/bonusesBorder.webp'
        },
        {
            title: 'ambitious affiliates who are ready to grow and earn more',
            images: '/images/bigBonusBorder.webp',
            type: 'big'
        }
    ]

    return (
        <div className={`px-5 md:px-35 xl:px-25 2xl:px-[250px] 3xl:px-[370px] text-white relative z-[4]`} id={`brand`}>
            <div className={`flex flex-col gap-5 mb-[38px] lg:text-center 2xl:max-w-[990px] 2xl:mx-auto`}>
                <h2 className={`odyssey text-[35px] text-[#FF7700] font-[400] uppercase`}>
                    Elevate your traffic. Orbit the profits.
                </h2>
                <p className={`leading-[22px]`}>
                    At Uranus Partners, we turn your traffic into income and your efforts into real results.
                    A powerful mix of casino and betting — combined into a high-performance solution.
                </p>
            </div>
            <div className={`flex flex-col gap-13 lg:flex-row mb-13 xl:gap-10`}>
                <div className={`lg:w-[50%] 3xl:w-[40%]`}>
                    <h3 className={`odyssey text-[35px] text-[#FF7700] font-[400] uppercase mb-6 lg:text-right`}>
                        You get:
                    </h3>
                    {youGet.map((item, i) => (
                        <div className={`w-[100%]  relative flex justify-center items-center mx-auto mb-6 `} key={i}>
                            <Image src={item.images} alt={'border'} width={635} height={169}
                                   className={`absolute w-[100%] h-[100%]`}/>
                            <h3 className={`text-[#FF7700] odyssey uppercase text-[24px] w-[fit-content] comm py-[30px] px-6 text-center xl:-text-[30px] `} dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                        </div>
                    ))}
                </div>
                <div className={`hidden xl:block`}>
                    <Image src={'/images/Girl.webp'} alt={'astronaut'} width={461} height={705}/>
                </div>
                <div className={`lg:w-[50%] 3xl:w-[40%]`}>
                    <h3 className={`odyssey text-[35px] text-[#FF7700] font-[400] uppercase mb-6`}>
                        We welcome:
                    </h3>
                    {welcome.map((item, i) => (
                        <div className={`w-[100%]  relative flex justify-center items-center mx-auto mb-6 xl:${item.type === 'big' && `min-h-[159px]`}`} key={i}>
                            <Image src={item.images} alt={'border'} width={635} height={169}
                                   className={`absolute w-[100%] h-[100%]`}/>
                            <h3 className={`text-[#FF7700] odyssey uppercase text-[24px] w-[fit-content] comm py-[30px] px-6 text-center xl:-text-[30px] `} dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                        </div>
                    ))}
                </div>
            </div>
        <h2 className={`text-[35px] odyssey uppercase`}>
            Let’s grow together — and earn like never before
        </h2>
        </div>
    );
}

export default Bonuses