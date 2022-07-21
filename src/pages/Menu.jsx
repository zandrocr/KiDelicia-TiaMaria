//img
import Coxinha from '../image/coxinha.png'
//css
import '../css/menu.css'
//hook
import React, { useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Menu = () => {

    useEffect(() =>{
        AOS.init()
    }, [])

    return ( <div className="menu col-12 d-flex justify-content-center">
        <div className='col-10 d-flex flex-column flex-sm-row justify-content-between align-items-center'>
            <ul className='d-flex flex-column align-items-center text-center'>
                <li data-aos='fade-up' data-aos-duration="2000" data-aos-offset="50">Salgados</li>
                <li data-aos='fade-up' data-aos-duration="2000" data-aos-offset="50">Coxinha de frango</li>
                <li data-aos='fade-up' data-aos-duration="2000" data-aos-offset="50">Bolinha de queijo</li>
                <li data-aos='fade-up' data-aos-duration="2000" data-aos-offset="50">Quibe</li>
                <li data-aos='fade-up' data-aos-duration="2000" data-aos-offset="50">Enroladinho de salsicha</li>
                <li data-aos='fade-up' data-aos-duration="2000" data-aos-offset="50">Pastel de carne</li>
                <li data-aos='fade-up' data-aos-duration="2000" data-aos-offset="50">Rissole de presunto e queijo</li>
                <li data-aos='fade-up' data-aos-duration="2000" data-aos-offset="50">Bolinha de batata recheada</li>
                <li data-aos='fade-up' data-aos-duration="2000" data-aos-offset="50">Croquete de carne</li>
            </ul>
            <img src={Coxinha} alt="coxinha" className='col-10 col-sm-5' data-aos='fade-in' data-aos-duration="2000"/>
            <ul className='d-flex flex-column align-items-center text-center'>
                <li data-aos='fade-up' data-aos-duration="2000" data-aos-offset="50">Massas</li>
                <li data-aos='fade-up' data-aos-duration="2000" data-aos-offset="50">Pastel de frango em massa folhada</li>
                <li data-aos='fade-up' data-aos-duration="2000" data-aos-offset="50">Sanduíches em geral</li>
                <li data-aos='fade-up' data-aos-duration="2000" data-aos-offset="50">Canudinho com atum</li>
                <li data-aos='fade-up' data-aos-duration="2000" data-aos-offset="50">Mini pizza de polenta</li>
                <li data-aos='fade-up' data-aos-duration="2000" data-aos-offset="50">Esfirra</li>
                <li data-aos='fade-up' data-aos-duration="2000" data-aos-offset="50">Empada</li>
                <li data-aos='fade-up' data-aos-duration="2000" data-aos-offset="50">Enrolado de presunto com queijo</li>
                <li data-aos='fade-up' data-aos-duration="2000" data-aos-offset="50">Bolinho de mandioca</li>
            </ul>
        </div>

    </div>);
}

export default Menu;