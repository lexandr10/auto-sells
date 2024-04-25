import Form from "components/Form/Form";
import {  useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectoDetailsCar } from "store/selectors/selectors";
import { getDetailtCar } from "store/thunkCars/thunkCars";
import css from './DetailCar.module.css'
import Features from "components/Features/Features";
import Reviews from "components/Reviews/Reviews";

const DetailCar = ({id, toogleModal}) => {
    const detailsCar = useSelector(selectoDetailsCar);
    const distpatch = useDispatch();
    const [showFeatures, setShowFeatures] = useState(true);
    const [showReviews, setShowReviews] = useState(false);
    const features = useRef();
    const reviews = useRef();
    
    useEffect(() => {
        const chageColor = () => {
            if(showFeatures) {
                features.current.style.color = '#E44848';
                reviews.current.style.color = '#101828';
            }else {
                features.current.style.color = '#101828';
                reviews.current.style.color = '#E44848';
            }
        }
        distpatch(getDetailtCar(id))
        chageColor();
    }, [distpatch, id, showFeatures])
const handlerFeatures = () => {
setShowFeatures(true);
setShowReviews(false);


}
const handlerReviews = () => {
    setShowFeatures(false);
    setShowReviews(true);
    
}
    return <div className={css.overlay}> 
    <div className={css.modal}>
        
        {detailsCar && <div >
    <div className={css.blockName}>
        <h2 className={css.mainTitle}>{detailsCar.name}</h2>
        <button onClick={toogleModal} className={css.btnClose}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M24 8L8 24" stroke="#101828" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 8L24 24" stroke="#101828" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </button>
        
        </div>
        <div className={css.blockRatingLocation}>
            <div className={css.blockRating}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<g clip-path="url(#clip0_620_715)">
<path d="M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5795 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703Z" fill="#FFC531" stroke="#FFC531" stroke-width="1.2"/>
</g>
<defs>
<clipPath id="clip0_620_715">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
            <p className={css.textRating}>{detailsCar.rating}</p>
            </div>
        <div className={css.blockRating}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M14 6.66699C14 11.3337 8 15.3337 8 15.3337C8 15.3337 2 11.3337 2 6.66699C2 5.07569 2.63214 3.54957 3.75736 2.42435C4.88258 1.29913 6.4087 0.666992 8 0.666992C9.5913 0.666992 11.1174 1.29913 12.2426 2.42435C13.3679 3.54957 14 5.07569 14 6.66699Z" stroke="#101828" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 8.66699C9.10457 8.66699 10 7.77156 10 6.66699C10 5.56242 9.10457 4.66699 8 4.66699C6.89543 4.66699 6 5.56242 6 6.66699C6 7.77156 6.89543 8.66699 8 8.66699Z" stroke="#101828" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        <p className={css.textLocation}>{detailsCar.location}</p>
        </div>
        
        </div>
        <p className={css.textPrice}>€{detailsCar.price}</p>
        <div className={css.blockImages}>
            <img className={css.img} src={detailsCar.gallery[0]} alt="" />
            <img className={css.img}  src={detailsCar.gallery[1]} alt="" />
            <img className={css.img} src={detailsCar.gallery[2]} alt="" />
        </div>
        <p className={css.textDesc}>{detailsCar.description}</p>
    </div>}
    <div className={css.blockInfo}>
    <ul style={
        {listStyle: 'none', display: 'flex', alignItems: 'center', gap: '40px', paddingLeft: '0'}
    }>
        
            <li >
                <button ref={features} onClick={handlerFeatures} className={css.btn}>Features</button>
               
            
            </li>
            
        <li><button ref={reviews} onClick={handlerReviews} className={css.btn}>Reviews</button></li>
    </ul>
    <div className={css.blockformInfo}>
    {showFeatures && <Features id={id}/>}
    {showReviews && <Reviews id={id}/>}
        <Form/>
    </div>
    
    </div>
        
    </div>   

    
    </div>
}
export default DetailCar;