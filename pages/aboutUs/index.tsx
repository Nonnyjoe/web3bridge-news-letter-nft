import type { NextPage } from 'next';
import Head from 'next/head';

export default function AboutUs () {
    return (
        <div className=' py-20 md:pb-[5rem] md:pt-[5rem] md:px-20 px-5 bg-[#FDF3FC]'>
            <h1 className=' text-4xl text-center mb-10 md:mb-14 text-red-600 font-poppins font-bold'> About Us </h1>
            <div className='md:flex gap-5'>
                <div className=' md:w-2/3 md:mt-2 md:text-xl mb-10 md:mb-0 '>
                    <p className=' font-poppins md:leading-10'>
                        The Web3bridge newsletter Nft is a monthly free to Mint collection that is attached to every newsletter. Each Nft you own increases your chances of winning
                        in the web3bridge end of the year raffle draw. This raffle draw is an initiative from Web3bridge to reward our loyal community members and also to incentivise and 
                        build our reading culture. This initiative is the first of It's kind from the community and is well positioned to be the first of many to come. Click on the button below to know more about web3bridge.
                    </p>
                    <a href="https://www.web3bridge.com" target="_blank" rel="noopener noreferrer">
                        <div className=" w-fit py-2 px-10 text-white bg-red-600 rounded-2xl flex justify-center text-center items-center mt-5 hover:cursor-pointer">
                            <p className=" text-base font-poppins">Web3bridge Homepage</p>
                        </div>
                    </a>

                </div>
                <div className=' md:w-1/3 flex items-center justify-center'>
                    <img src="images/web3bridgeNft.svg" alt="" className=" w-64 md:w-[27rem] md:h-[20rem]"/>
                </div>
            </div>
        </div>
    )
}