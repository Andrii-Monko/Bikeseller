import './TitleAndAmount.scss';
import { FaLeftLong } from "react-icons/fa6";
import { useContext } from "react";
import { GoodsContext } from "../Context/Context";
import { Link, useLocation } from "react-router-dom"

export const TitleAndAmount = () => {
    const { bikes } = useContext(GoodsContext)
    const location = useLocation()
    const mountAmount = bikes.filter(param => param.тип === 'гірський')
    const roadAmount = bikes.filter(param => param.тип === 'шосейний')
    const cityAmount = bikes.filter(param => param.тип === 'міський')
    const womenAmount = bikes.filter(param => param.тип === 'жіночий')
    const electroAmount = bikes.filter(param => param.тип === 'електричний')
    const gravelAmount = bikes.filter(param => param.тип === 'гравійний')

    return (
        <div className="title__container">
            <div className='title__button-box'>

                <Link to='/' className="button__back">
                    <FaLeftLong />
                    На головну
                </Link>

                <div>
                    {location.pathname === '/Mountain' ?
                        <>
                            <h1 className="bike__type">
                                Гірські велосипеди
                            </h1>
                            <h4 className="bike__amount">
                                {`${'кількість велосипедів'} ${mountAmount.length}`}
                            </h4 >
                        </>
                        :
                        null
                    }

                    {location.pathname === '/Road' ?
                        <>
                            <h1 className="bike__type">
                                Шосейні велосипеди
                            </h1>

                            <h4 className="bike__amount">
                                {`${'кількість велосипедів'} ${roadAmount.length}`}
                            </h4 >
                        </>
                        :
                        null
                    }

                    {location.pathname === '/City' ?
                        <>
                            <h1 className="bike__type">
                                Міські велосипеди
                            </h1>

                            <h4 className="bike__amount">
                                {`${'кількість велосипедів'} ${cityAmount.length}`}
                            </h4 >
                        </>
                        :
                        null
                    }

                    {location.pathname === '/Gravel' ?
                        <>
                            <h1 className="bike__type">
                                Гравійні велосипеди
                            </h1>

                            <h4 className="bike__amount">
                                {`${'кількість велосипедів'} ${gravelAmount.length}`}
                            </h4 >
                        </>
                        :
                        null
                    }

                    {location.pathname === '/Lady' ?
                        <>
                            <h1 className="bike__type">
                                Жіночі велосипеди
                            </h1>

                            <h4 className="bike__amount">
                                {`${'кількість велосипедів'} ${womenAmount.length}`}
                            </h4 >
                        </>
                        :
                        null
                    }

                    {location.pathname === '/Electro' ?
                        <>
                            <h1 className="bike__type">
                                Електричні велосипеди
                            </h1>

                            <h4 className="bike__amount">
                                {`${'кількість велосипедів'} ${electroAmount.length}`}
                            </h4 >
                        </>
                        :
                        null
                    }
                </div>
            </div>
        </div>
    )
} 