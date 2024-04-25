import { bookingsReducer } from "store/sliceBookings/sliceBookings";
import { carsReducer } from "store/sliceCars/sliceCars";
import { DetailsCarReducer } from "store/sliceDetailsCar/sliceDetailsCar";
import { FavoritesReducer } from "store/sliceFavorites/sliceFavorites";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
    key: 'cars',
    storage,
  };
  const persistReduced = persistReducer(persistConfig, FavoritesReducer);
export const reducer = {
    cars: carsReducer,
    favorites: persistReduced,
    detailsCar: DetailsCarReducer,
    bookings: bookingsReducer
}