import { App } from './App';
import { Menu } from './components/Menu/Menu';
import { Repair } from './components/Repair/Repair';
import { Basket } from './components/Basket/Basket';
import { Contacts } from './components/Contacts/Contacts';
import { DetailPage } from './components/DetailPage/DetailPage';
import { BrowserRouter } from 'react-router-dom';
import { GoodsProvider } from './components/Context/Context';
import { Routes, Route } from 'react-router-dom'
import { Mountain } from './components/CategoriesPage/Mountain';
import { Road } from './components/CategoriesPage/Road';
import { Gravel } from './components/CategoriesPage/Gravel';
import { City } from './components/CategoriesPage/City';
import { Electro } from './components/CategoriesPage/Electro';
import { Woman } from './components/CategoriesPage/Women';

export const Root = () => {

    return (
        <BrowserRouter>
            <GoodsProvider>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/Mountain" element={<Mountain />} />
                    <Route path="/Mountain/:id" element={<DetailPage />} />
                    <Route path="/Road" element={<Road />} />
                    <Route path="/Road/:id" element={<DetailPage />} />
                    <Route path="/Gravel" element={<Gravel />} />
                    <Route path="/Gravel/:id" element={<DetailPage />} />
                    <Route path="/City" element={<City />} />
                    <Route path="/City/:id" element={<DetailPage />} />
                    <Route path="/Electro" element={<Electro />} />
                    <Route path="/Electro/:id" element={<DetailPage />} />
                    <Route path="/Lady" element={<Woman />} />
                    <Route path="/Lady/:id" element={<DetailPage />} />
                    <Route path="/Repair" element={<Repair />} />
                    <Route path="/Basket" element={<Basket />} />
                    <Route path="/Menu" element={<Menu />} />
                    <Route path="/Contacts" element={<Contacts />} />
                    <Route path="*" element={<p> Not Found</p>} />
                </Routes>
            </GoodsProvider>
        </BrowserRouter>
    )
}
