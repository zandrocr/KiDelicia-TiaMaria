import Logo from '../image/logo/logo.svg'
//css
import '../css/loading.css'

const Loading = () => {
    return ( <div className='loading'>
        <img src={Logo} alt="logo" className='col-8'/>
    </div> );
}

export default Loading;