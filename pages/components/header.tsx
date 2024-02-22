import type { NextPage } from "next";
import Head from "next/head";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Bars3Icon as MenuIconSolid, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from "react";

export default function Header() {
    const [toggled, setToggled] = useState( false );
    
    const handleToggle = () => {
        setToggled(!toggled );
    }

  return (
    <div className=" p-3 md: pt-5 md:p-4 px-5 md:px-10 lg:px-20 flex gap-5 justify-between bg-transparent">
      <div className=" w-36 md:w-40 h-14">
        <img src="images/web3bridge.svg" alt="" className="h-full w-full" />
      </div>
      <div className="flex gap-2 md:gap-8">
        <div className=" hidden md:flex gap-2 md:gap-4 lg:gap-8 items-center justify-center text-center p-2 text-white">
          <p>Home</p>
          <p>About</p>
          <p>Collections</p>
          <p>FAQ</p>
        </div>
        <div className="items-center justify-center flex">
          <ConnectButton />
        </div>
        <div className="flex items-center justify-center w-8 md:hidden" onClick={handleToggle}>
            {toggled ?
                <XMarkIcon className="h-6 w-6 text-white" />
                :
                <MenuIconSolid className="h-6 w-6 text-white" />
            }
        </div>
      </div>
    </div>
  );
}
