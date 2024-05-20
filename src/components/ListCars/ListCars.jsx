import ItemCar from "components/ItemCar/ItemCar";
import { useEffect, useState, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectorCars,   } from "store/selectors/selectors";
import { getCars, getMoreCars } from "store/thunkCars/thunkCars";
import css from './ListCars.module.css'

 const ListCar = () => {
const cars = useSelector(selectorCars);
const [page, setPage] = useState(1)
const distpatch = useDispatch();
const hasMoreItems = cars.length % page === 0;
useEffect(() => {
    distpatch(getCars());
}, [distpatch])
const handlerLoadMore = () => {
  setPage(prev => prev + 1);
  distpatch(getMoreCars(page + 1))
  
}
    return (
      <>
      {cars.length === 0 ? <h2 className={css.titleNotFound}>Sorry, nothing was found for your request.</h2> :
      <ul className={css.listCarsItems}>
      {cars.map((car) => <ItemCar car={car}
      gallery={car.gallery} details={car.details} reviews={car.reviews} price={car.price} rating={car.rating} location={car.location} description={car.description} id={car._id} name={car.name}/> )}
        {hasMoreItems  && <button className={css.btnLoadMore} onClick={handlerLoadMore} type="button">Load more...</button>}
      </ul>}
      </>
      
    );
  };
  export default ListCar;