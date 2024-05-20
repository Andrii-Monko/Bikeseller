import { App } from './App';
import { Menu } from './components/Menu/Menu';
import { Repair } from './components/Repair/Repair';
import { Basket } from './components/Basket/Basket';
import { Contacts } from './components/Contacts/Contacts';
import { DetailPage } from './components/DetailPage/DetailPage';
import { BrowserRouter } from 'react-router-dom';
import { GoodsProvider } from './components/Context/Context';
import { Routes, Route } from 'react-router-dom'
import { CategoriesPage } from './components/CategoriesPage/CategoriesPage';

export const Root = () => {

    return (
        <BrowserRouter>
            <GoodsProvider>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/Mountain" element={<CategoriesPage />} />
                    <Route path="/Mountain/:id" element={<DetailPage />} />
                    <Route path="/Road/:id" element={<DetailPage />} />
                    <Route path="/Road" element={<CategoriesPage />} />
                    <Route path="/Gravel/:id" element={<DetailPage />} />
                    <Route path="/Gravel" element={<CategoriesPage />} />
                    <Route path="/City/:id" element={<DetailPage />} />
                    <Route path="/City" element={<CategoriesPage />} />
                    <Route path="/Electro/:id" element={<DetailPage />} />
                    <Route path="/Electro" element={<CategoriesPage />} />
                    <Route path="/Lady/:id" element={<DetailPage />} />
                    <Route path="/Lady" element={<CategoriesPage />} />
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
