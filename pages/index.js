import Script from 'next/script'
import MainLayout from '../components/MainLayout'
import LandingPageSection from '../components/LandingPageSection'
import SVG from '../components/SVG'
import PageHead from '../components/PageHead'


// Return all horizontal scroll position of the page that will trigger the animation
// that part of Skrollr.js
const animTriggerPos = (pos) => {
    const posData = {'data-0': 'animation-play-state: paused;'}

    posData['data-'+pos] = 'animation-play-state: running;'

    return posData
}

export default function Home(){

    return (<>
        <PageHead/>
        <MainLayout>
            <div id="skrollr-body" className="fixed top-0 left-0 flex gap-0 overflow-hidden tablet:flex-col tablet:h-auto wrapper" 
            data-0="transform: translateX(0%);" data-8000="transform: translateX(-91%);">
                <LandingPageSection classes={'relative flex flex-col justify-center'} tag={'header'}>
                    <h1 className="text-5xl font-['neue_metana_regular'] mobile:justify-center flex flex-wrap gap-4">
                        A
                        <span className='relative'>
                            world
                            <SVG id={1} classes={'absolute anim-world-beyond-o'} attr={{
                                style: {width: '3.9rem', left: '2.4rem', top: '-0.47rem'}
                            }}/>
                        </span><span style={{width: '50rem'}} className="mobile:hidden"></span>
                        beyond
                        <span className='relative'>
                            your
                            <SVG id={2} classes={'absolute anim-world-beyond-u'} attr={{
                                style: {top: '-1.2rem', left: '4.5rem', width: '2rem'}
                            }}/>
                        </span><span style={{width: '50rem'}} className="mobile:hidden"></span>
                        <span className='relative'>
                            imagination
                            <SVG id={2} classes={'absolute anim-world-beyond-o'} fill_1={'#F7CE55'} attr={{
                                style: {top: '-1rem', left: '-0.6rem', width: '2rem'}
                            }}/>
                        </span>
                        <span className='relative'>
                            awaits
                            <SVG id={3} classes={'absolute w-10'} attr={{
                                style: {top: '0.5rem', left: '-0.18rem'}
                            }}/>                            
                        </span>
                    </h1>    
                    <p className="flex items-center mt-10 tablet:justify-center">
                        <span className="relative before:absolute before:rounded-full before:top-2 before:left-2.5 inline-block h-12 mr-6 border-2 rounded-full w-7 anim-scroll-to-explore before:content-[''] before:w-1 before:h-2"></span>
                        Scroll to explore
                    </p>
                    <SVG id={2} classes={'absolute anim-spin deg-90'} attr={{
                        id: "star-divider", ...animTriggerPos(100)
                    }}/>                    
                </LandingPageSection>      
                
                <LandingPageSection classes={'flex flex-col items-center justify-center'} tag={'p'} attr={{id: 'im-your-imagination'}}>
                    <span className="relative flex flex-col font-['neue_metana_regular']">
                        <span className="text-4xl text-white im-your-imagination-fading-text" {...animTriggerPos(350)}>
                            I am your
                        </span>
                        <span className="text-5xl relative ml-14 im-your-imagination-fading-text text-[#FFCD32]" {...animTriggerPos(350)}>
                            imagination
                            <SVG id={3} classes={'absolute'} fill_1={'#FFCD32'} fill_2={'#0268A3'} attr={{
                                style: {top: '0.2em', left: '1.4em', width: '0.8em'}
                            }}/>     
                            <SVG id={3} classes={'absolute'} fill_1={'#FFCD32'} fill_2={'#0268A3'} attr={{
                                style: {top: '0.2em', left: '4.2em', width: '0.8em'}
                            }}/>                                                       
                        </span>
                        <SVG id={2} classes={'absolute w-20 anim-im-your-imagination-pattern1'} attr={{...animTriggerPos(350)}}/>  
                        <SVG id={2} classes={'absolute w-36 anim-im-your-imagination-pattern2'} attr={{...animTriggerPos(350)}}/>                                                                                 
                    </span>
                </LandingPageSection>

                <LandingPageSection classes={'flex flex-col items-center justify-center'} tag={'p'} attr={{id: 'create-future'}}>
                    <span {...animTriggerPos(1150)} className="flex flex-col items-center justify-center anim-create-future">
                        <span className="mb-6 text-6xl font-['neue_metana_bold'] text-[#F7CE55]">Create</span>
                        <span className="text-xl text-center">
                            the world of the future,<br className="mobile:hidden"/>
                            and witness the boundless<br className="mobile:hidden"/>
                            posibilities of your mind
                        </span>               
                    </span>                
                </LandingPageSection>

                <LandingPageSection tag={'p'} classes={"relative flex flex-col items-center justify-center font-['neue_metana_regular']"} attr={{id: 'im-playground'}}>
                    <SVG id={4} fill_1={'#F36B37'} fill_2={'#FFCD32'} classes={'absolute'} attr={{id: 'sun',}}/>
                    <span className='absolute flex flex-col justify-center gap-8 tracking-widest text-7xl mobile:text-5xl text-[#2388C1]' aria-hidden="true">
                        <span className='playground' {...animTriggerPos(1700)}>playground</span>
                        <span className='playground' {...animTriggerPos(1700)}>playground</span>
                        <span className='playground' {...animTriggerPos(1700)}>playground</span>
                        <span className='playground' {...animTriggerPos(1700)}>playground</span>
                        <span className='playground' {...animTriggerPos(1700)}>playground</span>
                        <span id="load-bar" className='relative w-full h-2 bg-white' style={{top: '-8rem'}} {...animTriggerPos(1700)}></span>
                    </span>
                    <span className='flex flex-col items-center justify-center mobile:w-full' style={{width: '38rem'}}>
                        <span id="im-your" className='mb-20 text-5xl anim-fade-out' {...animTriggerPos(1700)}>
                            I am your
                        </span>
                        <span className='sr-only'>playground</span>
                    </span>                
                </LandingPageSection>

                <LandingPageSection tag={'p'} classes={'flex flex-col items-center justify-center'}>
                    <span {...animTriggerPos(2800)} className="flex flex-col items-center justify-center anim-create-future">
                        <span className="mb-6 text-6xl font-['neue_metana_bold'] text-[#FE6B32]">
                            Play
                        </span>
                        <span {...animTriggerPos(2800)} className="text-xl text-center anim-fade-in" style={{animationDelay: '800ms'}}>
                            any roles of your desire,<br className="mobile:hidden"/>
                            fulfill your fantasies.<br className="mobile:hidden"/>
                            Bring utility to its full potential,
                        </span>
                    </span>
                </LandingPageSection>        

                <LandingPageSection tag={'p'} classes={"flex flex-col items-center justify-center font-['neue_metana_regular']"} attr={{id: 'im-your-home'}}>
                    <span {...animTriggerPos(3500)} className="flex flex-col items-center justify-center border-8 border-[#E8DFD4] w-96 h-96 anim-im-your-home-box relative">
                        <span className="anim-im-your-home-inner-box absolute left-0 bottom-0 bg-[#E8DFD4] h-full w-full" 
                        {...animTriggerPos(3500)}></span>
                        <span className="text-[#E8DFD4] text-3xl anim-fade-out absolute" {...animTriggerPos(3500)}
                        style={{animationDuration: '0ms', animationDelay: '1600ms'}}>
                            Im your
                        </span>
                        <span className="text-6xl text-[#439948] anim-fade-in absolute" style={{animationDuration: '0ms', animationDelay: '1700ms'}}
                        {...animTriggerPos(3500)}>
                            home
                            <SVG id={4} fill_1={'#F36B37'} fill_2={'#439948'} classes={'absolute'} attr={{
                                style: {top: '-0.22em', left: '0.56em', width: '1.4em'}
                            }}/>
                        </span>
                        <span className='anim-im-your-home-squares' style={{width: '23rem', height: '23rem', transform: 'scale(2)'}}
                        {...animTriggerPos(3500)}>
                            <span className='absolute grid grid-cols-2 gap-4 bottom-8 left-20'>
                                <span className='w-24 h-24 bg-[#2388C1]'></span>
                                <span className='w-24 h-24 bg-[#E8DFD4]'></span>
                            </span>        
                            <span className='absolute grid grid-cols-2 gap-4 top-4 left-20'>
                                <span className='w-24 h-24 bg-[#E8DFD4]'></span>
                                <span className='w-24 h-24 bg-[#F36B37]'></span>
                            </span>                                          
                            <span className='absolute grid grid-cols-2 gap-4 bottom-8' style={{right: '-8.92rem'}}>
                                <span className='w-24 h-24 bg-[#2388C1]'></span>
                                <span className='w-24 h-24 bg-[#E8DFD4]'></span>
                                <span className='w-24 h-24 bg-[#439948]'></span>
                                <span className='w-24 h-24 bg-[#FFCD32]'></span>
                                <span className='w-24 h-24 bg-[#F36B37]'></span>
                                <span className='w-24 h-24 bg-[#439948]'></span>
                            </span>
                            <span className='absolute grid grid-cols-2 gap-4 bottom-8' style={{left: '-8.92rem'}}>
                                <span className='w-24 h-24 bg-[#FFCD32]'></span>
                                <span className='w-24 h-24 bg-[#F36B37]'></span>
                                <span className='w-24 h-24 bg-[#439948]'></span>
                                <span className='w-24 h-24 bg-[#2388C1]'></span>
                                <span className='w-24 h-24 bg-[#E8DFD4]'></span>
                                <span className='w-24 h-24 bg-[#F7CE55]'></span>
                            </span>  
                        </span>                                           
                    </span>
                </LandingPageSection>

                <LandingPageSection tag={'p'} classes={"flex flex-col items-center justify-center"}>
                    <span {...animTriggerPos(4300)} className="flex flex-col items-center justify-center anim-create-future">
                        <span className="mb-6 text-6xl font-['neue_metana_bold'] text-[#0a9c49]">
                            Socialize
                        </span>
                        <span className="text-xl text-center anim-fade-in" style={{animationDelay: '800ms'}} {...animTriggerPos(4300)}>
                            and connect with a world of opportunity.<br/><br/>
                            Communicate with those who inspire us<br className="mobile:hidden"/>
                            to explore the boundaries of imagination<br className="mobile:hidden"/>
                            from a new perspective.
                        </span>
                    </span>
                </LandingPageSection>         

                <LandingPageSection tag={'p'} classes={'relative flex flex-col items-center justify-center'}>
                    <span className="relative flex flex-col items-center justify-center font-['neue_metana_regular'] anim-eye-zoom-out" style={{width: '50rem'}}
                    {...animTriggerPos(5100)}>
                        <SVG id={3} classes={'w-full'} fill_1={'#E8DFD4'} fill_2={'#1996CE'}/>                         
                        <span className="absolute text-4xl text-white anim-fade-out" style={{animationDuration: '0ms', animationDelay: '2000ms'}}
                        {...animTriggerPos(5100)}>
                            I am your
                        </span>             
                        <span className="absolute text-black opacity-0 text-7xl anim-fade-in mobile:text-6xl" style={{animationDuration: '0ms', animationDelay: '2000ms'}}
                        {...animTriggerPos(5100)}>
                            adventure
                            <SVG id={3} classes={'absolute'} fill_1={'#000000'} fill_2={'#FFCD32'} attr={{
                                style: {top: '0.16em', left: '-0.08em', width: '0.84em'}
                            }}/> 
                            <SVG id={2} classes={'absolute'} fill_1={'#FFCD32'} attr={{
                                style: {top: '-0.1em', left: '4.69em', width: '0.6em'}
                            }}/>  
                        </span>         
                        <SVG id={3} classes={'absolute top-0 left-0 w-full anim-eye-lid-blinking'} fill_1={'#000000'} fill_2={'#000000'} attr={{
                            ...animTriggerPos(5100)
                        }}/>                        
                    </span>                  
                </LandingPageSection>   

                <LandingPageSection tag={'p'} classes={'flex flex-col items-center justify-center'}>
                    <span {...animTriggerPos(5950)} className="mb-6 text-6xl anim-fade-in font-['neue_metana_bold'] text-['#1996CE']">
                        Explore
                    </span>
                    <span {...animTriggerPos(5950)} className="text-xl text-center anim-fade-in" style={{animationDelay: '600ms'}}>
                        the (un)known.<br className="mobile:hidden"/>
                        Go on the journey that is unique to you,<br className="mobile:hidden"/>
                        and watch Web 3 grow as you grow with it.
                    </span>
                </LandingPageSection>    

                <LandingPageSection classes={'flex flex-col items-center justify-center'} attr={{id: 'im-your-wallet'}}>
                    <h2 className="flex mobile:flex-col content-center items-center flex-wrap gap-5 mb-6 text-6xl anim-im-your-wallet-title font-['neue_metana_regular']" {...animTriggerPos(6650)}>
                        Im your 
                        <span className="font-['neue_metana_bold']">wallet.</span>
                    </h2>
                    <p {...animTriggerPos(6650)} className="text-xl text-center anim-im-your-wallet-desc">
                        An NFT-centric wallet for the curious ones.<br className="mobile:hidden"/>
                        Experience the digital world like never before.
                    </p>
                </LandingPageSection> 

                <LandingPageSection tag={'p'} classes={'flex flex-col items-start justify-center'}>
                    <span className="relative flex flex-col font-['neue_metana_regular'] text-5xl w-full">
                        <span className="mb-4">Your key</span>
                        <span className="flex items-center">
                            <SVG id={2} classes={'w-20'} fill_1={'#F36B37'}/>                            
                            <span className="mx-5">to the</span>
                            <SVG id={2} classes={'w-20'} fill_1={'#F7CE54'}/> 
                            <SVG id={2} classes={'w-20'} fill_1={'#0a9c49'}/> 
                            <SVG id={2} classes={'w-20'} fill_1={'#F7CE54'}/>                                                            
                        </span>
                        <span className="flex items-center font-['neue_metana_bold'] mb-4">
                            <SVG id={3} classes={'w-28'} fill_1={'#1996CE'} fill_2={'#F7CE54'}/>                             
                            <span className="before:content-['('] before:text-[#F7CE54] after:content-[')'] after:text-[#F7CE54] mx-4 uppercase">
                                un
                            </span>
                            known
                        </span>
                        <button className="px-5 py-2 text-black rounded-md text-2xl w-max font-medium font-['basier_circle'] bg-['#E8DFD4']" type="button">
                            Discover more
                        </button>
                    </span>                
                </LandingPageSection>      
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