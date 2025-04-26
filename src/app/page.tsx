import Hero from "@/components/hero/Hero";
import Advantages from "@/components/advantages/Advantages";
import Commissions from "@/components/commisions/Commissions";
import Profit from "@/components/profit/Profit";
import Bonuses from "@/components/bonuses/Bonuses";
import Image from "next/image";

export default function Home() {
    return (
        <main className={`wrapper relative`}>
            <Image src={`/images/stone.webp`} alt={'icon'} width={200} height={200} className={`hidden xl:block absolute top-[22%] left-0 z-10`} />
            <Image src={`/images/cube.webp`} alt={'icon'} width={220} height={220} className={`hidden xl:block absolute top-[45%] right-0 z-10`} />
            <Image src={`/images/slotMachineMiddle.webp`} alt={'icon'} width={300} height={300} className={`hidden xl:block absolute top-[65%] left-0 z-[2]`} />
            <Image src={`/images/sphereTop.webp`} alt={'icon'} width={238} height={238} className={`hidden xl:block absolute top-[83%] right-0 z-10`} />
            <Hero/>
            <div className={`main-container pb-[420px] md:pb-[300px]`}>
                <Advantages/>
                <Commissions/>
                <Bonuses/>
            </div>
        </main>
    );
}
