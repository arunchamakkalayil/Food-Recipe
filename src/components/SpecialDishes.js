import React from "react";

function SpecialDishes({ menu }) {
  let itemsCount = 8;
  const specialMenus = menu.map((menuItem, index) => {
    if (index < itemsCount) {
      return (
        <li>
          <div>
            <img src={menuItem.strMealThumb} className="br" />
            <h5 className="medium">{menuItem.strMeal}</h5>
          </div>
        </li>
      );
    }
  });

  return (
    <section className="special-dishes">
      <div className="container">
        <div className="special-dishes-container text-center">
          <h2 className="medium">Our Special Dishes</h2>
          <p className="light">
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy.
          </p>
        </div>
        <div className="special-dishes-list">
          <ul className="flex flex-wrap gap-30 flex-center">{specialMenus}</ul>
        </div>
      </div>
    </section>
  );
}

export default SpecialDishes;
