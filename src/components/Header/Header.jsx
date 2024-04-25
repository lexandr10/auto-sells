import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import css from './Header.module.css'
const Header = () => {
    return <div className={css.header}>
        <nav className={css.navBlock}>
        <NavLink className={css.linkNav} to="/">Home</NavLink>
        <NavLink className={css.linkNav} to="/favorites">Favorites</NavLink>
        <NavLink className={css.linkNav} to="/catalog">Catalog</NavLink>
            
        </nav>
        <Suspense>
            <Outlet/>
        </Suspense>
    </div>
}
export default Header;