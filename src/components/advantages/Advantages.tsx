import Image from "next/image";

const Advantages = () => {
    const content = [
        {
            title: "Fast, Secure, and Instant Payouts",
            icon: "/images/rocket.webp",
            description: "We offer reliable, partner-friendly payout solutions, including USDT, BTC, and local bank transfers. With multiple withdrawal options and zero delays, you’re always in control of your earnings — efficiently and securely"
        },
        {
            title: "Boost Your Marketing Power with Smarter Tools",
            icon: "/images/brush.webp",
            description: "Unlock high-performing marketing tools: premium banners, conversion-optimized landing pages, and tracking links — all ready for testing. Combined with real-time analytics, our tools help you improve your strategy and boost ROI at every step"
        },
        {
            title: "Casino and Betting — United for Maximum Profit",
            icon: "/images/planet.webp",
            description: "Uranus Partners is a place where Casino and Betting come together to deliver more entertainment, and more profit. Make money, enjoy the process, and grow with us"
        },
        {
            title: "Expand Your Network — and Your Income",
            icon: "/images/astronaut.webp",
            description: "Boost your income by referring other webmasters to the Uranus Partners Program. Earn 5% of their revenue and grow your commissions while building a powerful, success-driven affiliate network"
        }
    ]
    return (
        <div className={`px-6 pt-[24px] m-auto md:px-10 lg:px-14 xl:px-25 2xl:px-[248px] relative `} id={`advantages`}>
            <Image src={'/images/fantasy.png'} alt={'background'} width={2050} height={1367} className={`absolute left-0 top-[-28vw] 2xl:top-[-30vw] hidden xl:block`}/>
            <h2 className={`odyssey text-[35px] uppercase text-center text-white xl:mb-[68px]`}>
                our advantages
            </h2>
            <div className={`flex flex-col gap-2 md:flex-row flex-wrap md:gap-[2vw] xl:gap-[3vw]`}>
                {content.map(advantage => (
                    <div key={advantage.title} className={`flex flex-col md:w-[40%] flex-grow xl:flex-row`}>
                        <Image src={advantage.icon} alt={'icon'} width={167} height={167} className={`mx-auto xl:w-[122px] xl:h-[122px]`}/>
                        <div>
                            <h2 className={`text-[#FF7700] font-[700] uppercase text-left mb-4 leading-[22px] xl:leading-[26px]`}>
                                {advantage.title}
                            </h2>
                            <p className={`text-white text-[15px] leading-[22px] xl:leading-[26px]`}>
                                {advantage.description}
                            </p>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Advantages