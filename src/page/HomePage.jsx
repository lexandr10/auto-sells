import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const { default: FilterForm } = require("components/FilterForm/FilterForm")
const { default: ListCar } = require("components/ListCars/ListCars")

const HomePage = () => {
    return <>
    <FilterForm/>
    <ListCar/>
    <Suspense>
        <Outlet/>
    </Suspense>
    </>
    
}
export default HomePage;