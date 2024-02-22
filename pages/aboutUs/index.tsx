import type { NextPage } from 'next';
import Head from 'next/head';

export default function AboutUs () {
    return (
        <div className='mt-[10rem] px-20'>
            <h1 className=' text-5xl text-center mb-14'> About Us </h1>
            <div className='flex gap-5'>
                <div className=' w-1/2 md:mt-12 md:text-xl'>
                    <p>
                        The Eden pass is the first participate-2-earn deflationary NFT that grants access to a randomized scratch card based battle hosted by Battle Eden. It is the ultimate degen play and purely experimental.
                    </p>
                </div>
                <div className=' w-1/2 flex items-center justify-center'>
                    <img src="images/web3bridgeNft.svg" alt="" className=" w-64 md:w-[27rem] md:h-[20rem]"/>
                </div>
            </div>
        </div>
    )
}