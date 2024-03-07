import React, { useContext, useEffect, useState } from 'react'
import style from "./style.module.css"
import { Link } from 'react-router-dom'
import { Context } from './Context'
const Home = () => {
   
   const[data,setdata]=useState([])
   const {addtocart}=useContext(Context)

  useEffect(()=>{
    fetch('https://dummyjson.com/products?limit=10')
    .then(res => res.json())
    .then((res)=>{
        setdata(res.
            products) 
    });
  },[])

  return (
    <div className={style.box}>

        {data.map((el)=>(
           <div className={style.boxshadow}>
             <p>{el.title}</p>
             <div >
             <img style={{width:"100%",height:"100%",}} src={el.images[0]
            
         }/>
          </div>
          <div style={{display:"flex",justifyContent:"space-between"}}>
        
         <p> Price: {el.price}</p>
         <p> Dis: {el.discountPercentage}</p>
         </div>
         <div className={style.buybutton}> <button onClick={()=>addtocart(el)}>Add to Cart</button></div>
         <div className={style.addbutton}> <Link to={`${el.id}`}>Product Details </Link></div>

           </div>

        ))}



    </div>
  )
}

export default Home