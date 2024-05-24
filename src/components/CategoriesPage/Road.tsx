import { Bike } from "../../type/Bike"
import { Header } from "../Header/Header"
import { EmptyBox } from "../EmptyBox/EmptyBox"
import { GoodsPage } from "../GoodsPage/GoodsPage"
import { GoodsContext } from "../Context/Context"
import { TitleAndAmount } from "../Title&Amount/TitleAndAmount"
import { useContext, useState } from "react"
import { Pagination } from "../Pagination/Pagination"

export const Road = () => {
    const { bikes } = useContext(GoodsContext)
    const [categoriesBike] = useState<Bike[]>(bikes)

    const roadBikes = categoriesBike.filter((param) => param.тип === 'шосейний')

    return (
        <div className='main__bike-page-style'>
            <Header />
            {categoriesBike.length > 0 ?
                <>
                    <TitleAndAmount />
                    <GoodsPage goods={roadBikes} />
                    {roadBikes.length <= 8 ?
                        null :
                        <Pagination sortArr={roadBikes} />
                    }
                </>
                :
                <EmptyBox />
            }
        </div>
    )
}
