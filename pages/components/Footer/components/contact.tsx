import Link from 'next/link';
import type { NextPage } from "next";
import Head from "next/head";

export default function Contact() {
  return (
    <div className="flex flex-col  gap-1 md:gap-5">
      <p className=" text-red-600 font-poppins text-sm md:text-base  font-bold">Contact</p>
      <a
        className="font-poppins text-sm md:text-base cursor-pointer"
        href="mailto:support@web3bridge.com"
      >
        Email Web3Bridge
      </a>
      <a
        className="font-poppins text-sm md:text-base cursor-pointer "
        href="mailto:ayodeji@web3bridge.com"
      >
        Email Our CEO
      </a>
    </div>
  );
}
