import Header from './Header'
import SVG from './SVG'

export default function MainLayout(props){
    return (
    <>
        <div id="preloader" className='flex flex-col items-center justify-center'>
            <span className='absolute w-12 h-12 bg-white rounded-md rectangle'></span>
            <span className='absolute w-12 h-12 bg-white rounded-md rectangle'></span>
            <SVG id={2} classes={'absolute w-16 h-16 star'}/>
            <span className='relative flex flex-col items-center justify-center w-20 p-10 bg-black eye'>
                <SVG id={3} classes={'absolute w-full'} fill_1={'#0a9c49'} fill_2={'#F7CE54'}/>   
                <SVG id={3} classes={'absolute w-full eye-lid'} fill_1={'#000000'} fill_2={'#000000'}/>                  
            </span>        
        </div>
        <svg className="svg-sun" id="pattern-sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 1280">
            <g id="Layer_1-2">
                <path d="M0,0V1280H1280V0H0ZM640,682.88c-23.68,0-42.88-19.2-42.88-42.88s19.2-42.88,42.88-42.88,42.88,19.2,42.88,42.88-19.2,42.88-42.88,42.88Z"/>
                <path className="loading-sun" d="M748.75,641.05c-17.96,5.99-33.96,14.05-47.98,24.12,2.79,17.04,8.41,34.05,16.87,50.98l1.49,2.97-2.97-1.49c-16.93-8.47-33.94-14.08-50.98-16.87-10.07,14.02-18.13,30.02-24.12,47.98l-1.05,3.15-1.05-3.15c-5.99-17.96-14.05-33.96-24.12-47.98-17.04,2.79-34.05,8.41-50.98,16.87l-2.97,1.49,1.49-2.97c8.47-16.93,14.08-33.94,16.87-50.98-14.02-10.07-30.02-18.13-47.98-24.12l-3.15-1.05,3.15-1.05c17.96-5.99,33.96-14.05,47.98-24.12-2.79-17.04-8.41-34.05-16.87-50.98l-1.49-2.97,2.97,1.49c16.93,8.47,33.94,14.08,50.98,16.87,10.07-14.02,18.13-30.02,24.12-47.98l1.05-3.15,1.05,3.15c5.99,17.96,14.05,33.96,24.12,47.98,17.04-2.79,34.05-8.41,50.98-16.87l2.97-1.49-1.49,2.97c-8.47,16.93-14.08,33.94-16.87,50.98,14.02,10.07,30.02,18.13,47.98,24.12l3.15,1.05-3.15,1.05Zm-138.99,29.11c16.97,16.7,44.27,16.48,60.97-.49,16.7-16.97,16.48-44.27-.49-60.97-16.97-16.7-44.27-16.48-60.97,.49-16.7,16.97-16.48,44.27,.49,60.97Z"/>
            </g>
        </svg>                
        <div className='anim-circle-clip-path'>
            <Header/>
            {props.children}
        </div>
    </>)
}