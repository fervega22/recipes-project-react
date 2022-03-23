
import { useEffect, useState } from "react";
import {  getRecipeInfo } from "../helpers/getRecipes"

//Custom hook - get data from id recipe
export const useFetchInfoRecipes = (id) => {
    const [recipes, setRecipes] = useState({
        results:[]
    });
    useEffect(() => {      
        getRecipeInfo(id)
                .then( res => {
                    setRecipes({
                        results: res
                    })
                })      
    }, [id]);  
    
    return recipes;
}


