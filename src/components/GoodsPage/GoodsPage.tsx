import './GoodsPage.scss';
import classNames from 'classnames';
import { Bike } from "../../type/Bike"
import { Link } from "react-router-dom";
import { GoodsContext } from '../Context/Context';
import { SortGoodsFile } from '../SortGoodsFile/SortGoodsFile';
import React, { useContext, useState } from "react"
import { GoCodeOfConduct } from 'react-icons/go';

type Props = {
    goods: Bike[]
}

// #region ПІДГОТОВКА ВІДСОРТОВАНОГО МАСИВУ
const sortGoods = (goods: Bike[], sortParam: string) => {
    const arr = [...goods]
    arr.sort((a, b) => a.назва.localeCompare(b.назва))
    arr.sort((good1, good2) => {
        const value1 = good1[sortParam as keyof Bike];
        const value2 = good2[sortParam as keyof Bike];

        if (typeof value1 === 'string' && typeof value2 === 'string') {
            return value1.localeCompare(value2);
        }

        return (value1 as number) - (value2 as number);
    })

    return arr;
}

//#endregion

export const GoodsPage: React.FC<Props> = ({ goods }) => {
    const { selectedParam, setSelectedGoods, bikes, goodsPerPage, currentPage } = useContext(GoodsContext);

    // #region ФІЛЬТРАЦІЯ І СОРТУВАННЯ ТОВАРУ
    const [query, setQuery] = useState('');            /* STATE ДЛЯ ПОШУКУ ТОВАРІВ */
    const [arr] = useState(goods)                      /* STATE ДЛЯ ФІЛЬТРАЦІЇ ТОВАРУ */

    const filteredGoods = arr.filter((good) =>
        good.назва.toLowerCase().includes(query.toLowerCase())
    )

    const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value)
    }
    //#endregion

    // #region ДОБАВИТИ ТОВАРИ В КОРЗИНУ
    const addToBasket = (key: string, newValue: Bike) => {
        const goodsInBasket = JSON.parse(localStorage.getItem(key) || "[]")
        localStorage.setItem(key, JSON.stringify([...goodsInBasket, newValue]))
    }

    const addToBasketImmediately = () => {
        const item = localStorage.getItem('id');
        return item ? JSON.parse(item) as Bike[] : [];
    }
    //#endregion

    const lastGoodsIndex = currentPage * goodsPerPage;
    const firstGoodsIndex = lastGoodsIndex - goodsPerPage;
    const paginationArr = filteredGoods.slice(firstGoodsIndex, lastGoodsIndex);
    const currentGoods = sortGoods(paginationArr, selectedParam as string);

    return (
        <>
            <div className='search__container'>
                <input
                    value={query}
                    onChange={handleQueryChange}
                    type='search'
                    className='search__input'
                    placeholder='Знайти на сайті'
                />

                <SortGoodsFile />
            </div>

            <div className="good">
                {currentGoods.map((good) =>
                    <div className="good__box" key={good.id}>
                        <Link
                            to={`${good.id}`}
                            className="link__style"
                        >

                            <img
                                src={good.img}
                                alt="фото-велосипеда"
                                className="good__photo"
                            />

                            <h3 className='good__name'>
                                {good.назва}
                            </h3>
                        </Link>

                        {good.ціна < 9000 ?
                            <h4 className="good__price">
                                {`${good.ціна}${'$'}`}
                            </h4> :

                            <h4 className="good__price">
                                {`${good.ціна}${'.00 грн'}`}
                            </h4>
                        }

                        <tr className="good__param-box">
                            <td className="good__param">Тип</td>
                            <td className='good__info'>{good.тип}</td>
                        </tr>

                        <tr className="good__param-box">
                            <td className="good__param">Система</td>
                            <td className='good__info'>{good.система}</td>
                        </tr>

                        <tr className="good__param-box">
                            <td className="good__param">Розмір Коліс</td>
                            <td className='good__info'>{good.діаметрКолеса}</td>
                        </tr>

                        <tr className="good__param-box">
                            <td className="good__param">Розмір Рами</td>
                            <td className='good__info'>{good.розмірРами}</td>
                        </tr>

                        <div className='button__box'>
                            <button
                                className='good__button'
                                onClick={() => {
                                    addToBasket('id', good)
                                    setSelectedGoods(addToBasketImmediately())
                                }}
                            >
                                Купити
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}