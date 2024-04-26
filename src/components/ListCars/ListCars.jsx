import ItemCar from "components/ItemCar/ItemCar";
import { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectorCars, selectorLimit } from "store/selectors/selectors";
import { getCars, getMoreCars } from "store/thunkCars/thunkCars";
import css from './ListCars.module.css'

 const ListCar = () => {
const cars = useSelector(selectorCars);
const limit = useSelector(selectorLimit);
const distpatch = useDispatch();
console.log(limit)
useEffect(() => {
    distpatch(getCars());
}, [distpatch])
const handlerLoadMore = () => {
  distpatch(getMoreCars(limit))
}
    return (
      <ul className={css.listCarsItems}>
        {cars.length > 0 && cars.map((car) => <ItemCar car={car}
        gallery={car.gallery} details={car.details} reviews={car.reviews} price={car.price} rating={car.rating} location={car.location} description={car.description} id={car._id} name={car.name}/> )}
          <button className={css.btnLoadMore} onClick={handlerLoadMore} type="button">Load more...</button>
        </ul>
    );
  };
  export default ListCar;