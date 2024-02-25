import type { NextPage } from "next";
import Head from "next/head";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Bars3Icon as MenuIconSolid, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from "react";
import { useContractRead } from 'wagmi'
import NftContract from "../../utils/addresses";
import NftAbi from "../../utils/abi.json"
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi';
import { MetaMaskInpageProvider } from "@metamask/providers";
import * as React from "react";
import { JsonRpcProvider, ethers } from "ethers";

declare global {
    interface Window{
      ethereum?:MetaMaskInpageProvider
    }
  }

const W3BNftContract = {
    address: NftContract(),
    abi: NftAbi,
} as const;



export default function Infometrics() {
    const { address } = useAccount();
    let [nftCount, setNftCount] = useState(0);
    let [usersNftCount, setUsersNftCount] = useState(0);
    let [totalMints, setTotalMints] = useState(0);

    const readData = async () => {
        const provider = new JsonRpcProvider(`https://endpoints.omniatech.io/v1/matic/mainnet/public`);
        const nftContract = new ethers.Contract(NftContract(), NftAbi, provider);
        const usersNftCount = address ? await nftContract.totalMints(address) : 0;
        const nftCount = await nftContract.totalNft();
        let totalMints = 0;
        let i = 1;
        for (i = 1; i <= nftCount; i++) {
            const allNftData = await nftContract.allNftData(i);
            totalMints += Number(BigInt(allNftData.TotalMinted));
        }

        setNftCount(Number(nftCount));
        setUsersNftCount(Number(usersNftCount));
        setTotalMints(totalMints);
    }

    readData();


    return (
        <div className=" w-full md:h-fit h-fit px-5 py-5 md:py-11 md:px-10 lg:px-20 mt-16 md:mt-20 lg:mb-10 ">
            <h1 className=' text-4xl text-center mb-10 md:mb-5 lg:mb-14 text-red-600 font-poppins font-bold'> Infometrics </h1>
            <div className=" flex justify-center items-center">
            <div className=" md:flex gap-10 justify-center md:justify-evenly sm:w-fit md:w-full md:h-fit lg:h-[25vh] h-auto items-center">
                <div className=" shadow-md py-10 px-5 w-60 md:py-5 md:px-5 lg:py-5 lg:h-40 md:w-1/4 bg-[#FDF3FC] rounded-2xl justify-between gap-5 text-[#0E2948] mb-5 md:mb-0">
                    <p className=" font-mono font-bold text-5xl text-center mb-5">
                        {nftCount ? nftCount : 0}
                    </p>
                    <p className=" text-center font-poppins">
                        News Letters
                    </p>
                </div>
                <div className="shadow-md py-10 px-5  md:py-5 md:px-5 lg:py-5 lg:h-40 md:w-1/4 w-60 bg-[#FDF3FC] rounded-2xl justify-between gap-5 text-[#0E2948] mb-5 md:mb-0">
                    <p className=" font-mono font-bold text-5xl text-center mb-5">
                        {nftCount ? nftCount : 0}
                    </p>
                    <p className=" text-center font-poppins">
                        Unique NFTs
                    </p>
                </div>
                <div className="shadow-md py-5 px-5 w-60 md:py-5 md:px-5 lg:py-5 lg:h-40 md:w-1/4 bg-[#FDF3FC] rounded-2xl justify-between gap-5 text-[#0E2948] mb-5 md:mb-0">
                    <p className=" font-poppins text-center text-base mb-3">
                        You Own
                    </p>
                    <p className=" font-mono font-bold text-5xl mb-3 text-center">
                        {usersNftCount ? usersNftCount : 0}
                    </p>
                    <p className=" font-poppins text-base text-center">
                        Out of {nftCount ? nftCount : 0}
                    </p>
                </div>
                <div className="shadow-md py-10 px-5 w-60 md:py-5 md:px-5 lg:py-5 lg:h-40 md:w-1/4 bg-[#FDF3FC] rounded-2xl justify-between gap-5 mb-5 md:mb-0">                    
                    <p className=" font-mono font-bold text-5xl mb-5 text-center text-[#0E2948]">
                        {totalMints}
                    </p>
                    <p className=" text-center text-[#0E2948] font-poppins">
                        Total Mints
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
}