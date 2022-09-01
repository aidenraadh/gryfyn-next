import Link from 'next/link'
import LandingPageSection from '../components/LandingPageSection'
import Header from '../components/Header'
import PageHead from '../components/PageHead'

export default function CountryResidenceNeeded(){   
    Link
    return (<>
    <PageHead/>
    <Header/>
    <LandingPageSection classes={'footer-description'}>
    <spam className="privacy-title font-['neue_metana_bold'] text-yellow">
        Why is your country of residence needed?
    </spam>
    <div className="scroll-box font-['basier_circle']">
    In order to set up a digital asset wallet, a private key (your unique key phrase that looks like a combination of letters and digits) needs to be created and securely stored. Non-custodial (or self-custodial) wallets, such as MetaMask, require you to safekeep the private key by yourself. This means you have full control and responsibility, and will have to take precautions to protect your funds. If you lose the password you set up for your wallet or the key phrase, you will lose access to your assets forever. In order to set up a digital asset wallet, a private key (your unique key phrase that looks like a combination of letters and digits) needs to be created and securely stored. Non-custodial (or self-custodial) wallets, such as MetaMask, require you to safekeep the private key by yourself. This means you have full control and responsibility, and will have to take precautions to protect your funds. If you lose the password you set up for your wallet or the key phrase, you will lose access to your assets forever. This means you have full control and responsibility, and will have to take precautions to protect your funds. If you lose the password you set up for your This means you have full control and responsibility, and will have to take precautions to protect your funds. If you lose the password you setTimeout
    </div>
    <div className="flex flex-col items-center content-center justify-center">
        <spam className="privacy-sub font-['neue_metana_regular']">i am your <b className="font-['neue_metana_bold']">wallet.</b></spam>
        <spam className="font-['basier_circle']">An NFT-centric wallet for the curious ones. </spam> 
        <spam className="font-['basier_circle']">Experience the digital world like never before.</spam>
    </div>
    </LandingPageSection>
    <span className='fixed bottom-0 right-0 flex justify-end w-full gap-8 p-6 bg-black'>
        <Link href="/privacy-policy"><a>Privacy Policy</a></Link>
        <Link href="/cookies-policy"><a>Cookies Policy</a></Link>
        <Link href="/terms-and-conditions"><a>Terms &#38; Conditions</a></Link>
        <Link href="/why-is-your-country-of-residence-needed"><a>Why is your country of residence needed?</a></Link>
    </span>     
    </>)
}