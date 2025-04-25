'use client'
import './styles.scss'
import {useEffect} from "react";
const FAQ = () => {

    const content = [
        {
            title: 'Who are Uranus Partners?',
            description: ['We are your strategic partner in affiliate success, helping you to monetize quality traffic through high-performance casino and betting offers.']
        },
        {
            title: 'How and when will I get paid?',
            description: ['Get paid monthly (NET 30), without delays. Choose your preferred method — USDT, BTC, or bank transfer — whatever works best for you.']
        },
        {
            title: 'What commission models do you offer?',
            description: ['We’ve got options: RevShare (up to 50%), CPA (up to €500 per player), and flexible Hybrid deals. Just ping our affiliate manager to get started.']
        },
        {
            title: 'Do you carry over negative balances?',
            description: ['Every month starts at €0 — no carryover, just a fresh chance to earn.']
        },
        {
            title: 'Can I promote your brands on multiple sites?',
            description: ['Absolutely. Manage all your links, sites, and stats from one account — no limitations.']
        },
        {
            title: 'Are your brands licensed?',
            description: ['Yes, all our brands are licensed by Curacao and the Malta Gaming Authority, ensuring safe and regulated operations.']
        },
        {
            title: 'How often are my stats updated?',
            description: ['Your stats update every hour — stay on top of performance in real time.'],
        },
        {
            title: 'Can I earn more by referring other affiliates?',
            description: ['Yes! Invite other webmasters and get 5% of their lifetime revenue. Expand your earnings by growing your network.']
        },
        {
            title: 'Can you create custom promo materials?',
            description: ["Absolutely. Let us know what you need — format, size, and style — and our design team will deliver custom creatives made for your traffic."]
        },
        {
            title: 'What traffic types are not allowed?',
            description: [
                '– Misleading or false claims (e.g. incorrect information about the casino: fake sign-up bonuses, exaggerated bonus percentages, number of free spins, etc.).',
                '– Fraud (e.g. multiple accounts, abnormally high percentage of bonus hunters, etc.).',
                ' – Any form of brand traffic (including PPC and SEO using brand-related keywords).',
                ' – Incentivized traffic under CPA is strictly prohibited. This includes any traffic attracted with schemes like "how to beat the casino" or similar misleading promises.',
                ' – Traffic from fake social media accounts impersonating our projects or accounts visually associated with the official brand (use of logos, branding, or acting on behalf of the casino).'
            ]
        },
        {
            title: 'Can I get exclusive terms?',
            description: ['Absolutely. VIP partners enjoy custom commission deals, unique bonuses, and access to exclusive promos. Reach out to unlock your deal.']
        }
    ]
    useEffect(() => {
        document.querySelectorAll('.accordion-header').forEach(button => {
            button.addEventListener('click', () => {
                const item = button.parentElement;
                const content:HTMLDivElement | null = item!.querySelector('.accordion-content');
                const arrow = item!.querySelector('.triangle');
                arrow!.classList.toggle('active');
                item!.classList.toggle('active');

                if (item!.classList.contains('active')) {
                    content!.style.maxHeight = content!.scrollHeight + 30 + 'px';
                } else {
                    content!.style.maxHeight = '';
                }
            });
        });
    }, []);
    return (
        <div className="px-4 xxm:px-8 relative z-10 m:px-16 l:px-[124px] mb-[72px] xl:flex justify-between" id='faq'>
            <div className={`flex flex-col gap-4 mb-6 text-[#FF7700] xl:w-[50%] 2xl:w-[30%]`}>
                <h1 className={`text-[#FBF8F3] text-[32px] font-semibold odyssey lg:text-[50px]`}>FAQ</h1>
                <p className={`uppercase font-[700] lg:text-[24px] leading-[32px]`}>
                    Need help? Check out our most frequently asked questions.
                </p>
            </div>
            <div className="accordion relative z-10 flex flex-col gap-2 mb-6 xl:w-[43%] 2xl:w-[59%]">
                {content.map((item, index) => (
                    <div className="accordion-item rounded-[16px] overflow-hidden" key={index}>
                        <button
                            className={`accordion-header px-4 py-4 flex gap-6 w-full items-center  text-left text-[20px] leading-[32px] font-bold text-[#FF7700] hover:cursor-pointer uppercase`}>
                            <span>{item.title}</span> <span className={`triangle`}></span></button>
                        <div className="accordion-content">
                            {item.description.length > 1 ?
                                <ul className={`flex flex-col gap-2 pb-4`}>
                                    {item.description.map((description, index) => (
                                        <li key={index}
                                            className={`leading-[28px] list-decimal list-inside`}>{description}</li>
                                    ))}
                                </ul> : item.description.map((description, index) => (
                                    <p key={index} className={`text-[16px] leading-[28px] pb-4`}>{description}</p>
                                ))
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQ