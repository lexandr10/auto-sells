import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Header/Header";
import DetailCar from "./DetailsCar/DetailCar";
import Features from "./Features/Features";
import Reviews from "./Reviews/Reviews";
const HomePage = lazy(() => import('../page/HomePage'));
const Catalog = lazy(() => import('../page/Catalog'));
const Favorites = lazy(() => import('../page/Favorites'));

export const App = () => {
  return (
    <Suspense>
      <Routes>
      <Route path="/" element={<Header/>}>
      <Route index element={<HomePage/>}/>
      {/* <Route path="/details/:id" element={<DetailCar/>}>
        <Route  index element={<Features/>}/>
        <Route  path="reviews" element={<Reviews/>}/>
      </Route> */}
      <Route path="/favorites" element={<Favorites/>}/>
      <Route path="/Catalog" element={<Catalog/>}/>
      </Route>
        </Routes>
     
    </Suspense>
    
    
  );
};
