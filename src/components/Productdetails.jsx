import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import style from "./style.module.css"
import { Context } from './Context'

const Productdetails = () => {
    const {addtocart}=useContext(Context)

    const[data,setdata]=useState([])


    const {id}=useParams()

      console.log("data",data)

    useEffect(()=>{
      fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then((res)=>{
        setdata([res]) 
      });
    },[id])
    


    console.log("data")
  return (<div style={{marginLeft:"500px",marginTop:"50px"}}>
    {data.map((el)=>(
        <div className={style.boxshadow}>
          <p> Title :{el.title}</p>
          <div >
          <img style={{width:"100%",height:"100%",}} src={el?.images[0]
         
      }/>
       </div>
       <div style={{display:"flex",justifyContent:"space-between"}}>
     
      <p> Price: {el.price}</p>
      <p> Dis: {el.discountPercentage}</p>
      </div>
      <div  style={{display:"flex",justifyContent:"space-between"}}><p> Stock :{el.stock
}</p><p>
rating :{el.
rating
}
</p></div>
<div className={style.buybutton}> <button onClick={()=>addtocart(el)}>Add to Cart</button></div>


        </div>

     ))}



 </div>
  )
}

export default Productdetails