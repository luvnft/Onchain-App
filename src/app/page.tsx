'use client';
import Footer from 'src/components/Footer';
import TransactionWrapper from 'src/components/TransactionWrapper';
import WalletWrapper from 'src/components/WalletWrapper';
import { ONCHAINKIT_LINK } from 'src/links';
import OnchainkitSvg from 'src/svg/OnchainkitSvg';
import { useAccount } from 'wagmi';
import LoginButton from '../components/LoginButton';
import SignupButton from '../components/SignupButton';
import { FrameMetadata } from '@coinbase/onchainkit/frame';
import Image from 'next/image'
// css styling import
import '@coinbase/onchainkit/styles.css';

export default function Page() {
  const { address } = useAccount();

  return (
    <div className="flex h-full w-96 max-w-full flex-col px-1 md:w-[1008px]">
      <section className="mt-6 mb-6 flex w-full flex-col md:flex-row">
        <div className="flex w-full flex-row items-center justify-between gap-2 md:gap-0">
          The Ibssa Onchain Art Institute (IONAI)
          <div className="flex items-center gap-3">
            <SignupButton />
            {!address && <LoginButton />}
          </div>
          
        </div>
      </section>

      <section>
      <Image 
            src=''
            width={500}
            height={500}
            alt='Roman colosseum circa 2AD'
          />
      </section>
      <Footer />
    </div>
  );
}
