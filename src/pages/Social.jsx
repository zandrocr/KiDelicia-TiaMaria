//css
import '../css/social.css'
//hook
import React, { useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Social = () => {

    useEffect(() =>{
        AOS.init()
    }, [])

    return ( <div className="social col-12 d-flex flex-column align-items-center justify-content-between">
        <div className='tables col-12'></div>
        <p className="col-10 d-flex align-items-center text-center" data-aos="fade-up" data-aos-duration="2000">
            Vamos logo começar os preparativos para seus maiores e melhores eventos, tudo preparados pelas nossas mãos, ligue para nós, nós conte seus desejos de um dia inesquecível e deixe que cuidamos da cozinha para você.
        </p>
        <a href="https://api.whatsapp.com/send?phone=5512988656155&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20sobre%20os%20seus%20servi%C3%A7os" target="_blank" className='whats col-3 col-md-1 d-flex justify-content-around' data-aos="fade-down" data-aos-duration="2000">
        </a>
        <p className='project'>
            © Projetado e desenvolvido por ZandroCR 2022
        </p>
    </div> );
}

export default Social;