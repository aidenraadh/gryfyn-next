import Link from 'next/link'
import Script from 'next/script'
import MainLayout from '../components/MainLayout'
import LandingPageSection from '../components/LandingPageSection'
import SVG from '../components/SVG'
import Button from '../components/Button'
import Form from '../components/Form'
import Popup from '../components/Popup'
import PageHead from '../components/PageHead'
import { useCallback, useState } from 'react'

// Get horaizontal scroll position of the page that will trigger the animation
// that part of Skrollr.js
const getTriggerPos = (posName) => {
    const posData = {'data-0': 'animation-play-state: paused;'}

    posData['data-_'+posName] = 'animation-play-state: running;'
    
    return posData
}


export default function Home(){
    const [popupShown, setPopupShown] = useState(false)
    const [usrEmailAddr, setUsrEmailAddr] = useState('')
    const [usrEmailValid, setUsrEmailValid] = useState(true)
    const [successSubscribe, setSuccessSubscribe] = useState(false)

    const subscribe = useCallback(() => {
        const options = {
            method: 'POST',
            body: JSON.stringify({email: usrEmailAddr})
        };        
        fetch('http://localhost:3000/api/subscribe', options)
        .then(response => {
            if(response.status === 400){
                setUsrEmailAddr('')
                setUsrEmailValid(false)
                throw new Error('Please enter valid email address');
            }
            return response.json()
        })
        .then(response => {
            setUsrEmailAddr('')
            setUsrEmailValid(true)
            setSuccessSubscribe(true)
        })
        .catch(err => {
            console.error(err)
        });        
    }, [usrEmailAddr])

    return (<>
        <PageHead/>
        <MainLayout>
            <div id="wrapper" className="wrapper">
                <LandingPageSection classes={'relative flex flex-col justify-center'} tag={'header'}>
                    <h1 className="text-5xl font-['neue_metana_regular'] tablet:justify-center flex flex-wrap gap-4">
                        A
                        <span className='relative'>
                            world
                            <span className='absolute w-8 h-8 bg-black' style={{left: '3.6rem', top: '0.6em'}}></span>
                            <SVG name={'sun_empty'} classes={'absolute anim-world-beyond-o'} attr={{
                                style: {width: '3.9rem', left: '2.4rem', top: '-0.47rem'}
                            }}/>
                        </span><span style={{width: '50rem'}} className="tablet:hidden"></span>
                        beyond
                        <span className='relative'>
                            your
                            <SVG name={'star'} classes={'absolute anim-world-beyond-u'} attr={{
                                style: {top: '-1.2rem', left: '4.5rem', width: '2rem'}
                            }}/>
                        </span><span className="w-1/3 tablet:hidden"></span>
                        <span className='relative'>
                            imagination
                            <span className='absolute w-2 h-2 bg-black' style={{top: '-1rem', left: '-0.6rem', width: '2rem'}}></span>
                            <SVG name={'star'} classes={'absolute anim-world-beyond-o'} fill_1={'#F7CE55'} attr={{
                                style: {top: '-0.9rem', left: '-0.7rem', width: '2rem'}
                            }}/>
                        </span>
                        <span className='relative'>
                            awaits
                            <span className='absolute w-8 h-4 bg-black' style={{top: '1.2rem', left: '-0.16rem'}}></span>
                            <SVG name={'eye'} classes={'absolute w-10'} attr={{
                                style: {top: '0.5rem', left: '-0.18rem'}
                            }}/>                            
                        </span>
                    </h1>    
                    <p className="flex items-center w-full mt-10 tablet:justify-center">
                        <span className="relative before:absolute before:rounded-full before:top-2 before:left-2.5 inline-block h-12 mr-6 border-2 rounded-full w-7 anim-scroll-to-explore before:content-[''] before:w-1 before:h-2"></span>
                        Scroll to explore
                    </p>
                    <SVG name={'star'} classes={'absolute'} attr={{
                        id: "star-divider",
                        'data-0': 'transform: rotate(0deg);',
                        'data-100': 'transform: rotate(90deg);',
                    }}/>                    
                </LandingPageSection>      
                
                <LandingPageSection classes={'flex flex-col items-center justify-center bg-red'} tag={'p'} attr={{
                    id: 'im-your-imagination', 'data-hold-leave': 500 , 'data-hold-enter': 2000,
                }}>
                    <span className="relative flex flex-col mobile:items-center font-['neue_metana_regular'] content"
                    data-0="opacity: 1; transform: scale(1);" data-115p="opacity: 1; transform: scale(1);" data-130p="opacity: 0; transform: scale(0.9);">
                        <span className="text-4xl text-white im-your-imagination-fading-text">
                            I am your
                        </span>
                        <span className="relative text-5xl ml-14 mobile:ml-0 im-your-imagination-fading-text text-yellow">
                            imagination
                            <span className='absolute bg-black' style={{left: '1.46em', top: '0.42em', width: '0.6em', height: '0.4em'}}></span>
                            <span className='absolute bg-black' style={{left: '4.23em', top: '0.42em', width: '0.6em', height: '0.4em'}}></span>
                            <SVG name={'eye'} classes={'absolute'} fill_1={'#FFCD32'} fill_2={'#0268A3'} attr={{
                                style: {top: '0.19em', left: '1.4em', width: '0.8em'}
                            }}/>     
                            <SVG name={'eye'} classes={'absolute'} fill_1={'#FFCD32'} fill_2={'#0268A3'} attr={{
                                style: {top: '0.19em', left: '4.2em', width: '0.8em'}
                            }}/>                                                       
                        </span>
                        <span className='relative star-container'>
                            <SVG name={'star'} classes={'absolute anim-im-your-imagination-pattern1'} attr={{...getTriggerPos('im_imagination')}}/>  
                            <SVG name={'star'} classes={'absolute anim-im-your-imagination-pattern2'} attr={{...getTriggerPos('im_imagination')}}/> 
                        </span>                                                                                                        
                    </span>
                </LandingPageSection>

                <LandingPageSection classes={'relative flex flex-col items-center justify-center'} tag={'p'} attr={{
                    id: 'create-future', 'data-hold-enter': '1100'
                }}>
                    <span {...getTriggerPos('create_future')} className="flex flex-col items-center justify-center anim-create-future">
                        <span className="mb-6 text-6xl font-['neue_metana_bold'] text-yellow">create</span>
                        <span className="text-xl text-center">
                            the world of the future,<br className="mobile:hidden"/>
                            and witness the boundless<br className="mobile:hidden"/>
                            posibilities of your mind
                        </span>               
                    </span>                
                </LandingPageSection>

                <LandingPageSection tag={'p'} classes={"relative flex flex-col items-center justify-center font-['neue_metana_regular']"} attr={{
                    id: 'im-playground', 'data-hold-enter': 3000
                }}>
                    <span className='absolute flex flex-col items-center justify-center gap-8 tracking-widest text-7xl text-blue playground-words' aria-hidden="true">
                        <span className='playground'>playground</span>
                        <span className='playground'>playground</span>
                        <span className='playground'>playground</span>
                        <span className='relative playground'>
                            playground
                            <span className='absolute bg-black' style={{left: '1.4em', top: '0.36em', width: '0.55em', height: '0.45em'}}></span>
                            <SVG name={'eye'} fill_1={'#2388C1'} fill_2={'#FE6B32'} classes={'absolute'} attr={{
                                style: {top: '0.185em', left: '1.34em', width: '0.78em'}
                            }}/>
                            <SVG name={'star'} fill_1={'#439948'} classes={'absolute'} attr={{
                                style: {top: '-0.1em', left: '5.64em', width: '0.62em'}
                            }}/>
                        </span>
                        <span className='playground'>playground</span>
                        <span id="load-bar" className='relative w-full h-2 bg-white' style={{top: '-8rem'}}></span>
                        <SVG name={'sun'} fill_1={'#F36B37'} fill_2={'#FFCD32'} classes={'absolute tablet:w-5'} attr={{id: 'sun'}}/>
                    </span>
                    <span className='flex flex-col items-center justify-center mobile:w-full' style={{width: '38rem'}}>
                        <span id="im-your" className='text-5xl mb-15'>
                            I am your
                        </span>
                        <span className='sr-only'>playground</span>
                    </span>                
                </LandingPageSection>

                <LandingPageSection tag={'p'} classes={'flex flex-col items-center justify-center'} attr={{
                    id: "play-roles", 'data-hold-leave': 900, 'data-hold-enter': 1500
                }}>
                    <span {...getTriggerPos('play_roles')} className="flex flex-col items-center justify-center body">
                        <span className="mb-6 text-6xl font-['neue_metana_bold'] text-orange title">
                            play
                        </span>
                        <span {...getTriggerPos('play_roles')} className="text-2xl text-center desc">
                            any roles of your desire,<br className=""/>
                            fulfill your fantasies.<br className=""/>
                            Bring utility to its full potential.
                        </span>
                    </span>
                </LandingPageSection>        

                <LandingPageSection tag={'p'} classes={"flex flex-col items-center justify-center font-['neue_metana_regular']"} attr={{
                    id: 'im-your-home', 'data-hold-leave': 900, 'data-hold-enter': 3500, 'data-slide-dur': '50ms',
                }}>
                    <span className="relative flex flex-col items-center justify-center border-8 border-body w-96 h-96 anim-im-your-home-box">
                        <span className="absolute bottom-0 left-0 w-full h-full anim-im-your-home-inner-box bg-body" ></span>
                        <span className="absolute text-3xl text-body im-your-text">
                            I am your
                        </span>
                        <span className="absolute text-6xl text-green home-text">
                            home
                            <SVG name={'sun'} fill_1={'#F36B37'} fill_2={'#439948'} classes={'absolute'} attr={{
                                style: {top: '-0.22em', left: '0.56em', width: '1.4em'}
                            }}/>
                        </span>
                        <span className='anim-im-your-home-squares' style={{width: '23rem', height: '23rem', transform: 'scale(2)'}}
                       >
                            <span className='absolute grid grid-cols-2 gap-4 bottom-8 left-20'>
                                <span className='w-24 h-24 bg-blue'></span>
                                <span className='w-24 h-24 bg-body'></span>
                            </span>        
                            <span className='absolute grid grid-cols-2 gap-4 top-4 left-20'>
                                <span className='w-24 h-24 bg-body'></span>
                                <span className='w-24 h-24 bg-orange'></span>
                            </span>                                          
                            <span className='absolute grid grid-cols-2 gap-4 bottom-8' style={{right: '-8.92rem'}}>
                                <span className='w-24 h-24 bg-blue'></span>
                                <span className='w-24 h-24 bg-body'></span>
                                <span className='w-24 h-24 bg-green'></span>
                                <span className='w-24 h-24 bg-yellow'></span>
                                <span className='w-24 h-24 bg-orange'></span>
                                <span className='w-24 h-24 bg-green'></span>
                            </span>
                            <span className='absolute grid grid-cols-2 gap-4 bottom-8' style={{left: '-8.92rem'}}>
                                <span className='w-24 h-24 bg-yellow'></span>
                                <span className='w-24 h-24 bg-orange'></span>
                                <span className='w-24 h-24 bg-green'></span>
                                <span className='w-24 h-24 bg-blue'></span>
                                <span className='w-24 h-24 bg-body'></span>
                                <span className='w-24 h-24 bg-yellow'></span>
                            </span>  
                        </span>                                           
                    </span>
                </LandingPageSection>

                <LandingPageSection tag={'p'} classes={"flex flex-col items-center justify-center"} attr={{
                    id: 'socialize', 'data-hold-leave': '600', 'data-hold-enter': '1100', 'data-slide-dur': '50ms',
                }}>
                    <span className="flex flex-col items-center justify-center title">
                        <span className="mb-6 text-6xl font-['neue_metana_bold'] text-green">
                            socialize
                        </span>
                        <span className="text-xl text-center desc">
                            and connect with a world of opportunity.<br/><br/>
                            Communicate with those who inspire us<br className="mobile:hidden"/>
                            to explore the boundaries of imagination<br className="mobile:hidden"/>
                            from a new perspective.
                        </span>
                    </span>
                </LandingPageSection>         

                <LandingPageSection tag={'p'} classes={'relative flex flex-col items-center justify-center'} attr={{
                    id: 'im-adventure', 'data-hold-leave': 600, 'data-hold-enter': 2800, 'data-slide-dur': '50ms',
                }}>
                    <span className="relative flex flex-col items-center justify-center font-['neue_metana_regular'] anim-eye-zoom-out tablet:w-full"
                    {...getTriggerPos('im_adventure')}>
                        <SVG name={'eye'} classes={'w-full'} fill_1={'#E8DFD4'} fill_2={'#1996CE'}/>                         
                        <span className="absolute text-4xl text-white im-your"
                        {...getTriggerPos('im_adventure')}>
                            I am your
                        </span>             
                        <span className="absolute text-black opacity-0 text-7xl adventure"
                        {...getTriggerPos('im_adventure')}>
                            <span>adventure</span>
                            <SVG name={'eye'} classes={'absolute'} fill_1={'#000000'} fill_2={'#FFCD32'} attr={{
                                style: {top: '0.16em', left: '-0.08em', width: '0.84em'}
                            }}/> 
                            <SVG name={'star'} classes={'absolute'} fill_1={'#FFCD32'} attr={{
                                style: {top: '-0.1em', left: '4.69em', width: '0.6em'}
                            }}/>  
                        </span>         
                        <SVG name={'eye'} classes={'absolute top-0 left-0 w-full anim-eye-lid-blinking'} fill_1={'#000000'} fill_2={'#000000'} attr={{
                            ...getTriggerPos('im_adventure')
                        }}/>                        
                    </span>                  
                </LandingPageSection>   

                <LandingPageSection tag={'p'} classes={'flex flex-col items-center justify-center'} attr={{
                    id: 'explore', 'data-hold-leave': 600, 'data-hold-enter': 1200, 'data-slide-dur': '50ms',
                }}>
                    <span {...getTriggerPos('explore')} className="mb-6 text-6xl explore font-['neue_metana_bold'] text-blue">
                        explore
                    </span>
                    <span {...getTriggerPos('explore')} className="text-xl text-center explore-desc">
                        the (un)known.<br/>
                        Go on the journey that is unique to you,<br/>
                        and watch Web 3 grow as you grow with it.
                    </span>
                </LandingPageSection>    

                <LandingPageSection classes={'flex flex-col items-center justify-center'} attr={{
                    id: 'im-your-wallet', 'data-hold-leave': 600, 'data-hold-enter': 1500, 'data-slide-dur': '50ms',
                }}>
                    <h2 className="flex mobile:flex-col content-center items-center flex-wrap gap-5 mb-6 text-6xl anim-im-your-wallet-title font-['neue_metana_regular']" {...getTriggerPos('im_wallet')}>
                        I am your 
                        <span className="font-['neue_metana_bold']">wallet.</span>
                    </h2>
                    <p {...getTriggerPos('im_wallet')} className="text-xl text-center anim-im-your-wallet-desc">
                        An NFT-centric wallet for the curious ones.<br className="mobile:hidden"/>
                        Experience the digital world like never before.
                    </p>
                </LandingPageSection> 
                
                <LandingPageSection tag={'div'} classes={'relative flex flex-col items-start justify-center'} attr={{
                    id: 'your-key', 'data-hold-leave': 600, 'data-hold-enter': 800, 'data-slide-dur': '50ms',
                }}>
                    <span className="relative flex flex-col font-['neue_metana_regular'] text-5xl w-full mobile:items-center mobile:text-4xl">
                        <span className="mb-4 your-key">Your key</span>
                        <span className="flex items-center to-the">
                            <SVG name={'star'} classes={'w-20 mobile:w-14'} fill_1={'#F36B37'}/>                            
                            <span className="mx-3 mobile:mx-2">to the</span>
                            <SVG name={'star'} classes={'w-20 mobile:w-14'} fill_1={'#F7CE54'}/> 
                            <SVG name={'star'} classes={'w-20 mobile:w-14'} fill_1={'#0a9c49'}/> 
                            <SVG name={'star'} classes={'w-20 mobile:w-14'} fill_1={'#F7CE54'}/>                                                            
                        </span>
                        <span className="flex items-center font-['neue_metana_bold'] mb-4 unknown">
                            <SVG name={'eye'} classes={'w-28 mobile:w-20'} fill_1={'#1996CE'} fill_2={'#F7CE54'}/>                             
                            <span className="before:content-['('] before:text-yellow after:content-[')'] after:text-yellow mx-5 mobile:mx-3 uppercase">
                                un
                            </span>
                            known
                        </span>
                        <Button classes={'text-2xl w-60 unlock-btn'} attr={{ onClick: () => {setPopupShown(true)} }}>
                            Unlock Now
                        </Button>
                    </span>
                    <span className='absolute bottom-0 right-0 flex justify-end w-full gap-8 p-6 bg-black'>
                        <Link href="/privacy-policy"><a>Privacy Policy</a></Link>
                        <Link href="/cookies-policy"><a>Cookies Policy</a></Link>
                        <Link href="/terms-and-conditions"><a>Terms &#38; Conditions</a></Link>
                        <Link href="/why-is-your-country-of-residence-needed"><a>Why is your country of residence needed?</a></Link>
                    </span>            
                </LandingPageSection>      
            </div>
            <aside>
                <Button classes={'text-lg fixed top-4 right-6'} attr={{ onClick: () => {setPopupShown(true)}, id: 'discover-more' }}>
                    Discover More
                </Button>   
            </aside>   

            <Popup
                shown={popupShown}
                toggleShown={() => {setPopupShown(state => !state)}}
                body={
                    <div className={"font-['basier_circle'] text-4xl flex flex-col justify-center items-center"}>
                        {successSubscribe ?
                            'Thank you for subscribing' :
                            <>
                                Be the first to know
                                <Form classes={`text-lg w-96 mt-4 mb-10${usrEmailValid ? '' : ' placeholder-red-600'}`} attr={{
                                    value: usrEmailAddr,
                                    onChange: (e) => {setUsrEmailAddr(e.target.value)},
                                    placeholder: usrEmailValid ? 'Please enter your email address' : 'Please enter valid email address'
                                }}/>
                                <Button classes={'text-lg'} attr={{ onClick: subscribe }}>
                                    Subscribe
                                </Button>                            
                            </> 
                        }
                    </div>
                }
            />            
        </MainLayout>
        {/* <Script
            id="skrollr-js" src="js/skrollr.min.js"
            strategy="beforeInteractive"
            onError={(e) => {
                console.error('Script failed to load', e)
            }}            
        />     */}
        <Script
            id="script-js" src="js/script.js"
            strategy="afterInteractive"
            onError={(e) => {
                console.error('Script failed to load', e)
            }}            
        />               
    </>)
}