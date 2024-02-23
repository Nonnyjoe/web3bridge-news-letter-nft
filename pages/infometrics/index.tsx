import type { NextPage } from "next";
import Head from "next/head";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Bars3Icon as MenuIconSolid, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from "react";

export default function Infometrics() {
    return (
        <div className=" w-full md:h-fit h-fit px-5 py-5 md:py-11 md:px-20 mt-16 md:mt-20 md:mb-5 ">
            <h1 className=' text-4xl text-center mb-10 md:mb-14 text-red-600 font-poppins font-bold'> Infometrics </h1>
            <div className="flex justify-center items-center">
            <div className="md:flex gap-10 justify-center md:justify-evenly w-fit md:h-[25vh] h-auto items-center">
                <div className=" shadow-md py-10 px-5 w-60 bg-[#FDF3FC] rounded-2xl justify-between gap-5 text-[#0E2948] mb-5 md:mb-0">
                    <p className=" font-mono font-bold text-5xl text-center mb-5">
                        2
                    </p>
                    <p className=" text-center">
                        News Letters
                    </p>
                </div>
                <div className="shadow-md py-10 px-5 w-60 bg-[#FDF3FC] rounded-2xl justify-between gap-5 text-[#0E2948] mb-5 md:mb-0">
                    <p className=" font-mono font-bold text-5xl text-center mb-5">
                        2
                    </p>
                    <p className=" text-center">
                        Unique NFTs
                    </p>
                </div>
                <div className="shadow-md py-5 px-5 w-60 bg-[#FDF3FC] rounded-2xl justify-between gap-5 text-[#0E2948] mb-5 md:mb-0">
                    <p className=" font-poppins text-center text-base mb-3">
                        You Own
                    </p>
                    <p className=" font-mono font-bold text-5xl mb-3 text-center">
                        2
                    </p>
                    <p className=" font-poppins text-base text-center">
                        Out of 2
                    </p>
                </div>
                <div className="shadow-md py-10 px-5 w-60 bg-[#FDF3FC] rounded-2xl justify-between gap-5 mb-5 md:mb-0">                    
                    <p className=" font-mono font-bold text-5xl mb-5 text-center text-[#0E2948]">
                        60
                    </p>
                    <p className=" text-center text-[#0E2948]">
                        Total Mints
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
}