'use client';
import type { NextComponentType, NextPageContext } from 'next';
import Link from "next/link";


const Header: NextComponentType<NextPageContext, {}> = () => {


    const handleActiveMenu = () => {
        const burger = document.querySelector(".burger");
        const nav = document.querySelector(".nav");
        burger!.classList.toggle("active");
        nav!.classList.toggle("active-menu");
    }
    return (
        <header className="header">
            <div className={`flex items-center gap-[78px]`}>

            <div className="logo">
                <Link href={'/'}>
                    <img src="./images/logo.png" alt="logo"/>
                </Link>
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    <li onClick={() => handleActiveMenu()}><Link href="/#advantages" className="nav-item uppercase">Advantages</Link></li>
                    <li onClick={() => handleActiveMenu()}><Link href="/#commissions" className="nav-item uppercase">Commissions</Link></li>
                    <li onClick={() => handleActiveMenu()}><Link href="/#brand" className="nav-item uppercase">Our Brand</Link></li>
                    <li onClick={() => handleActiveMenu()}><Link href="/faq" className="nav-item uppercase">FAQ</Link></li>
                    <li onClick={() => handleActiveMenu()}><a href="#connect" className="nav-item uppercase">Contact Us</a></li>
                </ul>
                <div className="cta-btn">
                    <a href="https://dashboard.uranpartners.com/partner/register" target={`_blank`} className={`text-[#fff] no-underline py-[16px] px-10 bg-[#FF7700]`}>Register</a>
                    <a href="https://dashboard.uranpartners.com/partner/login" target={`_blank`} className={`text-[#fff] no-underline border border-solid py-[16px] px-[52px]`}>login</a>
                </div>
            </nav>
            </div>
            <div className="burger" onClick={() => handleActiveMenu()}>
                <span className="line top"></span>
                <span className="line middle"></span>
                <span className="line bottom"></span>
            </div>
            <div className={`uppercase hidden xl:flex gap-[41px]`}>
                <a href="https://dashboard.uranpartners.com/partner/register" target={`_blank`} className={`text-[#fff] no-underline py-[10px] px-[28px] 2xl:py-[16px] 2xl:px-10 bg-[#FF7700]`}>Register</a>
                <a href="https://dashboard.uranpartners.com/partner/login" target={`_blank`} className={`text-[#fff] no-underline border border-solid py-[10px] px-[28px] 2xl:py-[16px] 2xl:px-10`}>login</a>
            </div>
        </header>
    );
};

export default Header;
