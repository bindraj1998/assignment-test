import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";


 export const Context=createContext()
   

 export const Contextprovider=({children})=>{
  const navigate=useNavigate()

    const [totaldata,settotaldata]=useState([])

     const addtocart=(value)=>{
        if(totaldata.length>0){
        
        if(totaldata.includes(value)!==true){
            settotaldata([...totaldata,value])
            alert("item added sussesfullly")
        }
    }
     else{
        settotaldata([...totaldata,value])
        alert("item added sussesfullly")
     }

        
       
    }

    const handledelete=(id)=>{
        let a=totaldata.filter((el)=>el.id!==id)
        settotaldata(a)
    }

    
    function a(){
        return totaldata.reduce((acc,c)=>Number(acc)+Number(c.
            discountPercentage),0)
    }
    const totalprice=a()
    function b(){
        return totaldata.reduce((acc,c)=>Number(acc)+Number(c.price),0)
    }
 const actualprice=b()
  
 const buy=()=>{

    alert("your order placed sussesfully")
    setTimeout(()=>{
        settotaldata([])
         callhome()
    },300)
    function callhome(){
        navigate("/")
    }
 }
    
    return <Context.Provider value={{addtocart,totaldata,actualprice,handledelete,totalprice,buy}}>{children}</Context.Provider>
 }

