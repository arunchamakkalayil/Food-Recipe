import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
function Menus() {
  const [menu, setMenu] = useState([]);

  //get all menus
  async function fetchData() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
    let response = await fetch(API_URL);
    let data = await response.json();
    setMenu(data.meals);
  }


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Hero />
      <SpecialDishes menu={menu} />
    </div>
  );
}

export default Menus;
