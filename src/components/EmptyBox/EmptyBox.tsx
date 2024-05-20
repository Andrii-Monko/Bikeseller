import { Link, useLocation } from 'react-router-dom';
import './EmptyBox.scss';
import { FaLeftLong } from "react-icons/fa6";


export const EmptyBox = () => {
    const location = useLocation()
    const CategoryLink = ['/Mountain', '/Road', '/City', '/Gravel', '/Lady', '/Electro']
    return (
        <div className="empty">
            <div className='empty__container'>

                <Link
                    to='/'
                    className='empty__link'
                >
                    <FaLeftLong className='empty__icon' />
                    Повернутися на головну
                </Link>

                <p className='empty__text'>
                    На жаль на даний момент ми не можемо запропонувати вам велосипеди із даної категорії, 
                    <br /> але ви можете ознайомитися із іншими пропозиціями
                </p>
    
                <div className='empty__box'>

                    {CategoryLink.map((link) =>
                        location.pathname === link ?
                            null :
                            <Link to={link} className='empty__link'>
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
                                    'Електро-велосипеди' : null
                                }
                            </Link>
                    )}
                </div>
            </div>
        </div>
    )
}