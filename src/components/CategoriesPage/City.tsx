import '../../App.scss';
import { Bike } from '../../type/Bike';
import { Header } from "../Header/Header"
import { EmptyBox } from '../EmptyBox/EmptyBox';
import { GoodsPage } from "../GoodsPage/GoodsPage"
import { useLocation } from "react-router-dom";
import { GoodsContext } from "../Context/Context"
import { TitleAndAmount } from '../Title&Amount/TitleAndAmount';
import { useContext, useState } from "react"
import { Pagination } from '../Pagination/Pagination';

export const City = () => {
    const { bikes } = useContext(GoodsContext)
    const [categoriesBike] = useState<Bike[]>(bikes)

    const cityBikes = categoriesBike.filter((param) => param.тип === 'міський')

    return (
        <div className='main__bike-page-style'>
            <Header />
            {categoriesBike.length > 0 ?
                <>
                    <TitleAndAmount />
                    <GoodsPage goods={cityBikes} />

                    {cityBikes.length <= 8 ?
                        null :
                        <Pagination sortArr={cityBikes} />
                    }
                </>
                :
                <EmptyBox />
            }
        </div>
    )
}