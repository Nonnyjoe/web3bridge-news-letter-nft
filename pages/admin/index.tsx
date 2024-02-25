import type { NextPage } from 'next';
import Head from 'next/head';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Header from '../components/header';
import Banner from './components/banner';
import AboutUs from '../aboutUs';
import Infometrics from '../infometrics';
import Footer from '../components/Footer/footer';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
    return (
      <>
        <Head>
          <title>Web3bridge Newletter Nft</title>
          <meta
            content="Web3bridge Newsletter Nft website for minting Nfts attached to monthly newletters"
            name="description"
          />
          <link href="/images/web3bridge.ico" rel="icon" />
        </Head>
        <body>
          <ToastContainer />
          <Banner />
          <Infometrics />
          <AboutUs />
          <Footer />
        </body>
      </>
    )
}