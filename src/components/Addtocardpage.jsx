import React, { useContext } from 'react'
import { Context } from './Context'
import style from "./style.module.css"
import { Link } from 'react-router-dom'

const Addtocardpage = () => {

const {totaldata,handledelete,actualprice,totalprice,buy}=useContext(Context)



console.log("totaldata",totaldata,actualprice,totalprice)
  if(totaldata.length==0){
     return <div style={{marginTop:"200px"}}>NO Item Present  Please add</div>
  }

  return (
    <div className={style.box}>

    {totaldata.map((el)=>(
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
     <div>
     <button className={style.buybutton} style={{paddingBottom:"20px"}} onClick={()=>handledelete(el.id)}>X remove</button></div>


       </div>

    ))}

<div style={{marginTop:"3%",width:"60%"}}>
       <div  className={style.checkpage}>
          <div>Order Summery</div>
        <div className={style.flex}><p>MRP</p><p> ₹ {actualprice}</p></div>
        <div className={style.flex}><p>Product Discount</p><p className={style.color}> ₹ {actualprice-totalprice}</p></div>
        <div className={style.flex}><p>My Earnings Discount</p><p className={style.color}>0</p></div>
        <div style={{borderBottom:"1px solid blue",width:"80%",margin:"auto"}}></div>
        <div className={style.flextotal}><p>Total Amount to Pay rupees</p><p>₹ {actualprice-totalprice}</p>
             
        </div>
       </div>
       <div className={style.buybutton}><button><button onClick={buy}>Buy Now</button></button></div>


       </div>

</div>
  )
}

export default Addtocardpage