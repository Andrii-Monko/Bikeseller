import { Bike } from "../../type/Bike"
import { Header } from "../Header/Header"
import { EmptyBox } from "../EmptyBox/EmptyBox"
import { GoodsPage } from "../GoodsPage/GoodsPage"
import { GoodsContext } from "../Context/Context"
import { TitleAndAmount } from "../Title&Amount/TitleAndAmount"
import { useContext, useState } from "react"
import { Pagination } from "../Pagination/Pagination"

export const Gravel = () => {
    const { bikes } = useContext(GoodsContext)
    const [categoriesBike] = useState<Bike[]>(bikes)

    const gravelBikes = categoriesBike.filter((param) => param.тип === 'гравійний')

    return (
        <div className='main__bike-page-style'>
            <Header />
            {categoriesBike.length > 0 ?
                <>
                    <TitleAndAmount />
                    <GoodsPage goods={gravelBikes} />
                    {gravelBikes.length <= 8 ?
                        null :
                        <Pagination sortArr={gravelBikes} />
                    }
                </>
                :
                <EmptyBox />
            }
        </div>
    )
}