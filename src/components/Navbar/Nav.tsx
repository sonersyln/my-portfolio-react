import { Bars3Icon } from '@heroicons/react/20/solid'
import React from 'react'
import { Link, animateScroll } from 'react-scroll';
import './Nav.css'

interface Props {
    openNav: () => void;

}

const Nav = ({openNav}:Props) => {
  return (
    <div className='w-[100%] fixed z-[1000] top-0 h-[12vh] bg-[#141c27] shadow-md'>
            <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]' onClick={() => animateScroll.scrollToTop()}>
                <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'>
                    SONER
                    <span className='text-yellow-300'>SEYLAN</span>
                </h1>
                <div className="nav-link" onClick={() => animateScroll.scrollToTop()}>ANA SAYFA</div>

                <Link to="aboutSection" smooth={true} duration={500} className="nav-link cursor-pointer">HAKKIMDA</Link>

                <Link to="servicesSection" smooth={true} duration={500} className="nav-link cursor-pointer">UZMANLIKLARIM</Link>

                

                <Link to="projectSection" smooth={true} duration={500} className="nav-link cursor-pointer">PROJELER</Link>

                <Link to="footerSection" smooth={true} duration={500} className="nav-link cursor-pointer">İLETİŞİM</Link>

                <div onClick={openNav} className="navIcon">
                    <Bars3Icon className="navIcon__icon"/>
                </div>
            </div>
    </div>
  )
}

export default Nav