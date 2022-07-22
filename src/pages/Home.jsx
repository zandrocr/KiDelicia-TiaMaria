//img
import Logo from '../image/logo/kidelicia.png'
import Kidelicia from '../image/logo/logo.png'
import Buffet from '../image/logo/buffet.svg'
import Tia from '../image/logo/tia maria.svg'
//css
import '../css/home.css'

const Home = () => {
    return ( <div className='home col-12'>
        <div className='logo d-flex justify-content-center col-12'>
            <img src={Logo} alt="logo" className='col-3 col-md-1'/>
        </div>
        <div className='capa d-flex flex-column align-items-center justify-content-center'>
            <div className='col-10'>
                <img src={Kidelicia} alt="kidelicia" className='col-12 col-sm-2 col-md-8 col-xl-7'/>
            </div>
        </div>
    </div> );
}

export default Home;