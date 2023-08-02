import React, { useState } from 'react'
import './Header.css'
import logo from '../../gallery/Logo.jfif'
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";


const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: !menuOpened && "-100%" }
        }

    }


    return (
        <section className="h-wrapper">
            <div className=" flexCenter paddings innerWidth h-container">
                <img className=' w-20 h-10' src="https://i.etsystatic.com/8684670/r/il/0b8739/2383211648/il_570xN.2383211648_nz05.jpg" alt="" />


                <OutsideClickHandler onOutsideClick={()=>{
                    setMenuOpened(false)
                }}> 


                    <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
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
                </OutsideClickHandler>




                <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
                    <BiMenuAltRight size={30} />

                </div>
            </div>
        </section>
    )
}

export default Header