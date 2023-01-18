import { configureStore } from "@reduxjs/toolkit";
import clothingReducer from "./reducers/clothingReducer";
import favoritesReducer from "./reducers/favoritesReducer";
import cartReducers from "./reducers/cartReducers";

const store = configureStore({
	reducer: {
		clothing: clothingReducer,
		favorites: favoritesReducer,
		cart: cartReducers,
	},
});

export default store;
