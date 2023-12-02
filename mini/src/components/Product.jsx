import React, { useEffect, useState } from 'react'
import Loading from './loading/Loading';
import "./Product.scss"
import { useDispatch, useSelector } from 'react-redux';
import { action } from '../action/action';
export default function Product() {
  const [product,setProduct] = useState([]);
  const data = useSelector(a=>a);
  const dispatch = useDispatch();
  const [loading,setLoading]=useState(true)
    useEffect(()=>{
        setTimeout(() => {
          fetch("http://localhost:5000/product")
        .then (res=>res.json())
        .then (data=>{
            setProduct([...data])
            setLoading(false)
        })
        }, 700);
    },[])
    const buy = (id)=> {
      const  oneproduct=product.find((item)=> item.id == id)
      dispatch(
        action("Buy",oneproduct)
      )
    }
  return (
    <>
      <div id='listProduct'>
        {
          loading? <Loading></Loading>:  product.map((item)=>(
            <div id='product' key={item.id}>
              <div id='img'>
                <img src={item.img} alt="" />
              </div>
              <p id='text'>{item.name}</p>
              <p id='text'>{item.price}</p>
              <button id='buy' onClick={()=>buy(item.id)}>Buy</button>
           </div>
        ))
        }
    
       
      </div>
    </>
  )
}
