import React, { useEffect, useState } from "react";
import { Bike } from "../../type/Bike";

type Props = {
    children: React.ReactNode
}

type Param = {
    bikes: Bike[],
    selectedGoods: Bike[],
    selectedParam: string | null,
    setSelectedGoods: (value: Bike[]) => void,
    setSelectedParam: (value: string | null) => void,
    goodsPerPage: number,
    currentPage: number,
    setCurrentPage: (value: number) => void
    mountain: Bike[],
    setMountain: (value: Bike[]) => void
}

const getInitialPhonesOnLoad = () => {
    const item = localStorage.getItem('id');
    return item ? JSON.parse(item) as Bike[] : [];
}

export const GoodsContext = React.createContext<Param>(
    {
        bikes: [],
        selectedGoods: [],
        selectedParam: null,
        setSelectedParam: () => { },
        setSelectedGoods: () => { },
        goodsPerPage: 0,
        currentPage: 1,
        setCurrentPage: () => { },
        mountain: [],
        setMountain: () => { },
    }
);

export const GoodsProvider: React.FC<Props> = ({ children }) => {
    const [bikes, setBikes] = useState([]);
    const [selectedGoods, setSelectedGoods] = useState(() => getInitialPhonesOnLoad())
    const [selectedParam, setSelectedParam] = useState<string | null>(null);
    const [goodsPerPage, setGoodsPerPage] = useState(8)
    const [mountain, setMountain] = useState<Bike[]>([])
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch('./bike.json')
            .then((responce) => responce.json())
            .then((data) => setBikes(data))
    }, [])

    return (
        <GoodsContext.Provider value={
            {
                bikes,
                selectedGoods,
                selectedParam,
                setSelectedParam,
                setSelectedGoods,
                goodsPerPage,
                currentPage,
                setCurrentPage,
                mountain,
                setMountain,
            }}
        >
            {children}
        </GoodsContext.Provider>
    )
}