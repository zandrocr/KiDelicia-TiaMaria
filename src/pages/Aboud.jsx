//img
import Salgados from '../image/salgados.jpg'
import Mesa from '../image/mesa.jpg'
//css
import '../css/about.css'
//hook
import React, { useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'

const About = () => {

    useEffect(() =>{
        AOS.init()
    }, [])

    return (
    <div className="about col-12 d-flex flex-column align-items-center justify-content-md-around">
        <div className='col-10 d-flex flex-column flex-sm-row align-items-center justify-content-between'>
            <p className='col-11 col-sm-6' data-aos="fade-up" data-aos-duration="2000">
                Os melhores salgados da região de São José dos Campos, tudo feito com o maior amor e dedicação que só uma mineira raiz sabe fazer, você pode já ter comido quase tudo que o nosso Brasil tem a oferecer mais nas mãos desse Tia, você irá sentir outros sabores.
            </p>
            <img src={Salgados} alt="Salgados" className='col-11 col-sm-5'  data-aos="fade-up" data-aos-duration="3000"/>
        </div>
        <div className='col-10 d-flex flex-column-reverse flex-sm-row align-items-center justify-content-between'>
            <img src={Mesa} alt="Salgados" className='col-11 col-sm-5' data-aos="fade-up" data-aos-duration="1000"/>
            <p className='col-11 col-sm-6' data-aos="fade-up" data-aos-duration="2000">
                Comidas e salgados para festas e eventos de todas as ocasiões, dês de um aniversário da sua pequena criança ou seu amor até um jantar para os funcionários da sua empresa ou quem sabe um belo café da manhã. Formal ou descontraído, estaremos sempre enchendo seus pratos.
            </p>
        </div>
    </div> );
}

export default About;