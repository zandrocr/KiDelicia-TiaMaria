//img
import Logo from '../image/logo/kidelicia.png'
//css
import '../css/loading.css'

const Loading = () => {
    return ( <div className='loading'>
        <img src={Logo} alt="logo" className='col-6'/>
    </div> );
}

export default Loading;