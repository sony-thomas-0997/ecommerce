import { configureStore } from "@reduxjs/toolkit";
import BrandSelectedReducer from "./BrandSelectedReducer";
import PricesliderReducer from "./PriceSliderReducer";
import CartListsliceReducer from "./CartsliderReducer";
import RecentlyviewdReducer from "./RecentlyViewsReducer.js";
 
 



const store = configureStore({
    reducer:{
      selectedBrandstoFilterList : BrandSelectedReducer,
      selectedPricerangeToReducer : PricesliderReducer,
      CartListProdctsArray :CartListsliceReducer,
      RecentlyViewdstoreArray :RecentlyviewdReducer,
    }

})


export default store;