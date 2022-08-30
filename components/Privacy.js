import { useEffect } from 'react'
import LandingPageSection from './LandingPageSection'
export default function Privacy(){
    useEffect(() => {

    }, []);    

    return (<>

    <LandingPageSection>
    <spam className="privacy-title font-['neue_metana_bold']">
        Privacy Policy
    </spam>
    <div className="scroll-box font-['basier_circle']">
    In order to set up a digital asset wallet, a private key (your unique key phrase that looks like a combination of letters and digits) needs to be created and securely stored. Non-custodial (or self-custodial) wallets, such as MetaMask, require you to safekeep the private key by yourself. This means you have full control and responsibility, and will have to take precautions to protect your funds. If you lose the password you set up for your wallet or the key phrase, you will lose access to your assets forever. In order to set up a digital asset wallet, a private key (your unique key phrase that looks like a combination of letters and digits) needs to be created and securely stored. Non-custodial (or self-custodial) wallets, such as MetaMask, require you to safekeep the private key by yourself. This means you have full control and responsibility, and will have to take precautions to protect your funds. If you lose the password you set up for your wallet or the key phrase, you will lose access to your assets forever. This means you have full control and responsibility, and will have to take precautions to protect your funds. If you lose the password you set up for your This means you have full control and responsibility, and will have to take precautions to protect your funds. If you lose the password you setTimeout
    </div>
    <div className="flex flex-col justify-center items-center content-center">
        <spam className="privacy-sub font-['neue_metana_regular']">i am your <b className="font-['neue_metana_bold']">wallet.</b></spam>
        <spam className="font-['basier_circle']">An NFT-centric wallet for the curious ones. </spam> 
        <spam className="font-['basier_circle']">Experience the digital world like never before.</spam>
    </div>
    </LandingPageSection>
    </>)
}