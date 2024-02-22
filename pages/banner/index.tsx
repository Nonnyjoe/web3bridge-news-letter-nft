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
import BannerText from "./bannerText";

export default function Banner() {
  return (
    <div className="relative  w-full">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm brightness-75 contrast-75 h-[40rem] md:h-[38rem]"
        style={{ backgroundImage: 'url("images/Giftsimage.jpeg")' }}
      ></div>
      <div className="relative z-10 ">
        <Header />
        <BannerText />
      </div>
    </div>
  );
}
