import Header from './Header'

export default function MainLayout(props){
    return (<>
        <div className='anim-circle-clip-path'>
            <Header/>
            {props.children}
        </div>
    </>)
}