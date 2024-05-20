import './Basket.scss';
import emailjs from '@emailjs/browser';
import classNames from 'classnames';
import { Bike } from '../../type/Bike';
import { Header } from "../Header/Header"
import { Category } from '../Category/Category';
import { FaArrowDown } from "react-icons/fa";
import { GoodsContext } from "../Context/Context"
import { MdDoneOutline } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { useContext, useState } from "react"

export const Basket = () => {
    const { selectedGoods, setSelectedGoods } = useContext(GoodsContext)
    const [choosedBike, setChoosedBike] = useState<Bike[]>(selectedGoods)
    const [customerInfo, setCustomerInfo] = useState('')
    const [hasCustomerInfoError, setCustomerInfoError] = useState(false);
    const [phoneInfo, setPhoneInfo] = useState('')
    const [phoneError, setPhoneError] = useState(false);
    const [emailInfo, setEmailInfo] = useState('')
    const [emailError, setEmailError,] = useState(false);
    const [cityInfo, setCityInfo] = useState('')
    const [hasCityError, setCityError,] = useState(false);
    const [postInfo, setPostInfo] = useState('')
    const [hasPostError, setPostError,] = useState(false);
    const [orderInformation, setOrderInformation] = useState<Bike[] | never[]>([]);
    const [orderNumber] = useState(Math.floor(Math.random() * 556677))
    const [close, setClose] = useState(false);

    const orderInfo = () => {
        setOrderInformation(selectedGoods)
        setClose(true)
    }

    const deleteSelectedGoods = (key: string, query: string) => {
        const goodList = JSON.parse(localStorage.getItem(key) || '[]')
        localStorage.removeItem(key)
        localStorage.setItem(key, JSON.stringify([
            ...goodList.filter((deleteGood: Bike) => deleteGood.id !== query)])
        )

        setChoosedBike([...choosedBike.filter((deleteGood: Bike) => deleteGood.id !== query)])
        setSelectedGoods([...choosedBike.filter((deleteGood: Bike) => deleteGood.id !== query)])
    }

    // #region ФУНКЦІЯ ВІДПРАВКИ ІНФОРМАЦІЇ НА EMAIL
    function sendEmail() {
        const params = {
            order: (document.getElementById('order') as HTMLInputElement).value,
            bike: (document.getElementById('bike') as HTMLInputElement).value,
            price: (document.getElementById('price') as HTMLInputElement).value,
            name: (document.getElementById('name') as HTMLInputElement).value,
            phone: (document.getElementById('phone') as HTMLInputElement).value,
            email: (document.getElementById('email') as HTMLInputElement).value,
            city: (document.getElementById('city') as HTMLInputElement).value,
            novaPosta: (document.getElementById('nova') as HTMLInputElement).value,
            message: (document.getElementById('message') as HTMLInputElement).value,
        }
        emailjs.send("service_wzz2w9r", "template_t91y6q8", params, { publicKey: 'YFKOivQQ_LA2GwYE7' })

        deleteSelectedGoods('id', `${deletedGoods}`)
        orderInfo()
    }
    // #endregion

    // #region ПЕРЕВІРКА ЧИ ВСІ ТЕКСТОВІ ПОЛЯ ЗАПОВНЕННІ! */
    const handleSubmit = () => {
        if (!customerInfo) {
            setCustomerInfoError(true)
            return
        }

        if (!phoneInfo) {
            setPhoneError(true)
            return
        }

        if (!emailInfo) {
            setEmailError(true)
            return
        }

        if (!cityInfo) {
            setCityError(true)
            return
        }

        if (!postInfo) {
            setPostError(true)
            return
        }

        return sendEmail()
    }
    //#endregion

    const names = choosedBike.map(data => data.назва)
    const deletedGoods = selectedGoods.map((data) => `${data.id}`);

    let price = 0;

    if (choosedBike.length > 0) {
        price = choosedBike.map(s => s.ціна).reduce((prev: number, next: number) => prev + next)
    }
    
    return (
        <>
            <Header />

            {close ?
                <div>
                    {orderInformation.map((order) =>
                        <div className='orderInfo'>
                            <MdDoneOutline className='orderInfo__icon' />
                            <p className='orderInfo__text'>
                                Ваш замовлення № {orderNumber} <br />
                                на велосипед <br />

                                {order.назва} <br />

                                <img
                                    src={order.img}
                                    alt=""
                                    className='orderInfo__img'
                                /> <br />
                                успішно оформлено <br />
                            </p>

                            <p className='orderInfo__text'>
                                вартість замовлення {order.ціна}.00грн!
                            </p>

                            <p className='orderInfo__text'>
                                Ми зв'яжемося з Вами для уточнення даних <br />
                                протягом найближчого часу
                            </p>

                            <h4>
                                Дякуємо за Ваш вибір
                            </h4>
                            <button
                                onClick={() => setClose(false)}
                                className='orderInfo__button'
                            >
                                <IoIosCloseCircle className='orderInfo__button-icon' />
                            </button>
                        </div>
                    )}
                </div> : null
            }


            {choosedBike.length > 0 ?
                <div className='main'>
                    <div className='main__top-container'>
                        <div className='main__good'>
                            {choosedBike.map((select) =>
                                <div
                                    className='good__container'
                                    key={select.id}
                                >
                                    <div
                                        className='basket'
                                        key={select.id}
                                    >
                                        <button
                                            title='Видалити із корзини'
                                            className='basket__close-button'
                                            onClick={() => {
                                                deleteSelectedGoods('id', select.id)
                                            }}
                                        >
                                            <IoCloseOutline />
                                        </button>

                                        <img
                                            src={select.img}
                                            alt="photo"
                                            className='basket__photo'
                                        />

                                        <div>
                                            <h4 className='basket__text'>
                                                {select.назва}
                                            </h4>

                                            <h3 className='basket__text'>
                                                {`${select.ціна}${'.00грн.'}`}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className='payInfo'>
                            <p className='payInfo__text'>
                                Для оформлення замовлення ви можете оплатити все замовлення одразу <br />

                                <h3 className='payInfo__receiver'>
                                    {price}.00грн.  <br />
                                </h3>

                                <h4>
                                    АБО
                                </h4>

                                внесити предоплату в розмірі <br />
                                1000 грн. <br />
                                та оплатити решту суми при отриманні товару <br />
                            </p>
                            <div className='payInfo__receiver-box'>
                                <p className='payInfo__receiver'>
                                    Отримувач: ФОП Смілянський Назарій Юрійович
                                </p>

                                <p className='payInfo__receiver'>
                                    Назва банку: АТ "ПУМБ"
                                </p>

                                <p className='payInfo__receiver'>
                                    ЄДРПОУ: 3742601393
                                </p>

                                <p className='payInfo__receiver'>
                                    IBAN: UA753348510000000026002210461
                                </p>
                            </div>

                            <p className='payInfo__text'>
                                !!! ОБОВ'ЯЗКОВО ВКАЖІТЬ В ПРИЗНАЧЕНІ ПЛАТЕЖУ  <br /> 
                                "ОПЛАТА ЗА ЗАМОВЛЕННЯ № {orderNumber}"
                            </p>
                        </div>

                        <form className='input'>
                            <input
                                required
                                value={selectedGoods.map(choseBike => choseBike.id)}
                                id='bike'
                                type="text"
                                placeholder='Ваше велосипед'
                                className='basket__input-unvisible'
                            />

                            <input
                                value={customerInfo}
                                onChange={(event) => { setCustomerInfo(event.target.value) }}
                                required
                                id='name'
                                type="text"
                                placeholder='Ім`я Прізвище'
                                className={classNames('basket__input', { 'input__error': hasCustomerInfoError })}
                            />

                            <input
                                value={phoneInfo}
                                onChange={(event) => { setPhoneInfo(event.target.value) }}
                                required
                                id='phone'
                                type="tel"
                                placeholder='(000) 000 00 00'
                                className={classNames('basket__input', { 'input__error': phoneError })}
                            />

                            <input
                                value={emailInfo}
                                onChange={(event) => { setEmailInfo(event.target.value) }}
                                required
                                id='email'
                                type='email'
                                placeholder='Е-mail'
                                className={classNames('basket__input', { 'input__error': emailError })}
                            />

                            <input
                                value={cityInfo}
                                onChange={(event) => { setCityInfo(event.target.value) }}
                                required
                                id='city'
                                type="text"
                                placeholder='Найкраще в світі місто ...'
                                className={classNames('basket__input', { 'input__error': hasCityError })}
                            />

                            <input
                                value={postInfo}
                                onChange={(event) => { setPostInfo(event.target.value) }}
                                required
                                id='nova'
                                type="number"
                                placeholder='Відділення Нової пошти'
                                className={classNames('basket__input', { 'input__error': hasPostError })}
                            />

                            <input
                                type='text'
                                id="message"
                                placeholder='Ваш коментар'
                                className='basket__input'
                            />

                            <input
                                id='order'
                                type="text"
                                value={`${'замовлення №'} ${orderNumber}`}
                                placeholder={`${'замовлення №'} ${orderNumber}`}
                                className='basket__input-unvisible'
                            />

                            <input
                                type="text"
                                id='price'
                                value={`${price}${'.00грн'}`}
                                className='basket__input-unvisible'
                            />

                            <button
                                className='basket__input'
                                onClick={() => {
                                    handleSubmit()
                                }}
                            >
                                Оформити замовлення
                            </button>

                        </form>
                    </div>
                </div> :

                <div className='basket__empty-basket'>
                    <h1 className='basket__empty-basket-title'>
                        На жаль Ваша <br />
                        Корзина порожня!  <br />
                        Давайте це виправимо <br />
                        <FaArrowDown />
                    </h1>
                    <Category />
                </div>
            }
        </>

    )
}