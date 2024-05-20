import './DetailPage.scss';
import { Bike } from "../../type/Bike";
import { Header } from "../Header/Header";
import { GoHome } from "react-icons/go";
import { GoodsContext } from '../Context/Context';
import { FaChevronRight } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react"
import { Link, useLocation, useParams } from "react-router-dom";

export const DetailPage = () => {
    const { id } = useParams();
    const { setSelectedGoods } = useContext(GoodsContext)
    const [detail, setDetail] = useState<Bike | null>(null);
    const [mainPhoto, setMainPhoto] = useState(0)
    const photos = detail?.photo

    useEffect(() => {
        fetch(`/products/${id}.json`)
            .then((responce) => responce.json())
            .then((data) => setDetail(data))
    }, [])

    const addToBasket = (key: string, newValue: Bike) => {
        const goodsInBasket = JSON.parse(localStorage.getItem(key) || "[]")
        localStorage.setItem(key, JSON.stringify([...goodsInBasket, newValue]))
    }

    const addToBasketImmediately = () => {
        const item = localStorage.getItem('id');
        return item ? JSON.parse(item) as Bike[] : [];
    }

    const location = useLocation()
    const link = `${'/'}${location.pathname.split('/')[1]}`;

    return (
        <div className='detail-page'>
            <Header />
            <div className="addres">
                <Link to='/' className="addres__part">
                    <GoHome />
                </Link>

                <FaChevronRight className="addres__part" />

                <Link to={link} className='addres__part'>
                    {location.pathname.split('/')[1] === 'Mountain' ?
                        'Гірські' : null
                    }
                    {location.pathname.split('/')[1] === 'Road' ?
                        'Шосейні' : null
                    }
                    {location.pathname.split('/')[1] === 'Gravel' ?
                        'Гравійні' : null
                    }
                    {location.pathname.split('/')[1] === 'City' ?
                        'Міські' : null
                    }
                    {location.pathname.split('/')[1] === 'Lady' ?
                        'Жіночі' : null
                    }
                    {location.pathname.split('/')[1] === 'Electro' ?
                        'Електровелосипеди' : null
                    }
                </Link>

                <FaChevronRight className="addres__part" />

                <p className="addres__part">
                    {detail?.назва}
                </p>
            </div>

            <div className="detail">
                <h2 className='detail__title'>
                    {detail?.назва}
                </h2>

                <div className="detail__photo-box">
                    {photos?.map((photo, index) =>
                        <img
                            key={photo}
                            onClick={() => { setMainPhoto(index) }}
                            src={`../${photo}`}
                            alt="photo"
                            className="detail__photo"
                        />
                    )}
                </div>

                <div className='detail__main-photo-box'>
                    <img
                        src={`../${photos?.[mainPhoto]}`}
                        alt="photo"
                        className="detail__main-photo"
                    />
                </div>

                <div className="detail__describe">
                    <div className='detail__describe-box' >
                        <h1 className='detail__name'>
                            {detail?.назва}
                        </h1>

                        <h2 className='detail__price'>
                            {`${detail?.ціна}${'.00грн.'}`}
                        </h2>
                    </div>

                    <tr>
                        <td className="detail__info">тип:</td>
                        <td className="detail__param">{detail?.тип}</td>
                    </tr>

                    {detail?.мотор === "" ? null :
                        <tr>
                            <td className="detail__info">мотор:</td>
                            <td className="detail__param">{detail?.мотор}</td>
                        </tr>
                    }

                    {detail?.акамулятор === "" ? null :
                        <tr>
                            <td className="detail__info">акамулятор:</td>
                            <td className="detail__param">{detail?.акамулятор}</td>
                        </tr>
                    }

                    {detail?.пробіг === "" ? null :
                        <tr>
                            <td className="detail__info">пробіг:</td>
                            <td className="detail__param">{detail?.пробіг}</td>
                        </tr>
                    }

                    {detail?.рама === '' ? null :
                        <tr>
                            <td className="detail__info">рама:</td>
                            <td className="detail__param">{detail?.рама.length}</td>
                        </tr>
                    }

                    {detail?.діаметрКолеса === 0 ? null :
                        <tr>
                            <td className="detail__info">розмір Коліс:</td>
                            <td className="detail__param">{detail?.діаметрКолеса}</td>

                        </tr>
                    }

                    {detail?.розмірРами === '' ? null :
                        <tr>
                            <td className="detail__info">розмір рами:</td>
                            <td className="detail__param">{detail?.розмірРами}</td>
                        </tr>
                    }

                    {detail?.вилка === '' ? null :
                        <tr>
                            <td className="detail__info">вилка:</td>
                            <td className="detail__param">{detail?.вилка}</td>
                        </tr>
                    }

                    {detail?.["тип вилки"] === '' ? null :
                        <tr>
                            <td className="detail__info">тип вилки:</td>
                            <td className="detail__param">{detail?.["тип вилки"]}</td>
                        </tr>
                    }

                    {detail?.система === '' ? null :
                        <tr>
                            <td className="detail__info">система:</td>
                            <td className="detail__param">{detail?.система}</td>
                        </tr>
                    }

                    {detail?.["перемикач задній"] === '' ? null :
                        <tr>
                            <td className="detail__info">перемикач задній:</td>
                            <td className="detail__param">{detail?.["перемикач задній"]}</td>
                        </tr>
                    }

                    {detail?.касета === '' ? null :
                        <tr>
                            <td className="detail__info">касета:</td>
                            <td className="detail__param">{detail?.касета}</td>
                        </tr>
                    }

                    {detail?.ланцюг === '' ? null :
                        <tr>
                            <td className="detail__info">ланцюг:</td>
                            <td className="detail__param">{detail?.ланцюг}</td>
                        </tr>
                    }

                    {detail?.манетки === '' ? null :
                        <tr>
                            <td className="detail__info">манетки:</td>
                            <td className="detail__param">{detail?.манетки}</td>
                        </tr>
                    }

                    {detail?.гріпси === '' ? null :
                        <tr>
                            <td className="detail__info">гріпси:</td>
                            <td className="detail__param">{detail?.гріпси}</td>
                        </tr>
                    }

                    {detail?.гальма === '' ? null :

                        <tr>
                            <td className="detail__info">гальма:</td>
                            <td className="detail__param">{detail?.гальма}</td>
                        </tr>
                    }

                    {detail?.шатуни === '' ? null :
                        <tr>
                            <td className="detail__info">шатуни:</td>
                            <td className="detail__param">{detail?.шатуни}</td>
                        </tr>
                    }

                    {detail?.колеса === '' ? null :
                        <tr>
                            <td className="detail__info">колеса:</td>
                            <td className="detail__param">{detail?.колеса}</td>
                        </tr>
                    }

                    {detail?.передняВтулка === '' ? null :
                        <tr>
                            <td className="detail__info">передня втулка:</td>
                            <td className="detail__param">{detail?.передняВтулка}</td>
                        </tr>
                    }

                    {detail?.задняВтулка === '' ? null :
                        <tr>
                            <td className="detail__info">задня втулка:</td>
                            <td className="detail__param">{detail?.задняВтулка}</td>
                        </tr>
                    }

                    {detail?.покришки === '' ? null :
                        <tr>
                            <td className="detail__info">покришки:</td>
                            <td className="detail__param">{detail?.покришки}</td>
                        </tr>
                    }

                    {detail?.вага === 0 ? null :
                        <tr>
                            <td className="detail__info">вага:</td>
                            <td className="detail__param">{detail?.вага}</td>
                        </tr>
                    }

                    <div className="button-box">
                        <button
                            className="detail__button"
                            onClick={() => {
                                addToBasket('id', detail as Bike)
                                setSelectedGoods(addToBasketImmediately())
                            }}
                        >
                            Купити
                        </button>
                    </div>
                </div>
            </div>
        </div>


    )
}