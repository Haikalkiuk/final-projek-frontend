import React from 'react';

export default function SearchComponent() {
    return (
        <>
            <div className="flex flex-col justify-center my-auto text-neutral-400">
                <div className="flex flex-col justify-center items-start px-5 py-1.5 w-full bg-amber-50 rounded-[35px] max-md:pr-5">
                    <div className="flex gap-3">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className='w-6 h-6' xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_2136_2267)">
                                <path d="M9.91797 9.9165L12.2513 12.2498" stroke="#616161" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1.75 6.41667C1.75 8.99401 3.83934 11.0833 6.41667 11.0833C7.70758 11.0833 8.87606 10.5592 9.7209 9.71209C10.5628 8.86795 11.0833 7.70309 11.0833 6.41667C11.0833 3.83934 8.99401 1.75 6.41667 1.75C3.83934 1.75 1.75 3.83934 1.75 6.41667Z" stroke="#616161" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2136_2267">
                                    <rect width="14" height="14" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <input type="text" placeholder="Cari apa nih..." />
                    </div>
                </div>
            </div>
        </>
    );
}