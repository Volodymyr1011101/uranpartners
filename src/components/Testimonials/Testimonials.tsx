import Card from "@/components/Testimonials/Card";

const Testimonials = () => {
    return (
        <div className={`pt-26 flex flex-col items-center gap-[56px] px-4 mb-25`}>
            <h2 className={`uppercase font-[400] text-[#FF7700] text-[35px] odyssey text-center`}>
                testimonials
            </h2>

            <Card/>
        </div>
    )
}

export default Testimonials;