import Image from "next/image";
const Card = () => {
    return (
        <div className="text-[#fff] bg-[#23354980] py-[22px] px-[55px] rounded-[20px] border-[#FF7700] border max-w-[560px] flex flex-col gap-[12px] text-[20px] leading-[22px]">
            <Image  src={`/images/spicycasinos.png`} alt="Card" width={224} height={77} />
            <p>
                Partnering with Uranus Partners has been nothing short of excellent. Their team is reliable, responsive, and genuinely invested in building strong, long-term relationships. The brands they promote convert well and offer real value to players, which makes our collaboration smooth and rewarding. We’re proud to work with such a trustworthy and efficient affiliate program.
            </p>
            <a href="https://spicycasinos.com" target={`_blank`} className={`text-[#FF7700]`}>www.spicycasinos.com</a>
        </div>
    )
}

export default Card