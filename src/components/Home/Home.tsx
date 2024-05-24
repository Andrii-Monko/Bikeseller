import './Home.scss';
import { Header } from "../Header/Header";
import { Category } from "../Category/Category";
import { useContext } from "react";
import { PhotoScroll } from "../PhotoScroll/PhotoScroll";
import { GoodsContext } from "../Context/Context";


export const Home = () => {
    const { bikes } = useContext(GoodsContext)
    //const goods = bikes.sort((bike1, bike2) => bike1.ціна - bike2.ціна)
    
    return (
        <>
            <Header />
            <div className="home">
                <div className='home__category-box'>
                    <Category />
                </div>
                <PhotoScroll />
            </div>
        </>

    )
}