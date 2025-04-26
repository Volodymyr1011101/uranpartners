import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={`footer px-8 absolute bottom-0 z-20 max-w-[1920px] mx-auto w-full left-[50%] translate-x-[-50%] flex flex-col gap-12 pb-20 md:flex-row md:justify-between items-end lg:px-25 xl:px-25 2xl:px-[109px]`}>
            <div className="flex flex-col gap-3 w-full">
                <Link href="/">
                    <Image src="/images/logo.png" alt="logo" width={263} height={89} />
                </Link>
                <p className="text-white">
                    &copy; 2025 Uranus Partners. All rights reserved.
                </p>
                <Link href="/terms_and_conditions" target="_blank" rel="noopener noreferrer" className={`text-[#FF7700] underline`}>
                    Terms & Conditions.
                </Link>
                <Link href="/privacy" target="_blank" rel="noopener noreferrer" className={`text-[#FF7700] underline`}>
                    Privacy Policy
                </Link>
            </div>
            <div className="flex flex-col gap-6 w-full md:w-[initial]">
                <div className={`flex flex-col gap-1`}>
                    <p className="text-white">
                        E-mail:
                    </p>
                    <a href="mailto:affiliates@uranpartners.com" className={`text-[#FF7700] underline`}>affiliates@uranpartners.com</a>
                </div>
                <div className={`flex flex-col gap-1`}>
                    <p className="text-white">
                        Telegram
                    </p>
                    <a href="https://t.me/uranusaffiliates" className={`text-[#FF7700] underline`}>@uranusaffiliates</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;