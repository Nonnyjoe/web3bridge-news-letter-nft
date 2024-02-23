import Image from 'next/image';
import Contact from './components/contact';
import  Products  from './components/products';
import  Resource  from './components/resource';
import  Socials  from './components/socials';
import  Web3bridge  from './components/web3bridge';
import  Copyright  from './components/copyright';
import LayoutWrapper from '../LayoutWrapper';

export default function Footer() {
  return (
    <div className="bg-white">
      <LayoutWrapper>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:px-10 relative text-black justify-between gap-10 mt-20 mb-10">
          <div className="col-span-2 md:col-span-3 md:w-2/3 lg:w-auto lg:col-span-1">
            <Socials />
          </div>

          <Web3bridge />

          <Products />

          <Resource />

          <Contact />
        </div>
      </LayoutWrapper>
    </div>
  );
}
