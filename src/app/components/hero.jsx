import * as React from "react";

export default function Hero() {
    return (
        <>
            <div className="relative px-20 pb-12 mt-16 rounded-lg bg-[linear-gradient(180deg,#48609F_0%,#102A71_100%)] max-md:px-5 max-w-screen-xl mx-auto">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col self-stretch my-auto text-5xl font-black text-amber-50 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/66c0a814d333715f91c3f99020724a4cd399d7b92cd5f98fb5b12cef0ae6a613?apiKey=bd88937389e442d383d42860de3b76f2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/66c0a814d333715f91c3f99020724a4cd399d7b92cd5f98fb5b12cef0ae6a613?apiKey=bd88937389e442d383d42860de3b76f2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66c0a814d333715f91c3f99020724a4cd399d7b92cd5f98fb5b12cef0ae6a613?apiKey=bd88937389e442d383d42860de3b76f2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/66c0a814d333715f91c3f99020724a4cd399d7b92cd5f98fb5b12cef0ae6a613?apiKey=bd88937389e442d383d42860de3b76f2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/66c0a814d333715f91c3f99020724a4cd399d7b92cd5f98fb5b12cef0ae6a613?apiKey=bd88937389e442d383d42860de3b76f2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66c0a814d333715f91c3f99020724a4cd399d7b92cd5f98fb5b12cef0ae6a613?apiKey=bd88937389e442d383d42860de3b76f2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/66c0a814d333715f91c3f99020724a4cd399d7b92cd5f98fb5b12cef0ae6a613?apiKey=bd88937389e442d383d42860de3b76f2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/66c0a814d333715f91c3f99020724a4cd399d7b92cd5f98fb5b12cef0ae6a613?apiKey=bd88937389e442d383d42860de3b76f2&"
                                className="aspect-[1.89] w-[51px]"
                            />
                            <h1 className="mt-8 max-md:max-w-full max-md:text-4xl">
                                Wujudkan Konser Impianmu Hanya Dengan Sekali Klik!
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow max-md:mt-4">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/93b53ec99e080bc636f16b3ae0cde488ee6fc8e5ec45da551a6d479277cf6f33?apiKey=bd88937389e442d383d42860de3b76f2&"
                                className="max-w-full aspect-[1.67] fill-amber-50 w-[190px]"
                            />
                            <div className="flex gap-5 justify-between items-start self-end mt-5">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1902cd516f2c1fee524d9017ce4fcbf5280ad8d796c3dc3ff2156023624342fe?apiKey=bd88937389e442d383d42860de3b76f2&"
                                    className="shrink-0 self-end mt-28 max-w-full aspect-square fill-amber-50 w-[102px] max-md:mt-10"
                                />
                                <div className="shrink-0 self-start rounded-full bg-[linear-gradient(180deg,rgba(255,250,250,0.00)_0%,#EDE2C1_86.89%)] h-[169px] w-[169px]" />
                            </div>
                        </div>
                    </div>
                </div>
                <img loading="lazy" src="/images/hero-person.svg" className="right-0 bottom-0 absolute max-md:block" />
            </div>
        </>
    );
}

