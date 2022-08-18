import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import Loading from "./Loading";
function Menus() {
  const [menu, setMenu] = useState([]);
  const [menuCategory,setMenuCategory] = useState([])
  const [loading,setLoading] = useState(false)
  const [singleDish,setSingleDish] = useState([])

  //get all menus
  async function fetchData() {
    setLoading(true)
    const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
    let response = await fetch(API_URL);
    let data = await response.json();
    setMenu(data.meals);
    setLoading(false)
  }

  //get all categories

  async function fetchCategoryData() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
    let response = await fetch(API_URL);
    let categoryData = await response.json();
  
    setMenuCategory(categoryData.categories)
    
  }

  async function getOnlyOneDish() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
    let response = await fetch(API_URL);
    let singleDishData = await response.json();
  
setSingleDish(singleDishData.meals)

    
  }


  console.log(singleDish)



  useEffect(() => {
    fetchData();
    fetchCategoryData()
    getOnlyOneDish()
    
  }, []);

  return (
    <div>
      <Hero />
      {!loading? <SpecialDishes menu={menu} /> : <Loading />}
      {!loading? <FilteredDishes menuCategory={menuCategory} singleDish={singleDish} setSingleDish={setSingleDish} menu={menu}/> : null}
      
      
    </div>
  );
}

export default Menus;
