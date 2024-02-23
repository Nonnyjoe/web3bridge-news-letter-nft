import Link from 'next/link';
import type { NextPage } from "next";
import Head from "next/head";

export default function Products() {
  return (
    <div className="grid gap-2 md:gap-3">
      <p className="text-red-600 text-sm md:text-base  font-bold font-poppins">Products</p>
      <Link className="font-poppins text-sm md:text-base " href="https://www.web3bridge.com/dapps">
        SafeKeep
      </Link>
      <Link className="font-poppins text-sm md:text-base " href="https://www.web3bridge.com/dapps">
        Chained Thrift
      </Link>
      <Link className="font-poppins text-sm md:text-base " href="https://www.web3bridge.com/dapps">
        Mutual Funds
      </Link>
      <Link className="font-poppins text-sm md:text-base " href="mailto:support@web3bridge.com">
        Got a Suggestion?
      </Link>
    </div>
  );
}
