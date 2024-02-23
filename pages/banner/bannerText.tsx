import type { NextPage } from "next";
import Head from "next/head";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  Bars3Icon as MenuIconSolid,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import Header from "../components/header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTelegram, faDiscord } from '@fortawesome/free-brands-svg-icons';


export default function BannerText() {
    return(
        <div className=" mt-10 md:mt-5 md:flex justify-evenly px-5 md:px-10 lg:px-20 h-[100%]">
        <div className=" md:w-1/2 md:flex  md:mt-10 ">
            <img src="images/nftCards-web3bridge.png" alt="" className=" w-64 md:w-[30rem] md:h-96"/>
        </div>
        <div className=" md:w-1/2 mt-5 md:mt-5 lg:pt-10">
            <h1 className="text-4xl md:text-5xl text-white mb-5 font-poppins md:leading-[3.5rem] font-extrabold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                Web3bridge Newsletter NFT
            </h1>
            <p className="text-white md:w-4/5 md:text-xl font-poppins md:leading-8">
                Access the biggest raffle draw in Web3 history using your newsletter Nft collection! Each mint increases your chances in the web3bridge end of the year raffle draw. No risk, guranteed reward. So just Mint it!
            </p>
            <div className=" my-5">
                <div className=" w-fit py-2 px-10 text-white bg-red-600 rounded-2xl flex justify-center text-center items-center">
                    <p className=" text-base font-poppins"> Mint Now </p>
                </div>
                <div className="flex space-x-4 mt-5">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} className="w-6 h-6 text-white hover:text-red-600" />
                    </a>
                    <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTelegram} className="w-6 h-6 text-white hover:text-red-600" />
                    </a>
                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faDiscord} className="w-6 h-6 text-white hover:text-red-600" />
                    </a>
                </div>
            </div>
        </div>
    </div>
    )
}