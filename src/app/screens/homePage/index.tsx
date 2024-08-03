import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisiment";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setPopularDishes } from "./slice";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
//REDUX SLICE  & SELECTOR 

const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data:Product[]) => dispatch(setPopularDishes(data))
  });



export default function HomePage() {
const {setPopularDishes} = actionDispatch(useDispatch());

  useEffect(() =>{  //Backend server data request -> Data
   
    const product = new ProductService();

    product.getProducts(
      {page:1,
      limit:4,
      order:"productViews",
      productCollection: ProductCollection.DISH}
    ).then((data) => {
      setPopularDishes(data);
    }).catch((err)=>{
      console.log(err);
    });
    
  },[]);

    return <div className={"homepage"}>
      <Statistics/>
      <PopularDishes/>
      <NewDishes/>
      <Advertisement/>
      <ActiveUsers/>
      <Events/>
    </div>;
}
  