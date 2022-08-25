import { useEffect } from "react"
import Script from 'next/script'
import MainLayout from '../components/MainLayout'
import PageHead from '../components/PageHead'


export default function Home(){

    return (<>
        <PageHead/>
        <MainLayout>
            <div id="skrollr-body" className="fixed top-0 left-0 flex gap-0 overflow-hidden tablet:flex-col tablet:h-auto wrapper" 
            data-0="transform: translateX(0%);" data-8000="transform: translateX(-91%);">
            
                <header className="flex flex-col justify-center w-screen h-screen px-32 py-24 tablet:w-full shrink-0 tablet:px-11 mobile:px-4 section">
                    <h1 className="text-5xl font-['neue_metana_regular'] mobile:text-center">
                        A world<br className="mobile:hidden"/> beyond your<br className="mobile:hidden"/>imagination awaits
                    </h1>    
                    <p className="flex items-center mt-10">
                        <span className="relative before:absolute before:rounded-full before:top-2 before:left-2.5 inline-block h-12 mr-6 border-2 rounded-full w-7 anim-scroll-to-explore before:content-[''] before:w-1 before:h-2"></span>
                        Scroll to explore
                    </p>
                </header>        

                <p id="im-your-imagination" className="flex flex-col items-center justify-center w-screen h-screen px-32 py-24 tablet:w-full shrink-0 tablet:px-11 mobile:px-4 section">
                    <span className="relative flex flex-col font-['neue_metana_regular']">
                        <span data-0="animation-play-state: paused;" data-350="animation-play-state: running;" className="text-4xl text-white im-your-imagination-fading-text">
                            I am your
                        </span>
                        <span data-0="animation-play-state: paused;" data-350="animation-play-state: running;" className="text-4xl ml-14 im-your-imagination-fading-text text-['#FFCD32']">
                            imagination
                        </span>
                        <svg data-0="animation-play-state: paused;" data-350="animation-play-state: running;" className="absolute w-20 anim-im-your-imagination-pattern1" id="pattern-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 464.27 475.13">
                            <path fill="#0a9c49" d="M235.33,47.97l-1.75-5.25-1.75,5.25c-29.76,89.27-90.11,149.62-179.37,179.37l-5.25,1.75,5.25,1.75c89.27,29.75,149.62,90.11,179.37,179.37l1.75,5.25,1.75-5.25c29.76-89.27,90.11-149.62,179.37-179.37l5.25-1.75-5.25-1.75c-89.27-29.75-149.62-90.11-179.37-179.37Z"/>
                        </svg>         
                        <svg data-0="animation-play-state: paused;" data-350="animation-play-state: running;" className="absolute w-36 anim-im-your-imagination-pattern2" id="pattern-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 464.27 475.13">
                            <path fill="#0a9c49" d="M235.33,47.97l-1.75-5.25-1.75,5.25c-29.76,89.27-90.11,149.62-179.37,179.37l-5.25,1.75,5.25,1.75c89.27,29.75,149.62,90.11,179.37,179.37l1.75,5.25,1.75-5.25c29.76-89.27,90.11-149.62,179.37-179.37l5.25-1.75-5.25-1.75c-89.27-29.75-149.62-90.11-179.37-179.37Z"/>
                        </svg>                           
                    </span>
                </p>

                <p id=" create-future" className="flex flex-col items-center justify-center w-screen h-screen px-32 py-24 tablet:w-full shrink-0 tablet:px-11 mobile:px-4 section">
                    <span data-0="animation-play-state: paused;" data-1150="animation-play-state: running;" className="flex flex-col items-center justify-center anim-create-future">
                        <span className="mb-6 text-6xl font-['neue_metana_bold'] text-[#F7CE55]">Create</span>
                        <span className="text-xl text-center">
                            the world of the future,<br className="mobile:hidden"/>
                            and witness the boundless<br className="mobile:hidden"/>
                            posibilities of your mind
                        </span>               
                    </span>
                </p>

                <div className="w-screen h-screen px-32 py-24 tablet:w-full shrink-0 tablet:px-11 mobile:px-4 section">
                    <h2>Im you playground</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam sint nobis aut facere labore? Quas dicta voluptates velit, vero distinctio fuga quisquam excepturi autem, molestiae aspernatur ipsum? Ut, sint aut.
                    </p>
                </div>     

                <p className="flex flex-col items-center justify-center w-screen h-screen px-32 py-24 tablet:w-full shrink-0 tablet:px-11 mobile:px-4 section">
                    <span data-0="animation-play-state: paused;" data-2800="animation-play-state: running;" className="flex flex-col items-center justify-center anim-create-future">
                        <span className="mb-6 text-6xl font-['neue_metana_bold'] text-[#FE6B32]">
                            Play
                        </span>
                        <span data-0="animation-play-state: paused;" data-2800="animation-play-state: running;" className="text-xl text-center anim-fade-in" style={{animationDelay: '800ms'}}>
                            any roles of your desire,<br className="mobile:hidden"/>
                            fulfill your fantasies.<br className="mobile:hidden"/>
                            Bring utility to its full potential,
                        </span>
                    </span>
                </p>           

                <p id="im-your-home" className="flex flex-col items-center justify-center w-screen h-screen px-32 py-24 tablet:w-full shrink-0 tablet:px-11 mobile:px-4 section font-['neue_metana_regular']">
                    <span data-0="animation-play-state: paused;" data-3500="animation-play-state: running;" className="flex flex-col items-center justify-center border-8 border-[#E8DFD4] w-96 h-96 anim-im-your-home-box relative">
                        <span className="anim-im-your-home-inner-box absolute left-0 bottom-0 bg-[#E8DFD4] h-full w-full" 
                        data-0="animation-play-state: paused;" data-3500="animation-play-state: running;"></span>
                        <span className="text-[#E8DFD4] text-3xl">Im your</span>
                        <span className="text-6xl hidden text-[#439948]">
                            home
                        </span>
                    </span>
                </p>      

                <p className="flex flex-col items-center justify-center w-screen h-screen px-32 py-24 tablet:w-full shrink-0 tablet:px-11 mobile:px-4 section">
                    <span data-0="animation-play-state: paused;" data-4300="animation-play-state: running;" className="flex flex-col items-center justify-center anim-create-future">
                        <span className="mb-6 text-6xl font-['neue_metana_bold'] text-[#0a9c49]">
                            Socialize
                        </span>
                        <span className="text-xl text-center anim-fade-in" style={{animationDelay: '800ms'}} data-0="animation-play-state: paused;" data-4300="animation-play-state: running;">
                            and connect with a world of opportunity.<br/><br/>
                            Communicate with those who inspire us<br className="mobile:hidden"/>
                            to explore the boundaries of imagination<br className="mobile:hidden"/>
                            from a new perspective.
                        </span>
                    </span>
                </p>                

                <p className="relative flex flex-col items-center justify-center w-screen h-screen px-32 py-24 tablet:w-full shrink-0 tablet:px-11 mobile:px-4 section">
                    <span className="relative flex flex-col items-center justify-center font-['neue_metana_regular'] anim-eye-zoom-out" style={{width: '50rem'}}
                    data-0="animation-play-state: paused;" data-5100="animation-play-state: running;">
                        <svg className="w-full" id="eye" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513.34 525.36">
                            <path fill="#E8DFD4" d="M29.77,262.92s103.13-116.72,230.34-116.72,230.34,116.72,230.34,116.72c0,0-103.13,116.72-230.34,116.72S29.77,262.92,29.77,262.92Z"/>
                            <circle fill="#1996CE" cx="260.11" cy="262.92" r="83.88" transform="translate(-109.73 260.94) rotate(-45)"/>
                        </svg>
                        <span className="absolute text-4xl text-white anim-fade-out" style={{animationDuration: '0ms', animationDelay: '2000ms'}}
                        data-0="animation-play-state: paused;" data-5100="animation-play-state: running;">
                            I am your
                        </span>             
                        <span className="absolute text-black opacity-0 text-7xl anim-fade-in mobile:text-6xl" style={{animationDuration: '0ms', animationDelay: '2000ms'}}
                        data-0="animation-play-state: paused;" data-5100="animation-play-state: running;">
                            adventure
                        </span>                               
                        <svg className="absolute top-0 left-0 w-full anim-eye-lid-blinking" id="eyelid" xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 513.34 525.36" data-0="animation-play-state: paused;" data-5100="animation-play-state: running;">
                            <path fill="#000000" style={{transform: 'rotateX(1deg)', transformOrigin: 'center 20%'}} d="M29.77,262.92s103.13-116.72,230.34-116.72,230.34,116.72,230.34,116.72c0,0-103.13,116.72-230.34,116.72S29.77,262.92,29.77,262.92Z"/>
                            <circle fill="#000000" cx="260.11" cy="262.92" r="83.88" transform="translate(-109.73 260.94) rotate(-45)"/>
                        </svg> 
                    </span>  
                </p>   

                <p className="flex flex-col items-center justify-center w-screen h-screen px-32 py-24 tablet:w-full shrink-0 tablet:px-11 mobile:px-4 section">
                    <span data-0="animation-play-state: paused;" data-5950="animation-play-state: running;" className="mb-6 text-6xl anim-fade-in font-['neue_metana_bold'] text-['#1996CE']">
                        Explore
                    </span>
                    <span data-0="animation-play-state: paused;" data-5950="animation-play-state: running;" className="text-xl text-center anim-fade-in" style={{animationDelay: '600ms'}}>
                        the (un)known.<br className="mobile:hidden"/>
                        Go on the journey that is unique to you,<br className="mobile:hidden"/>
                        and watch Web 3 grow as you grow with it.
                    </span>
                </p>         

                <div id="im-your-wallet" className="flex flex-col items-center justify-center w-screen h-screen px-32 py-24 tablet:w-full shrink-0 tablet:px-11 mobile:px-4 section">
                    <h2 data-0="animation-play-state: paused;" data-6650="animation-play-state: running;" className="mb-6 text-6xl anim-im-your-wallet-title font-['neue_metana_regular'] text-center">
                        Im your 
                        <span className="font-['neue_metana_bold']">wallet.</span>
                    </h2>
                    <p data-0="animation-play-state: paused;" data-6650="animation-play-state: running;" className="text-xl text-center anim-im-your-wallet-desc">
                        An NFT-centric wallet for the curious ones.<br className="mobile:hidden"/>
                        Experience the digital world like never before.
                    </p>
                </div>         

                <p className="flex flex-col items-start justify-center w-screen h-screen px-32 py-24 tablet:w-full shrink-0 tablet:px-11 mobile:px-4 section">
                    <span className="relative flex flex-col font-['neue_metana_regular'] text-5xl w-full">
                        <span className="mb-4">Your key</span>
                        <span className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 464.27 475.13" className="w-20">
                                <path fill="#F36B37" d="M235.33,47.97l-1.75-5.25-1.75,5.25c-29.76,89.27-90.11,149.62-179.37,179.37l-5.25,1.75,5.25,1.75c89.27,29.75,149.62,90.11,179.37,179.37l1.75,5.25,1.75-5.25c29.76-89.27,90.11-149.62,179.37-179.37l5.25-1.75-5.25-1.75c-89.27-29.75-149.62-90.11-179.37-179.37Z"/>
                            </svg>
                            <span className="mx-5">to the</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 464.27 475.13" className="w-20">
                                <path fill="#F7CE54" d="M235.33,47.97l-1.75-5.25-1.75,5.25c-29.76,89.27-90.11,149.62-179.37,179.37l-5.25,1.75,5.25,1.75c89.27,29.75,149.62,90.11,179.37,179.37l1.75,5.25,1.75-5.25c29.76-89.27,90.11-149.62,179.37-179.37l5.25-1.75-5.25-1.75c-89.27-29.75-149.62-90.11-179.37-179.37Z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 464.27 475.13" className="w-20">
                                <path fill="#0a9c49" d="M235.33,47.97l-1.75-5.25-1.75,5.25c-29.76,89.27-90.11,149.62-179.37,179.37l-5.25,1.75,5.25,1.75c89.27,29.75,149.62,90.11,179.37,179.37l1.75,5.25,1.75-5.25c29.76-89.27,90.11-149.62,179.37-179.37l5.25-1.75-5.25-1.75c-89.27-29.75-149.62-90.11-179.37-179.37Z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 464.27 475.13" className="w-20">
                                <path fill="#F7CE54" d="M235.33,47.97l-1.75-5.25-1.75,5.25c-29.76,89.27-90.11,149.62-179.37,179.37l-5.25,1.75,5.25,1.75c89.27,29.75,149.62,90.11,179.37,179.37l1.75,5.25,1.75-5.25c29.76-89.27,90.11-149.62,179.37-179.37l5.25-1.75-5.25-1.75c-89.27-29.75-149.62-90.11-179.37-179.37Z"/>
                            </svg>                                                            
                        </span>
                        <span className="flex items-center font-['neue_metana_bold'] mb-4">
                            <svg className="w-28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513.34 525.36">
                                <path fill="#1996CE" d="M29.77,262.92s103.13-116.72,230.34-116.72,230.34,116.72,230.34,116.72c0,0-103.13,116.72-230.34,116.72S29.77,262.92,29.77,262.92Z"/>
                                <circle fill="#F7CE54" cx="260.11" cy="262.92" r="83.88" transform="translate(-109.73 260.94) rotate(-45)"/>
                            </svg>
                            <span className="before:content-['('] after:content-[')'] mx-4">UN</span>known
                        </span>
                        <button className="px-5 py-2 text-black rounded-md text-2xl w-max font-medium font-['basier_circle'] bg-['#E8DFD4']" type="button">
                            Discover more
                        </button>
                    </span>
                </p>
                
                {/*
                To add new section:

                <div className="w-screen h-screen px-32 py-24 tablet:w-full shrink-0 tablet:px-11 mobile:px-4 section">
                    <h2>This is heading</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam sint nobis aut facere labore? Quas dicta voluptates velit, vero distinctio fuga quisquam excepturi autem, molestiae aspernatur ipsum? Ut, sint aut.
                    </p>
                </div>                
                */}
            </div>
        </MainLayout>
        <Script
            id="skrollr-js" src="js/skrollr.min.js"
            strategy="beforeInteractive"
            onError={(e) => {
                console.error('Script failed to load', e)
            }}            
        />    
        <Script
            id="script-js" src="js/script.js"
            strategy="afterInteractive"
            onError={(e) => {
                console.error('Script failed to load', e)
            }}            
        />               
    </>)
}