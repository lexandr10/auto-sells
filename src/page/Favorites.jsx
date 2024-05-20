import ItemCar from "components/ItemCar/ItemCar";
import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectorFavorites } from "store/selectors/selectors";

const Favorites = () => {
    const favorites = useSelector(selectorFavorites);
    return <ul style={{display: "flex", flexDirection: "column", padding: "64px", gap: "24px"}}>
{favorites.length > 0 ? favorites.map(car => <ItemCar car={car}
        gallery={car.gallery} 
        details={car.details} 
        reviews={car.reviews} 
        price={car.price} 
        rating={car.rating} 
        location={car.location} 
        description={car.description} 
        id={car._id} 
        name={car.name}/>): 
        <div style={{display: "flex", flexDirection: "column", gap: "20px", marginLeft: "auto", marginRight: "auto"}}>
            <h2>You haven't added anything to favorites</h2>
            <Link style={{textDecoration: "none", display: "inline-flex",
padding: "16px 60px",
justifyContent: "center",
alignItems: "center",
gap: "10px", background: "#E44848", borderRadius: "200px", color: "#FFF"}} to="/catalog"> Catalog</Link>
        </div>
        
        }
    </ul>
}
export default Favorites;