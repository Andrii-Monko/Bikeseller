import '../../App.scss';
import { Bike } from '../../type/Bike';
import { Header } from "../Header/Header"
import { EmptyBox } from '../EmptyBox/EmptyBox';
import { GoodsPage } from "../GoodsPage/GoodsPage"
import { useLocation } from "react-router-dom";
import { GoodsContext } from "../Context/Context"
import { TitleAndAmount } from '../Title&Amount/TitleAndAmount';
import { useContext, useState } from "react"

export const CategoriesPage = () => {
    const location = useLocation()
    const { bikes } = useContext(GoodsContext)
    const [categoriesBike] = useState<Bike[]>(bikes)

    const cityBikes = categoriesBike.filter((param) => param.тип === 'міський')
    const roadBikes = categoriesBike.filter((param) => param.тип === 'шосейний')
    const ladyBikes = categoriesBike.filter((param) => param.тип === 'жіночий')
    const gravelBikes = categoriesBike.filter((param) => param.тип === 'гравійний')
    const mountainBikes = categoriesBike.filter((param) => param.тип === 'гірський')
    const electroBikes = categoriesBike.filter((param) => param.тип === 'електричний')

    return (
        <div className='main__bike-page-style'>
            <Header />
            {categoriesBike.length > 0 ?
                <>
                    <TitleAndAmount />
                    {location.pathname === '/City' ? <GoodsPage goods={cityBikes} /> : null}
                    {location.pathname === '/Road' ? <GoodsPage goods={roadBikes} /> : null}
                    {location.pathname === '/Lady' ? <GoodsPage goods={ladyBikes} /> : null}
                    {location.pathname === '/Gravel' ? <GoodsPage goods={gravelBikes} /> : null}
                    {location.pathname === '/Electro' ? <GoodsPage goods={electroBikes} /> : null}
                    {location.pathname === '/Mountain' ? <GoodsPage goods={mountainBikes} /> : null}
                </>
                :
                <EmptyBox />
            }
        </div>
    )
}