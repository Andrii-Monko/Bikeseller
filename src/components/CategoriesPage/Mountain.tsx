import { Bike } from "../../type/Bike"
import { Header } from "../Header/Header"
import { EmptyBox } from "../EmptyBox/EmptyBox"
import { GoodsPage } from "../GoodsPage/GoodsPage"
import { GoodsContext } from "../Context/Context"
import { TitleAndAmount } from "../Title&Amount/TitleAndAmount"
import { useContext, useState } from "react"
import { Pagination } from "../Pagination/Pagination"

export const Mountain = () => {
    const { bikes } = useContext(GoodsContext)
    const [categoriesBike] = useState<Bike[]>(bikes)
    const mountainBikes = categoriesBike.filter((param) => param.тип === 'гірський')

    return (
        <div className='main__bike-page-style'>
            <Header />
            {categoriesBike.length > 0 ?
                <>
                    <TitleAndAmount />
                    <GoodsPage goods={mountainBikes} />
                    {mountainBikes.length <= 8 ?
                        null :
                        <Pagination sortArr={mountainBikes} />
                    }
                </>
                :
                <EmptyBox />
            }
        </div>
    )
}