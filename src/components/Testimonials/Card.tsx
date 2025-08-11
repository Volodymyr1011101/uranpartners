import Image from "next/image";
const Card = ({image, text, link, linkText}: {image: string, text: string, link: string, linkText: string}) => {
    return (
        <div className="text-[#fff] bg-[#23354980] py-[22px] px-[55px] rounded-[20px] border-[#FF7700] border flex flex-col gap-[12px] text-[20px] leading-[22px] m-auto flex-grow">
            <Image  src={`/images/${image}`} alt="Card" width={224} height={77} />
            <p className={'card-text leading-[22px] xl:leading-[26px]'} title={text}>
                {text}
            </p>
            <a href={link} target={`_blank`} className={`text-[#FF7700]`}>{linkText}</a>
        </div>
    )
}

export default Card