import { Loader } from "components/Loader/Loader";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { selectorLoader } from "store/selectors/selectors";

const { default: FilterForm } = require("components/FilterForm/FilterForm")
const { default: ListCar } = require("components/ListCars/ListCars")

const HomePage = () => {
    const loading = useSelector(selectorLoader);
    return <>
    {loading && <Loader/>}
    <div style={{display: "flex", gap: "64px"}}>
        <FilterForm/> 
        <ListCar/>
    </div>
    <Suspense>
        <Outlet/>
    </Suspense>
    </>
    
}
export default HomePage;