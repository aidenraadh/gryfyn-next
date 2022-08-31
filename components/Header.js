import Link from 'next/link'
import Button from './Button'
import SVG from './SVG'
import Popup from './Popup'
import Form from './Form'
import { useCallback, useState } from 'react'

export default function Header(){

    const [popupShown, setPopupShown] = useState(false)
    const [usrEmailAddr, setUsrEmailAddr] = useState('')

    const subscribe = useCallback(() => {
        const options = {
            method: 'POST',
            body: JSON.stringify({email: usrEmailAddr})
        };        
        fetch('http://localhost:3000/api/subscribe', options)
        .then(response => response.json())
        // .then(response => console.log(response))
        .catch(err => console.error(err));        
    }, [usrEmailAddr])

    return (<>
        <nav  className="fixed top-0 left-0 flex flex-col items-center justify-between h-screen gap-0 p-4 bg-black py-7 mobile:py-2 tablet:flex-row tablet:w-full tablet:h-auto navbar">
            <SVG name={'fire'} classes={'w-16 tablet:hidden'}/>
            <Link href="/">
                <a className="relative logo-link tablet:static">
                    <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1362.79 495.91" className="absolute tablet:static tablet:top-auto tablet:bottom-auto">
                        <path fill="#FFCD32" d="M598.57,113.99c-17.51-3.66-28.81-14.98-35.57-35.6l-.37-1.14-.37,1.14c-6.75,20.62-18.06,31.93-35.57,35.6l-1.84,.38,1.84,.38c17.51,3.67,28.81,14.98,35.57,35.6l.37,1.14,.37-1.14c6.75-20.62,18.05-31.93,35.57-35.6l1.84-.38-1.84-.38Z"/>
                        <path fill="#449947" d="M974.75,113.99c-17.51-3.66-28.81-14.98-35.57-35.6l-.37-1.14-.37,1.14c-6.75,20.62-18.06,31.93-35.57,35.6l-1.84,.38,1.84,.38c17.51,3.67,28.81,14.98,35.57,35.6l.37,1.14,.37-1.14c6.75-20.62,18.05-31.93,35.57-35.6l1.84-.38-1.84-.38Z"/>
                        <path fill="#E5DFD6" d="M1024.86,85.7c-31.7,0-57.4,25.7-57.4,57.4v57.3h0c0,15.8-12.86,28.66-28.66,28.66s-28.66-12.86-28.66-28.66h0v-57.3c0-31.7-25.7-57.4-57.4-57.4h0v114.77h0c.04,47.49,38.55,86.04,86.06,86.04h0c15.8,0,28.62,12.81,28.62,28.62s-12.81,28.62-28.62,28.62-28.54-12.75-28.61-28.49h-57.35c.07,47.42,38.53,85.84,85.96,85.84s85.97-38.49,85.97-85.97c0-22.02-8.29-42.09-21.9-57.3,13.65-15.22,21.97-35.32,21.98-57.36h0V85.7h0Z"/>
                        <path fill="#E5DFD6" d="M648.69,85.7c-31.7,0-57.4,25.7-57.4,57.4v57.3c0,15.8-12.86,28.66-28.66,28.66s-28.66-12.86-28.66-28.66h0v-57.3c0-31.7-25.7-57.4-57.4-57.4v114.75h0c.03,47.5,38.55,86.06,86.06,86.06h0c15.81,0,28.62,12.81,28.62,28.62s-12.81,28.62-28.62,28.62-28.54-12.75-28.61-28.49h-57.35c.07,47.42,38.53,85.84,85.96,85.84s85.97-38.49,85.97-85.97c0-22.02-8.29-42.09-21.9-57.3,13.65-15.22,21.97-35.33,21.98-57.38h0V85.7h0Z"/>
                        <path fill="#E5DFD6" d="M663.14,134.46c-.74,28.3,21.98,51.47,50.11,51.47-25.69,0-46.86,19.34-49.77,44.25-.19,1.6-.23,3.21-.24,4.82-.03,6.29-.12,51.4-.12,51.4h57.39v-40.25c-.01-11.46,9.28-20.75,20.74-20.75l65.31,.04v-53.79h-71.15c-7.7,0-14.46-5.81-14.92-13.5-.5-8.35,6.12-15.28,14.36-15.28h100.14v-57.2h-120.63c-27.35,0-50.51,21.45-51.23,48.79Z"/>
                        <path fill="#E5DFD6" d="M1214.51,171.76c0-47.53-38.53-86.06-86.06-86.06s-86.06,38.53-86.06,86.06h0v114.7h57.4v-88.78c-19.21-9.11-32.28-23.9-32.28-23.9,0,0,27.29-30.89,60.95-30.89s60.95,30.89,60.95,30.89c0,0-13.08,14.8-32.3,23.91l.02,88.77h57.4l-.02-114.7Z"/>
                        <path fill="#E5DFD6" d="M461.06,227.78c-3.95-23.74-24.57-41.84-49.43-41.84,27.69,0,50.13-22.44,50.13-50.13s-22.44-50.13-50.13-50.13l-207.9,.02c-47.48,0-85.97,38.49-85.97,85.97,0,.04-.03,28.08-.03,28.08,0,33.73,19.41,63.27,47.67,77.58,.48,.25,.74,.42,1.24,.63,9.3,4.86,15.62,4.28,23.53,3.31,6.39-4.76,11.16-12,14.53-21.93,3.14,9.98,7.73,17.32,13.99,22.22,7.88,1.11,16.35-.68,25.73-5.34-4.81,9.33-6.71,17.8-5.7,25.71,4.79,6.37,12.06,11.11,22.01,14.43-10.04,3.22-17.39,7.89-22.26,14.25-1.2,7.92,.55,16.46,5.21,25.92-9.33-4.86-17.81-6.8-25.74-5.8-6.43,4.75-11.23,12-14.63,21.94-3.14-10.02-7.73-17.39-14.03-22.31-7.9-1.2-16.42,.53-25.86,5.15,4.88-9.3,6.84-17.76,5.87-25.69-4.73-6.4-11.94-11.19-21.84-14.6h-29.81c.07,47.42,38.59,85.84,86.11,85.84s86.12-38.49,86.12-85.97c0-22.19-8.42-42.41-22.25-57.66,13.8-15.26,22.21-35.5,22.21-57.69h0v-28.09h-57.4v28.09h0c0,15.8-12.86,28.66-28.66,28.66s-28.66-12.86-28.66-28.66v-28.08c-.01-15.79,12.78-28.6,28.57-28.62l186.33-.17c8.26,0,14.9,6.96,14.36,15.34-.49,7.65-7.19,13.43-14.85,13.43h-71.22v53.79l65.31-.04c11.46,0,20.75,9.29,20.75,20.75v40.23h57.38l-.12-50.66c0-2.66-.14-5.33-.57-7.96Z"/>
                        <circle fill="#EA7542" cx="203.98" cy="315" r="22.1" transform="translate(-162.99 236.5) rotate(-45)"/>
                        <circle fill="#2488C1" cx="1128.46" cy="171.69" r="22.1"/>
                    </svg>            
                    <span className="sr-only">Home</span>
                </a>            
            </Link>
            <a href="https://www.instagram.com/gryfyn.app/" className='flex flex-col tablet:hidden'>
                <SVG name={'instagram'} fill_1={'#E8DFD4'} classes={'w-9 h-9 mobile:hidden'}/>
            </a>        
            <Button classes={'text-lg fixed top-4 right-6'} attr={{ onClick: () => {setPopupShown(true)} }}>
                Discover More
            </Button>            
        </nav>
        
        <Popup
                shown={popupShown}
                toggleShown={() => {setPopupShown(state => !state)}}
                body={
                    <div className={"font-['basier_circle'] text-4xl flex flex-col justify-center items-center"}>
                        Be the first to know
                        <Form classes={'text-lg w-96 mt-4 mb-10'} attr={{
                            value: usrEmailAddr,
                            onChange: (e) => {setUsrEmailAddr(e.target.value)},
                            placeholder: 'Please enter your email address'
                        }}/>
                        <Button classes={'text-lg'} attr={{ onClick: subscribe }}>
                            Subscribe
                        </Button>
                    </div>
                }
            /> 
    </>)
}