import React, { useState } from 'react'

function FilteredDishes({menuCategory,menu}) {

let [filteredDishes,setFilteredDishes] = useState([])

const showFilterdDishes =(category)=>{

 let filteredDishesAre =  menu.filter((item)=>{
    return(
        item.strCategory === category
    )
   }).map((item)=>{

   return (
   <li>
    <img src={item.strMealThumb} alt='' className='br' />
    <h5 className="medium">{item.strMeal}</h5>
    </li>
    )

   })

   setFilteredDishes(filteredDishesAre)
   
}

    //show all categories

    let allMenuCategory = menuCategory.map((item)=>{
        return(
            <li onClick={()=>{showFilterdDishes(item.strCategory)}}>
                {item.strCategory}
            </li>
        )
    }

    )
  return (
    <div className='filtred-dishes-list'>
        <div className='container center'>
            <div className='text-center'>
            <h2 className='regular'>Choose your dishes</h2>
            <p className='p-black light'> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            </div>
            <div className='filtred-dishes'>
                <ul className='column-gap-21 flex flex-center'>
                {allMenuCategory}
                </ul>

            </div>
            <div className='special-dishes-filter center'>
                <ul className='flex flex-wrap gap-35 align'>
                    {filteredDishes}

                </ul>

            </div>
            
        </div>
    </div>
  )
}

export default FilteredDishes