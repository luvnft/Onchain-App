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
import Artpiece from 'src/components/Artpiece';

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
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <Artpiece title='The Colosseum' source={'/the-colosseum.jpeg'} description='Roman colosseum circa 2AD'/>
            <Artpiece title='Man' source={'/man.jpeg'} description='Roman colosseum circa 2AD'/>
            <Artpiece title='90' source={'/ninety.jpeg'} description='Roman colosseum circa 2AD'/>
            <Artpiece title='The Way of Life' source={'/the-way-of-life.jpeg'} description='Roman colosseum circa 2AD'/>
            <Artpiece title= 'Gogh!' source={'/go.jpeg'} description='Roman colosseum circa 2AD'/>

          </div>
    </div>
      </section>
      <Footer />
    </div>
  );
}
