import './Menu.scss';
import { Link } from "react-router-dom"
import { Header } from "../Header/Header"

export const Menu = () => {

    return (
        <>
            <Header />
            <div className='menu'>
                <nav className="menu__nav">
                    <ul className="menu__list">
                        <li className="menu__link">
                            <Link to='/' className="menu__item">Головна сторінка</Link>
                        </li>
                        <li className="menu__link">
                            <Link to='/Basket' className="menu__item"> Корзина</Link>
                        </li>
                        <li className="menu__link">
                            <Link to='/Repair' className="menu__item"> Ремонт та обслуговування</Link>
                        </li>
                        <li className="menu__link">
                            <Link to='/Contacts' className="menu__item"> Контакти</Link>
                        </li>

                        <li className="menu__link">
                            КАТЕГОРІЇ:
                        </li>
                        
                        <ul>
                            <li className="menu__link">
                                <Link to='/Mountain' className="menu__item"> Гірські велосипеди</Link>
                            </li>
                            <li className="menu__link">
                                <Link to='/Road' className="menu__item"> Шосейні велосипеди</Link>
                            </li>
                            <li className="menu__link">
                                <Link to='/Gravel' className="menu__item"> Гравійні велосипеди</Link>
                            </li>
                            <li className="menu__link">
                                <Link to='/City' className="menu__item"> Міські велосипеди</Link>
                            </li>
                            <li className="menu__link">
                                <Link to='/Lady' className="menu__item"> Жіночі велосипеди</Link>
                            </li>
                            <li className="menu__link">
                                <Link to='/Electro' className="menu__item"> Електровелосипеди</Link>
                            </li>
                        </ul>
                    </ul>
                </nav>
            </div>
        </>
    )
}