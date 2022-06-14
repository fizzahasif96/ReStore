import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";
import { BasketSlice } from "../../features/basket/BasketSlice";
import { CatalogSlice } from "../../features/catalog/CatalogSlice";
import counterReducer from "../../features/contact/CounterReducer";
import { counterSlice } from "../../features/contact/CounterSlice";

// export function ConfigureStore(){
//     return createStore(counterReducer)
// }

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        basket: BasketSlice.reducer,
        catalog: CatalogSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;