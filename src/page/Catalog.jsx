import ListCar  from "components/ListCars/ListCars"
import { Loader } from "components/Loader/Loader";
import { useSelector } from "react-redux";
import { selectorLoader } from "store/selectors/selectors";

const Catalog = () => {
    const loading = useSelector(selectorLoader)
    return <>
    {loading && <Loader/>}
    <ListCar/></>
    
}
export default Catalog;