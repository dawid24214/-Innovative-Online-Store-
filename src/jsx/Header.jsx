import React from "react";
import '../scss/_main.scss';
import {Link} from "react-router-dom";

export const Header = () =>{
    return(
        <>
        <header className='header'>
            <div className='header__container container'>
                <a href='#' className='logo'>DG</a>
                <nav>
                    <input type='checkbox' className= "menu__btn" id='menu__btn'/>
                    <label htmlFor='menu__btn' className='menu__toggle'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <ul className='header__nav'>
                        <li className='nav__element'>
                            <Link to='/' className='nav__link'>Strona główna </Link>
                        </li>
                        <li className='nav__element'>
                            <Link to='/Products' className='nav__link'>Produkty</Link>
                        </li>
                        <li className='nav__element'>
                            <Link to='/HelpCenter' className='nav__link'>Centrum pomocy </Link>
                        </li>
                        <li className='nav__element'>
                            <Link to='/Contact' className='nav__link'>Kontakt </Link>
                        </li>
                        <li className='nav__element'>
                            <Link to='/LoginForm' className='nav__link'>Logowanie</Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
        </>
    )
};