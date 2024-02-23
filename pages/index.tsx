import type { NextPage } from 'next';
import Head from 'next/head';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Header from './components/header';
import Banner from './banner';
import AboutUs from './aboutUs';
import Infometrics from './infometrics';
import Footer from './components/Footer/footer';

export default function Home() {
    return (
      <>
        <Head>
          <title>Web3bridge Newletter Nft</title>
          <meta
            content="Web3bridge Newletter Nft website for minting Nfts attached to monthly newletters"
            name="description"
          />
          <link href="/images/web3bridge.ico" rel="icon" />
        </Head>
        <body>
          <Banner />
          <Infometrics />
          <AboutUs />
          <Footer />
        </body>
      </>
    )
}