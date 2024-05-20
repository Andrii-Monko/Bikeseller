import './SortGoodsFile.scss';
import { useContext } from "react"
import { GoodsContext } from "../Context/Context"
import { useSearchParams } from "react-router-dom";

export const SortGoodsFile = () => {
    const { setSelectedParam, bikes } = useContext(GoodsContext)
    
    return (
        <div className="sort__box">
            <select
                className='select'
                onChange={event =>
                    setSelectedParam(event.target.value)
                }
            >
                <option className="select__option" disabled selected>Сортувати за:</option>
                <option className="select__option" value="ціна">Ціна</option>
                <option className="select__option" value="діаметрКолеса">Діметер колеса</option>
                <option className="select__option" value="система">Система</option>
                <option className="select__option" value="рама">Рама</option>
            </select>
        </div>
    )
}