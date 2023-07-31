import React from 'react'
import './Header.css'
import logo from '../../gallery/Logo.jfif'

const Header = () => {
    return (
        <section className="h-wrapper">
            <div className=" flexCenter paddings innerWidth h-container">
                <img className=' w-20 h-10'  src="https://i.etsystatic.com/8684670/r/il/0b8739/2383211648/il_570xN.2383211648_nz05.jpg" alt="" />


                <div className="flexCenter h-menu">
                    <a href="">
                        Residence
                    </a>
                    <a href="">Our Values</a>
                    <a href="">Contact Us</a>
                    <a href="">Get Started</a>
                    <button className='button'>
                        <a href="">Contact</a>

                    </button>
                </div>
            </div>
        </section>
    )
}

export default Header