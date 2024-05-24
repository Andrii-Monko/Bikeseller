import './Pagination.scss';
import classNames from 'classnames';
import { Bike } from "../../type/Bike";
import { GoodsContext } from "../Context/Context";
import { useContext, useState } from "react";

type Props = {
    sortArr: Bike[],
}

export const Pagination: React.FC<Props> = ({ sortArr }) => {
    const { currentPage, setCurrentPage, goodsPerPage } = useContext(GoodsContext)
    const pageNumbers = [];
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    for (let i = 1; i <= Math.ceil(sortArr.length / goodsPerPage); i += 1) {
        pageNumbers.push(i);
    }

    return (
        <div className='paginate'>
            {pageNumbers.map((number) => (
                <button
                    type="submit"
                    className={classNames('paginate__link', {
                        'active-state': currentPage === number,
                    })}
                    onClick={() => {
                        paginate(number);
                    }}
                    key={number}
                >
                    {number}
                </button>
            ))}
        </div>
    )
}