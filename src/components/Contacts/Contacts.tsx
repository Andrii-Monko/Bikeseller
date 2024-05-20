import { FiPhone } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import './Contacts.scss';
import { Header } from "../Header/Header";


export const Contacts = () => (
    <>
        <Header />
        <div className='contacts'>
            <div className="contacts__container">

                <a
                    href="https://t.me/bikeseller_nazar"
                    target="blank"
                    className="contacts__item"
                >
                    <PiTelegramLogo className="contacts__icon" />
                    @Bikeseller Nazar
                </a>

                <a
                    href="https://www.instagram.com/bikeseller_nazar?igsh=OTQydGd6djV5dWRt"
                    target="blank"
                    className="contacts__item"
                >
                    <FaInstagram className="contacts__icon" />
                    @bikeseller_nazar
                </a>

                <a
                    title="0995415470 
                    0635750161"
                    href="tel:0995415470"
                    target="blank"
                    className="contacts__item"
                >
                    < FiPhone className="contacts__icon" />
                    0995415470  <br />
                    0635750161
                </a>

                <a
                    title="Bikesellernazar@gmail.com"
                    href="mailto:Bikesellernazar@gmail.com"
                    target="blank"
                    className="contacts__item"
                >
                    <MdOutlineMailOutline className="contacts__icon" />
                    Bikesellernazar@gmail.com
                </a>

                <a
                    title="вулиця Кирилівська, 115/3, Київ, 02000"
                    href="https://maps.app.goo.gl/rgdU6dSdyUMMRL6q9"
                    target="blank"
                    className="contacts__item"
                >
                    < MdOutlineLocationOn className="contacts__icon" />
                    місто Київ, вул. Кирилівська буд. 115/3

                </a>

                <div className="contacts__shedule">
                    <h3 className="contacts__shedule-title">
                        Графік роботи
                    </h3>

                    <p className="contacts__shedule-days">
                        понеділок-субота
                    </p>

                    <p className="contacts__shedule-hours">
                        10:00 - 18:00
                    </p>

                    <p className="contacts__shedule-days">
                        неділя
                    </p>

                    <p className="contacts__shedule-hours">
                        вихідний
                    </p>

                </div>
            </div>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.449471147732!2d30.467903999999994!3d50.488591899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cd004eb6fd17%3A0x7f99c10a21ca877c!2z0JLQtdC70L7QvNCw0LPQsNC30LjQvSDQnNCw0LnRgdGC0LXRgNC90Y8gQmlrZXNlbGxlcg!5e0!3m2!1suk!2sua!4v1715768778338!5m2!1suk!2sua"
                width="480px"
                height="500px"
            >
            </iframe>
        </div>
    </>
)