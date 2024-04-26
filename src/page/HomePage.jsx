import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const { default: FilterForm } = require("components/FilterForm/FilterForm")
const { default: ListCar } = require("components/ListCars/ListCars")

const HomePage = () => {
    return <>
    <ListCar/>
    <Suspense>
        <Outlet/>
    </Suspense>
    <FilterForm/>
    </>
    
}
export default HomePage;