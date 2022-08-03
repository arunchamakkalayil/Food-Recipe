import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import Loading from "./Loading";
function Menus() {
  const [menu, setMenu] = useState([]);
  const [menuCategory,setMenuCategory] = useState([])
  const [loading,setLoading] = useState(true)

  //get all menus
  async function fetchData() {
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




  useEffect(() => {
    fetchData();
    fetchCategoryData()
  }, []);

  return (
    <div>
      <Hero />
      {!loading? <SpecialDishes menu={menu} /> : <Loading />}
      {!loading? <FilteredDishes menuCategory={menuCategory} menu={menu}/> : null}
      
      
    </div>
  );
}

export default Menus;
