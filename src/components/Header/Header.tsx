import './Header.scss';
import { IoMenu } from "react-icons/io5";
import { useContext } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";
import { GoodsContext } from '../Context/Context';
import { CiShoppingBasket } from "react-icons/ci";
import { Link, NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export const Header = () => {
    const location = useLocation()
    const CategoryLink = ['/Mountain', '/Road', '/City', '/Gravel', '/Lady', '/Electro']
    const { selectedGoods } = useContext(GoodsContext)

    return (
        <div className="header" id='header'>
            <div className='header__mixin-version'>
                <Link to={'/'}>
                    <img
                        src="/img/icon/logo.jpg"
                        alt="header__logo"
                        className="header__logo"
                        title='На головну'
                    />
                </Link>

                <p className='header__title'>
                    BIKESELLER
                </p>

                <Link to='/Menu'>
                    <IoMenu
                        title='Меню'
                        className='header__menu button'
                    />
                </Link>
            </div>

            {location.pathname === '/' ?
                <div className='header__contact-container'>
                    <p className='header__text'>
                        Якщо життя, це рух  <br /> тоді ми продаємо безсмертя!
                    </p>
                </div> :

                CategoryLink.map(link =>
                    location.pathname === link ?
                        null :
                        <Link
                            to={link}
                            key={link}
                            className='header__link'
                        >
                            {link === '/Mountain' ?
                                'Гірські велосипеди' : null
                            }
                            {link === '/Gravel' ?
                                'Гравійні велосипеди' : null
                            }
                            {link === '/Road' ?
                                'Шосейні велосипеди' : null
                            }
                            {link === '/City' ?
                                'Міські велосипеди' : null
                            }
                            {link === '/Lady' ?
                                'Жіночі велосипеди' : null
                            }
                            {link === '/Electro' ?
                                'Електро велосипеди' : null
                            }
                        </Link>
                )
            }

            <div className='header__basket-box'>
                <NavLink
                    className='header__basket-icon'
                    to='/Contacts'
                >
                    <FaPhoneAlt className='header__cart' />
                </NavLink>

                <NavLink
                    className='header__basket-icon'
                    to='/Repair'
                >
                    <GiAutoRepair
                        title='Ремонт та обслуговування'
                        className='header__cart'
                    />
                </NavLink>

                <NavLink
                    className='header__basket-i'
                    to='/Basket'
                >
                    {selectedGoods.length > 0 ?
                        <div className='header__basket-amount'>
                            {selectedGoods.length}
                        </div> :
                        null
                    }
                    <CiShoppingBasket
                        title='Корзина з обраними товарами'
                        className='header__cart'
                    />
                </NavLink>
            </div>
        </div>
    )
}