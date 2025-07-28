import Image from "next/image";
const Card = ({image, text, link, linkText}: {image: string, text: string, link: string, linkText: string}) => {
    return (
        <div className="text-[#fff] bg-[#23354980] py-[22px] px-[55px] rounded-[20px] border-[#FF7700] border max-w-[560px] flex flex-col gap-[12px] text-[20px] leading-[22px] m-auto">
            <Image  src={`/images/${image}`} alt="Card" width={224} height={77} />
            <p>
                {text}
            </p>
            <a href={link} target={`_blank`} className={`text-[#FF7700]`}>{linkText}</a>
        </div>
    )
}

export default Card