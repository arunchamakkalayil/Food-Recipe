import React, { useState } from 'react'
import NoDishes from './NoDishes'
import Pagination from './Pagination'

function FilteredDishes({menuCategory,menu,singleDish,setSingleDish}) {
   

let [filteredDishes,setFilteredDishes] = useState([''])
let [activeDishes,setActiveDishes] = useState('Beef')
let [currentPage,setCurrentPage] = useState(1)
let [itemsPerPage , setItemsPerPage] = useState(4)

let indexOfLastDish = currentPage * itemsPerPage
// 1 x 4 = 4
let indexOfFirstDish = indexOfLastDish - itemsPerPage
// 4 - 4 = 0

let showTheseDishesNow = filteredDishes.slice(indexOfFirstDish,indexOfLastDish)



// get single dish active
let singleDishItems = singleDish.map((item)=>{
    return (
        <li>
    <img src={item.strMealThumb} alt='' className='br' />
    <h5 className="medium">{item.strMeal}</h5>
    </li>

    )
    })

//show dishes on click
const showFilterdDishes =(category)=>{
    
    setSingleDish([])
    
    setActiveDishes(category)

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
            <li className={item.strCategory === activeDishes ? 'active' : ''} onClick={()=>{showFilterdDishes(item.strCategory)}}>
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
                <ul className='flex flex-wrap gap-30 align'>
                    {filteredDishes.length !==0 ? showTheseDishesNow:<NoDishes />}
                    
                    {singleDishItems}
                    

                </ul>

            </div>

            <Pagination filteredDishes={filteredDishes} itemsPerPage={itemsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            
        </div>
    </div>
  )
}

export default FilteredDishes