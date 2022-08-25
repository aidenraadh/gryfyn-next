import Header from './Header'

export default function MainLayout(props){
    return (<>
        <div className=''>
            <Header/>
            {props.children}
        </div>
    </>)
}