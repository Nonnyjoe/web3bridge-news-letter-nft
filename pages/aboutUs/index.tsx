import type { NextPage } from 'next';
import Head from 'next/head';

export default function AboutUs () {
    return (
        <div className=' py-20 md:pb-[5rem] md:pt-[5rem] md:px-20 px-5 bg-[#FDF3FC]'>
            <h1 className=' text-4xl text-center mb-10 md:mb-14 text-red-600 font-poppins font-bold'> About Us </h1>
            <div className='md:flex gap-5'>
                <div className=' md:w-1/2 md:mt-12 md:text-xl mb-10 md:mb-0 '>
                    <p className=' font-poppins md:leading-10'>
                        The Eden pass is the first participate-2-earn deflationary NFT that grants access to a randomized scratch card based battle hosted by Battle Eden. It is the ultimate degen play and purely experimental.
                    </p>
                </div>
                <div className=' md:w-1/2 flex items-center justify-center'>
                    <img src="images/web3bridgeNft.svg" alt="" className=" w-64 md:w-[27rem] md:h-[20rem]"/>
                </div>
            </div>
        </div>
    )
}