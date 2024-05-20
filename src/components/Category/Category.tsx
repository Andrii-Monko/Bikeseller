import './Category.scss';
import { Link } from "react-router-dom"
import { useContext } from "react";
import { GoodsContext } from "../Context/Context";

export const Category = () => {
    const { bikes } = useContext(GoodsContext)

    return (
        <div className="category">

            <Link
                className="category__link mountain"
                to='/Mountain'
            >
                Гірські
            </Link>
            <Link
                className="category__link road"
                to='/Road'
            >
                Шосейні
            </Link>

            <Link
                className="category__link gravel"
                to='/Gravel'
            >
                Гравійні
            </Link>

            <Link
                className="category__link city"
                to='/City'
            >
                Міські
            </Link>

            <Link
                className="category__link lady"
                to='/Lady'
            >
                Жіночі
            </Link>

            <Link
                className="category__link electro"
                to='/Electro'
            >
                Електровелосипеди
            </Link>

        </div >
    )
}