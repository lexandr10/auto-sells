import {LocationIcon,  RatingIcon, AutomaticIcon } from "components/Sprite/Sprite";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, deleteFavorites } from "../../store/sliceFavorites/sliceFavorites";
import css from "./ItemCar.module.css";
import { selectorFavorites } from "store/selectors/selectors";
import { useEffect, useState } from "react";
import DetailCar from "components/DetailsCar/DetailCar";


const ItemCar = ({id, name,gallery,  reviews, details, price, rating, location, description, car}) => {
const favorites = useSelector(selectorFavorites);
const [fill, setFill] = useState();
const [stroke, setStroke] = useState();
const [isShow, setIsShow] = useState(false);
const checkedFavorites = favorites.some(item => item._id === car._id);

const handleEscKeyPress = (e) => {
  if (e.key === 'Escape') {
    setIsShow(false);

  }
};


const toogleModal = (evt) => {
setIsShow(!isShow);
}
useEffect(() => {
  
  if(checkedFavorites) {
    setFill('#E44848');
    setStroke('#E44848')
  }else {
    setFill('none');
    setStroke('#101828')
  }
  if(isShow === true) {
    document.body.classList.add('hidden');
  }else {
    document.body.classList.remove('hidden');
  }
  document.addEventListener('keydown', handleEscKeyPress);
  return () => {
    document.removeEventListener('keydown', handleEscKeyPress);
  };
}, [car._id, checkedFavorites, favorites, isShow])
  const distpatch = useDispatch();
    const handlerAddCar = (evt) => {
      if(!checkedFavorites) {
        distpatch(addFavorites(car));
       
      }else {
        distpatch(deleteFavorites(car._id))
      }
    }


   return <li key={id} className={css.itemCar}>
    <div className={css.boxCard}>
    <div>
        <img className={css.imgCard} src={gallery[0]} alt="" />
        </div>
          <div>
            <div className={css.section}>
            <div className={css.blockNamePrice}>
              <div>
              <h2>{name}</h2>
              </div>
        <div className={css.blockPriceIcon}>
        <p>{price}</p>
        <button className={css.btnFavorites} onClick={handlerAddCar} type="button">
        <svg fill={fill} stroke={stroke}
      className={css.iconFavorites}
      width="24"
      height="24"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <symbol id="icon-heart" viewBox="0 0 24 24"/>
  <path  stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="3.0667" d="M27.787 6.146c-0.681-0.681-1.49-1.222-2.379-1.591s-1.844-0.559-2.807-0.559-1.917 0.19-2.807 0.559c-0.89 0.369-1.699 0.909-2.38 1.591l-1.413 1.413-1.413-1.413c-1.376-1.376-3.241-2.148-5.187-2.148s-3.811 0.773-5.187 2.148c-1.376 1.376-2.148 3.241-2.148 5.187s0.773 3.811 2.148 5.187l11.787 11.787 11.787-11.787c0.681-0.681 1.222-1.49 1.591-2.38s0.559-1.844 0.559-2.807-0.19-1.917-0.559-2.807c-0.369-0.89-0.909-1.699-1.591-2.38z"></path>
  
    </svg>
        </button>
        
        </div>
        
            </div>
            <div className={css.blockRatingReview}>
              <div className={css.blockIconRating}>
                <RatingIcon/>
              <p>{rating} (reviews:{reviews.length})</p>
              </div>
              <div className={css.IconLocation}>
                <LocationIcon/>
              <p>{location}</p>
              </div>
            
            
            </div>
            </div>
            
          
        
            
        <p className={css.decription}>{description}</p>
        <ul className={css.details}> 
            { Object.keys(details).map(key => {
    if (details[key] !== 0) {
      return <li className={css.itemDetails} key={key}>
        <AutomaticIcon/>
        <p className={css.textDetails}>{key}: {details[key]}</p>
        </li>;
    }
    return null; 
  })}
        </ul>
        
          <button onClick={toogleModal} className={css.btnShowMore}>Show more</button>
          </div>
    </div>
   
        
          
           { isShow && <DetailCar toogleModal={toogleModal} id={id}/>}
        
    </li>
  
}
export default ItemCar;