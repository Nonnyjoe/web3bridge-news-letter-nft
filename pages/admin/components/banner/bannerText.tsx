import type { NextPage } from "next";
import Head from "next/head";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  Bars3Icon as MenuIconSolid,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import Header from "../../../components/header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTelegram, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAccount, useDisconnect, useEnsAvatar, useEnsName, useWaitForTransaction } from 'wagmi'
import { Connector, useConnect } from 'wagmi'
import { useNetwork } from 'wagmi'
import { JsonRpcProvider, ethers } from "ethers";
import NftContract from "../../../../utils/addresses";
import NftAbi from "../../../../utils/abi.json"
import { writeContract } from '@wagmi/core'
import { usePrepareContractWrite, useContractWrite } from 'wagmi'
import Image from "next/image";

export default function BannerText() {
    const { address } = useAccount();
    const { connectors, connect } = useConnect();
    const { chain, chains } = useNetwork();
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [waitingForTransaction1, setWaitingForTransaction1] = useState(false);
    const [waitingForTransaction2, setWaitingForTransaction2] = useState(false);
    const [newTokenValue, setNewTokenValue] = useState('');
    const [disabledValue, setDisableValue] = useState('');

    const toggleModal = () => {
      setIsOpen(!isOpen);
    };

    // Add event listener to handle scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = 'auto'; // Enable scrolling when component unmounts
    };
  }, [isOpen]);


    useAccount ({
        onConnect(data) {
            // console.log(data);
            if (chain?.id != 137) {
                toast.error(`ALERT: Please connect your wallet to Polygon mainnet`, {
                    className: "text-base font-poppins"
                });
            }
        }
    })

    function mint() {
        if (chain?.id != 137) {
            toast.error(`ERROR: Please connect your wallet to Polygon mainnet`, {
                className: "text-base font-poppins"
            });
        } else {
            toggleModal();
        }
    }

    const handleNewTokenChange = (event: any) => {
        setNewTokenValue(event.target.value);
    };

    const handleDisableChange = (event: any) => {
        setDisableValue(event.target.value);
    };

      const { data: newData, isLoading: isLoading1, isSuccess: isSuccess1, write: writeNewCollection, isError: isError1, error: error1 } = useContractWrite({
        address: NftContract() as `0x${string}`,
        // address: '0x1dA1F0b26aDFf35308a1B815AD5528a226b574Ef',
        abi: NftAbi,
        functionName: 'RegisterToken',
        args: [newTokenValue],
        onSuccess(data) {
            console.log('Success', data);
            toast.success(`Transaction submitted onchain, awaiting confirmation.....`,
            {className: "text-base font-poppins"});
            setWaitingForTransaction1(true);
        },
        onError(error) {
            toast.error(`ERROR1: ${findFailureReason(error?.toString() as string)}`,
            {className: "text-base font-poppins"});
        }
      })

      const waitForTransaction = useWaitForTransaction({
        hash: newData?.hash,
        onSuccess(data) {
            console.log('Success', data);

            toast.success(`SUCCESS: New Nft collection created`, {
                autoClose: 5000,
                className: "text-base font-poppins"
            });
            setWaitingForTransaction1(false);
            setNewTokenValue('');
        },
      })


      const { data: disableData, isLoading: isLoading2, isSuccess: isSuccess2, write: writeDisableCollection, isError: isError2, error: error2 } = useContractWrite({
        address: NftContract() as `0x${string}`,
        // address: '0x1dA1F0b26aDFf35308a1B815AD5528a226b574Ef',
        abi: NftAbi,
        functionName: 'disableMinting',
        args: [disabledValue],
        onSuccess(data) {
            console.log('Success', data);
            toast.success(`Transaction submitted onchain, awaiting confirmation.....`,
            {className: "text-base font-poppins"});
            setWaitingForTransaction2(true);
          },
        onError(error) {
            toast.error(`ERROR2: ${findFailureReason(error?.toString() as string)}`,
            {className: "text-base font-poppins"});
        }
      })

      const waitForTransaction2 = useWaitForTransaction({
        hash: disableData?.hash,
        onSuccess(data) {
            console.log('Success', data);

            toast.success(`SUCCESS: Nft Minting for specified collection disabled`, {
                autoClose: 5000,
                className: "text-base font-poppins"
            });
            setWaitingForTransaction2(false);
            setDisableValue('');
        },
      })

    const createToken = async () => {
        console.log(inputValue);
        writeNewCollection?.();
          isSuccess1 && console.log(inputValue); 
    }; 

    const disableMint = async () => {
        console.log(inputValue);
        writeDisableCollection?.();
          isSuccess2 && console.log(inputValue); 
    }; 
    

    function findFailureReason(response: string) {
        // Regular expression to extract the reason
        const reasonRegex = /The contract function "(.*)" reverted with the following reason:\n(.*)\n/;

        // Extracting the reason using regex
        const match = response.match(reasonRegex);

        if (match) {
        const functionName = match[1];
        const reason = match[2];
        
        return reason ;
    } else {
        let defaultRes: string = 'Execution Failure';
        console.log('Reason not found in the block of strings.');
        return defaultRes;
        }
    }


    return(
        <div className=" mt-10 md:mt-5 md:flex justify-evenly px-5 md:px-10 lg:px-20 h-[100%] mb-[6rem] md:mb-0">
        <div className=" md:w-1/2 md:flex  md:mt-10 ">
            <img src="images/nftCards-web3bridge.png" alt="" className=" w-64 md:w-[30rem] md:h-96"/>
        </div>
        <div className=" md:w-1/2 mt-5 md:mt-5 lg:pt-10">
            <h1 className="text-4xl md:text-5xl text-white mb-5 font-poppins md:leading-[3.5rem] font-extrabold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                Web3bridge Newsletter NFT
            </h1>
            <p className="text-white lg:w-4/5 md:text-xl font-poppins md:leading-8">
                Access the biggest raffle draw in Web3 history using your newsletter Nft collection! Each mint increases your chances in the web3bridge end of the year raffle draw. No risk, guranteed reward. So just Mint it!
            </p>
            <div className=" my-5">
                <div className=" w-fit py-2 px-10 text-white bg-red-600 rounded-2xl flex justify-center text-center items-center cursor-pointer hover:bg-red-500 hover:border-red-700 hover:border-1" onClick={mint}>
                    <p className=" text-base font-poppins"> Create new Collection </p>
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
        {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-white p-8 rounded shadow-lg w-[80vw] md:w-[60vw] lg:w-[50vw]  h-fit col-auto">
            <div className=" border w-fit h-fit px-2 py-2 mb-5 flex rounded-full content-center items-center border-red-600 text-red-600 hover:text-white hover:bg-red-600 hover:cursor-pointer hover:shadow-lg float-right" onClick={toggleModal}> 
                <XMarkIcon className="h-6 w-6" />
            </div>
            <div className="mt-10"> 
                <h2 className="text-xl font-bold mb-4 font-poppins">Modify NewsLetter Collections</h2>
                <p className="mb-5 font-poppins">You can either create a new collection or disable minting of an active collection!</p>
                <div className=""> 
                    <div className="md:flex w-full md:gap-10 mb-4 md:mb-2">
                        <form action="" className=" mb-2 md:mb-5 md:w-2/3 ">
                            <p className="md:mb-3 font-poppins font-bold">Register new Collection:</p>
                            <input type="text" name="passcode" id="passcode" value={newTokenValue} className="border h-10 rounded-lg w-full border-gray-400 hover:border-red-600 active:border-red-600 outline-none px-5" onChange={handleNewTokenChange}/>
                        </form>
                        <div className="md:w-1/3 md:pt-8"> 
                            <div className=" md:h-[2.7rem] py-2 px-5 mb-5 text-white bg-red-600 rounded-2xl flex justify-center text-center items-center cursor-pointer hover:bg-red-500 hover:border-red-700 hover:border-1" onClick={createToken}>
                                {waitingForTransaction1 ? <p className=" text-base font-poppins"> Awaiting Confirmation..... </p> : !isLoading1 ? <p className=" text-base font-poppins"> Register Token </p> : <img src="images/icons8-loading-50.png" alt="" className=" w-6 md:w-8 animate-spin"/>}
                            </div>
                        </div>
                    </div>
                    <div className="md:flex w-full md:gap-10">
                        <form action="" className=" mb-2 md:mb-5 md:w-2/3">
                            <p className="md:mb-3 font-poppins font-bold">Disable Minting:</p>
                            <input type="text" name="passcode" id="passcode" value={disabledValue} className="border h-10 rounded-lg w-full border-gray-400 hover:border-red-600 active:border-red-600 outline-none px-5" onChange={handleDisableChange}/>
                        </form>
                        <div className="md:w-1/3 md:pt-8"> 
                            <div className=" md:h-[2.7rem] py-2 px-5 mb-5 text-white bg-red-600 rounded-2xl flex justify-center text-center items-center cursor-pointer hover:bg-red-500 hover:border-red-700 hover:border-1" onClick={disableMint}>
                                {waitingForTransaction2 ? <p className=" text-base font-poppins py-2"> Awaiting Confirmation..... </p> : !isLoading2 ? <p className=" text-base font-poppins"> Disable Minting </p> : <img src="images/icons8-loading-50.png" alt="" className=" w-6 md:w-8 animate-spin"/>}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
          </div>
        </div>
      )}
    </div>
    )
}