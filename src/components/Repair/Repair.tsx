import './Repair.scss';
import { Header } from "../Header/Header";
import { GrDeliver } from "react-icons/gr";
import { BsMagic } from "react-icons/bs";
import { MdDone } from "react-icons/md";

export const Repair = () => (
    <div className='top'>
        <Header />
        <div className='repair'>
            <div className="repair__top">
                <img
                    src="./img/icon/repair.jpg"
                    alt=""
                    className='repair__photo'
                />

                <div className='repair__container'>
                    <p className='repair__text'>
                        Ремонта та обслуговування на вулиці
                        <a
                            title="вулиця Кирилівська, 115/3, Київ, 02000"
                            href="https://maps.app.goo.gl/rgdU6dSdyUMMRL6q9"
                            target="blank"
                            className="contacts__item"
                        >
                            Кирилівська, 115/3
                        </a>
                    </p>

                    <h2 className='repair__title'>
                        Ремонтні роботи будь якої складності
                    </h2>

                    <h3 className='repair__title'>
                        Першокласна діагностика і ремонт професійних майстрів!
                    </h3>

                    <p className='repair__describe'>
                        Діагностика поломок та несправностей, поточне та повне ТО велосипедів, налаштування тормозів та передач, зборка велосипедів, консервація на сезонне зберігання
                    </p>

                    <p className='repair__describe'>
                        Щоб отримати консультацію телефонуйте за номером: <br />
                        <a href="tel:0995415470" className='repair__describe'>0995415470</a> <br />
                        <a href="tel:0635750161" className='repair__describe'>0635750161</a>
                    </p>
                </div>
            </div>

            <div className='repair__box'>
                <p className='repair__step'>
                    <GrDeliver /> <br />
                    крок 1: <br />
                    Доставити велосипед в нашу майстерню
                </p>
                <p className='repair__step'>
                    <BsMagic /> <br />
                    крок 2: <br />
                    Велосипедно-Течнічна магія
                </p>

                <p className='repair__step'>
                    <MdDone /> <br />
                    крок 3: <br />
                    Забрати готовий велосипед
                </p>
            </div>
        </div>
    </div>
)
