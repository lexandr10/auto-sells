
import {  useSelector } from "react-redux";
import { selectoDetailsCar } from "store/selectors/selectors";

import css from './Features.module.css'
const Features = () => {
   
    const detailsCar = useSelector(selectoDetailsCar);
    
   

    return <div>{detailsCar && <div>
        <ul className={css.listDetails}> 
                 { Object.keys(detailsCar.details).map(key => {
         if (detailsCar.details[key] !== 0 & detailsCar.details[key] !== "") {
           return <li className={css.itemDetails} key={key}>{key}: {detailsCar.details[key]}</li>;
         }
         return null; // Если значение равно 0, пропустить элемент
       })}
             </ul>
             
              <div className={css.block}>
              <h3>Vehicle details</h3>
              <ul className={css.list}>
                 <li className={css.item}>
                     <p className={css.text}>Form</p>
                     <p className={css.text}>{detailsCar.form}</p>
                 </li>
                 <li className={css.item}>
                     <p className={css.text}>Length</p>
                     <p className={css.text}>{detailsCar.length}</p>
                 </li>
                 <li className={css.item}>
                     <p className={css.text}>Width</p>
                     <p className={css.text}>{detailsCar.width}</p>
                 </li>
                 <li className={css.item}>
                     <p className={css.text}>Height</p>
                     <p className={css.text}>{detailsCar.height}</p>
                 </li>
                 <li className={css.item}>
                     <p className={css.text}>Tank</p>
                     <p className={css.text}>{detailsCar.tank}</p>
                 </li>
                 <li className={css.item}>
                     <p className={css.text}>Consumption</p>
                     <p className={css.text}>{detailsCar.consumption}</p>
                 </li>
             </ul> 
              </div>
             
            
         </div>}</div>
}
export default Features;