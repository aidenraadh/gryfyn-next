import Header from './Header'
import SVG from './SVG'

export default function MainLayout(props){
    return (
    <>
        <svg className="svg-sun" id="pattern-sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
            <path className="loading-sun" d="M945.58,504.81c-73.59,24.53-139.14,57.55-196.6,98.83,11.44,69.81,34.45,139.52,69.13,208.89l6.09,12.18-12.18-6.09c-69.38-34.69-139.08-57.69-208.89-69.13-41.27,57.45-74.3,123.01-98.83,196.59l-4.31,12.92-4.31-12.92c-24.53-73.58-57.55-139.14-98.82-196.59-69.81,11.44-139.52,34.45-208.9,69.13l-12.18,6.09,6.09-12.18c34.69-69.38,57.69-139.08,69.14-208.89-57.46-41.27-123.01-74.3-196.6-98.83l-12.92-4.31,12.92-4.31c73.58-24.53,139.14-57.55,196.6-98.83-11.44-69.81-34.45-139.52-69.14-208.89l-6.09-12.18,12.18,6.09c69.38,34.69,139.08,57.69,208.89,69.13,41.27-57.46,74.3-123.01,98.83-196.59l4.31-12.92,4.31,12.92c24.53,73.58,57.55,139.14,98.82,196.59,69.81-11.44,139.52-34.44,208.9-69.13l12.18-6.09-6.09,12.18c-34.69,69.38-57.69,139.08-69.14,208.89,57.46,41.27,123.01,74.3,196.6,98.83l12.92,4.31-12.92,4.31Zm-569.49,119.27c69.54,68.43,181.4,67.53,249.83-2.01,68.43-69.55,67.53-181.4-2.01-249.83-69.55-68.43-181.4-67.53-249.83,2.01-68.43,69.55-67.53,181.4,2.01,249.83Z"/>
        </svg>
        <div id="preloader" className='flex flex-col items-center justify-center'>
            <span className='absolute w-12 h-12 bg-white rounded-md rectangle'></span>
            <span className='absolute w-12 h-12 bg-white rounded-md rectangle'></span>
            <SVG id={2} classes={'absolute w-16 h-16 star'}/>
            <span className='relative flex flex-col items-center justify-center w-20 p-10 bg-black eye'>
                <SVG id={3} classes={'absolute w-full'} fill_1={'#0a9c49'} fill_2={'#F7CE54'}/>   
                <SVG id={3} classes={'absolute w-full eye-lid'} fill_1={'#000000'} fill_2={'#000000'}/>                  
            </span>        
        </div>        
        <div className='anim-circle-clip-path'>
            <Header/>
            {props.children}
        </div>
    </>)
}