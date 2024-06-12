import React from "react";

const Footer = () => {
    return (
        <>
            <div className="flex justify-center items-center px-16 py-1.5 mt-12 w-full bg-blue-950 max-md:px-5 max-md:mt-10">
                <div className="flex gap-5 justify-between items-center w-full max-md:flex-wrap">
                    <div className="flex gap-2 self-stretch text-base text-center text-neutral-100">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/eba737138117cdaf526e550938fa07efa88ccee3a414f5b19c2cbc3cc3b5cca6?apiKey=bd88937389e442d383d42860de3b76f2&"
                            className="shrink-0 my-auto w-5 aspect-square"
                        />
                        <div className="flex flex-col justify-center rounded-[95px]">
                            <div className="justify-center py-2 rounded-[95px]">
                                Infinitix 2024
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5 justify-center self-stretch my-auto text-base text-center text-white max-md:flex-wrap">
                        <div className="flex flex-col justify-center">
                            <div className="justify-center px-1.5 py-1">Tentang Kami</div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="justify-center px-5 py-1">Syarat dan Ketentuan</div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="justify-center px-9 py-1 max-md:px-5">
                                Kebijakan Privasi
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 self-stretch my-auto">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/431c8e4fd2f63a40c80542cfceac04dec3a07634f92e031116b481c2e520cada?apiKey=bd88937389e442d383d42860de3b76f2&"
                            className="shrink-0 aspect-square w-[26px]"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fca536028e8b9ead32343f3506f40dba4cf7406c066488831cef908dd004568a?apiKey=bd88937389e442d383d42860de3b76f2&"
                            className="shrink-0 aspect-square w-[26px]"
                        />
                        <div className="flex justify-center items-center">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba2846e22d30e9183180070ba380f360b0e9d2827db5bb492aad8b422eb7fd35?apiKey=bd88937389e442d383d42860de3b76f2&"
                                className="aspect-square w-[26px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;