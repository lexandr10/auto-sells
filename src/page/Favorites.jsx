import ItemCar from "components/ItemCar/ItemCar";
import { HeartIcon } from "components/Sprite/Sprite";
import {  useSelector } from "react-redux";
import { selectorFavorites } from "store/selectors/selectors";

const Favorites = () => {
    const favorites = useSelector(selectorFavorites);
    return <ul>
{favorites.length > 0 && favorites.map(car => <ItemCar car={car}
        gallery={car.gallery} details={car.details} reviews={car.reviews} price={car.price} rating={car.rating} location={car.location} description={car.description} id={car._id} name={car.name}/>)}
    </ul>
}
export default Favorites;