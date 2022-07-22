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
                <li>Salgados</li>
                <li>Coxinha de frango</li>
                <li>Bolinha de queijo</li>
                <li>Quibe</li>
                <li>Enroladinho de salsicha</li>
                <li>Pastel de carne</li>
                <li>Rissole de presunto e queijo</li>
                <li>Bolinha de batata recheada</li>
                <li>Croquete de carne</li>
            </ul>
            <img src={Coxinha} alt="coxinha" className='col-10 col-sm-5' data-aos='fade-in' data-aos-duration="2000" data-aos-offset="200"/>
            <ul className='d-flex flex-column align-items-center text-center'>
                <li>Massas</li>
                <li>Pastel de frango em massa folhada</li>
                <li>Sanduíches em geral</li>
                <li>Canudinho com atum</li>
                <li>Mini pizza de polenta</li>
                <li>Esfirra</li>
                <li>Empada</li>
                <li>Enrolado de presunto com queijo</li>
                <li>Bolinho de mandioca</li>
            </ul>
        </div>

    </div>);
}

export default Menu;