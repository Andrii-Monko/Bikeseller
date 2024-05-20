import { useContext } from "react"
import { GoodsContext } from "../Context/Context"
import { Link } from "react-router-dom";
import './PhotoScroll.scss';

export const PhotoScroll = () => {
    const { bikes } = useContext(GoodsContext);

    return (
        <div className="brand-list">
            <div className="wrapper">

                {bikes.filter((param) => param.тип === 'гірський').map((bike) =>
                    <Link
                        to={`${'/Mountain/'}${bike.id}`}
                        key={bike.id}
                    >
                        <img
                            src={bike.img}
                            alt="photo"
                            className="scroll-photo"
                        />
                    </Link>
                )}

                {bikes.filter((param) => param.тип === 'гірський').map((bike) =>
                    <Link
                        to={`${'.Mountain/'}${bike.id}`}
                        key={bike.id}
                    >
                        <img
                            src={bike.img}
                            alt="photo"
                            className="scroll-photo"
                        />
                    </Link>
                )}
            </div>
        </div>
    )
}