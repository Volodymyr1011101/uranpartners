import Image from "next/image";
import {Oswald} from "next/font/google";

const oswald = Oswald({subsets: ['latin']})
const Commissions = () => {
    const content = [
        {
            title: `Revenue Share Up to <span class=${oswald.className}>50%</span>`,
            description: 'More traffic, more earnings — it\'s that simple. No negative carryover. No hidden conditions'
        },
        {
            title: `CPA Deals Up to <span  class=${oswald.className}>500</span> EUR per player`,
            description: 'Optimized for high-performance affiliates focused on fast ROI'
        },
        {
            title: 'Hybrid Offers ',
            description: 'Rev Share + CPA. Why choose one when you can have both? Get a hybrid deal built for today’s wins and tomorrow’s growth'
        },
        {
            title: 'Special Offers & VIP Deals',
            description: 'Exclusive promos and personalized terms. Have high-quality traffic or a large audience? Get in touch for exclusive conditions and boosted commissions'
        }
    ]
    return (
       <div className={`pt-[36px] px-5 md:px-16 xl:px-25 2xl:px-[248px] relative z-10 mb-[60px]`} id={`commissions`}>
           <h2 className={`uppercase odyssey text-[#FF7700] text-center text-[35px] mb-[20px] xl:mb-[77px]`}>
               commissions
           </h2>
           <div className={`flex flex-col gap-[27px] xl:flex-row xl:flex-wrap 2xl:gap-x-[172px] xl:gap-y-[82px]`}>
               {content.map((item, index) => (
                   <div key={index} className={`xl:w-[45%] 2xl:w-[40%] flex-grow`}>
                       <div className={`w-[100%]  relative flex justify-center items-center mx-auto mb-6 xl:min-h-[159px]`}>
                           <Image src={'/images/btnBorder.webp'} alt={'border'} width={635} height={169} className={`absolute w-[100%] h-[100%]`}/>
                           <h3 className={`text-white odyssey uppercase text-[24px] w-[fit-content] comm py-[30px] px-6 text-center xl:-text-[32px] 2xl:text-[36px] 3xl:text-[48px]`} dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                       </div>
                       <p className={`text-[#888888] text-[15px]`}>{item.description}</p>
                   </div>
               ))}
           </div>
       </div>
    )
}

export default Commissions