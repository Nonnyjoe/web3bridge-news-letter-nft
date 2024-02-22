import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
//@ts-ignore
import merge from 'lodash.merge';
import {
  darkTheme,
  Theme,
} from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
// import { Poppins } from 'next/font/google'
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  arbitrum,
  goerli,
  mainnet,
  optimism,
  polygon,
  base,
  zora,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { Roboto_Condensed, Inter, Ubuntu_Mono, Poppins } from 'next/font/google';

const roboto_c = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '700']
})

const ubuntu_m = Ubuntu_Mono({
  subsets: ['latin'],
  weight: ['400', '700']
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '700']
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '700']
})

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    zora,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'web3bridge-newsletter-nft',
  projectId: 'ffd770356eb359477ca26c568d42f14c',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

const myTheme = merge(darkTheme(), {
  colors: {
    accentColor: '#dc2626',
  },
} as Theme);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <style jsx global>
      {`
        :root {
          --font-inter: ${inter.style.fontFamily};
          --font-roboto: ${roboto_c.style.fontFamily};
          --font-mono: ${ubuntu_m.style.fontFamily};
          --font-poppins: ${poppins.style.fontFamily};
        }
      `}
    </style>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} theme={myTheme}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
    </>
  );
}

export default MyApp;
