import { Bike } from "../../type/Bike"
import { Header } from "../Header/Header"
import { EmptyBox } from "../EmptyBox/EmptyBox"
import { GoodsPage } from "../GoodsPage/GoodsPage"
import { GoodsContext } from "../Context/Context"
import { TitleAndAmount } from "../Title&Amount/TitleAndAmount"
import { useContext, useState } from "react"
import { Pagination } from "../Pagination/Pagination"

export const Electro = () => {
    const { bikes } = useContext(GoodsContext)
    const [categoriesBike] = useState<Bike[]>(bikes)

    const electroBikes = categoriesBike.filter((param) => param.тип === 'електричний')

    return (
        <div className='main__bike-page-style'>
            <Header />
            {categoriesBike.length > 0 ?
                <>
                    <TitleAndAmount />
                    <GoodsPage goods={electroBikes} />
                    {electroBikes.length <= 8 ?
                        null :
                        <Pagination sortArr={electroBikes} />
                    }
                </>
                :
                <EmptyBox />
            }
        </div>
    )
}