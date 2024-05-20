import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Header/Header";
const HomePage = lazy(() => import('../page/HomePage'));
const Catalog = lazy(() => import('../page/Catalog'));
const Favorites = lazy(() => import('../page/Favorites'));

export const App = () => {
  return (
    <Suspense>
      <Routes>
      <Route path="/" element={<Header/>}>
      <Route index element={<HomePage/>}/>
      <Route path="/favorites" element={<Favorites/>}/>
      <Route path="/Catalog" element={<Catalog/>}/>
      <Route path="*" element={<HomePage />} />
      </Route>
        </Routes>
     
    </Suspense>
    
    
  );
};
