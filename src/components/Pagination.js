import React, { useEffect, useState } from 'react'

function Pagination(props) {

  


    const [activePage,setActivePage] = useState(1)
    
 
 let numberOfPages =[]

 for(let i=1;i<= Math.ceil(props.filteredDishes.length/props.itemsPerPage); i++){
  numberOfPages.push(i);





 }
 

const showNext =(event)=>{
  console.log(event.target.id)
  props.setCurrentPage(event.target.id)
  setActivePage(event.target.id)
  
  
}
console.log("active",activePage)

let pages = numberOfPages.map((pageNumber)=>{
console.log(pageNumber)
 return <li className={ pageNumber == activePage ? 'active' : ''} id={pageNumber} onClick={showNext}>{pageNumber}</li>

})

  return (
    <section>

<ul className='pagination flex'>
  {pages}
    

   </ul>

    </section>
 
  )
}

export default Pagination