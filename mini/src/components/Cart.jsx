import React from "react";
import "./Cart.scss"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { action } from "../action/action";
import { reducer } from "../store/reducer/Reducer";
export default function Cart() {
  const data = useSelector(a=>a);
  const dispatch = useDispatch();
  const Incre = (id)=>{
      dispatch(action("downCount",id))
  }
  const Decre = (id)=>{
    dispatch(action("upCount",id))
}
const Delete = (id)=>{
  dispatch(action("Delete",id))
}
const total = data.reduce((a,b)=>{
  return a+b.quantity*b.price
},0)
return (
    <>
      <div style={{marginTop:"40px"}}>
        
        <nav style={{textDecoration:"none"}}>
        <Link to={"/"} style={{textDecoration:"none", fontSize:"40px", color:"#fff", backgroundColor:"#e31837", borderRadius:"10px"}}>
          Home
        </Link>
        </nav>
       

        <div style={{marginTop:"20px"}}>
          <table id="table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item,index)=>(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>
                    <img style={{width:"80px",height:"100px"}} src={item.img} alt="" />
                  </td>
                  <td style={{fontWeight:"700"}}>{item.price} $ </td>
                  <td >
                    <div style={{display:"flex", gap:"10px", marginLeft:"40%"}}> 
                      <button style={{cursor:"pointer"}} onClick={()=>Incre(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button style={{cursor:"pointer"}} onClick={()=>Decre(item.id)}>+</button>
                    </div>
                    
                  </td>
                  <td>
                    <button style={{cursor:"pointer"}} onClick={()=>Delete(item.id)}>Delete</button>
                  </td>
              </tr>
              ))}
            </tbody>
          </table>
          <span style={{fontSize:"30px", color:"#fff", backgroundColor:"#e31837", borderRadius:"10px", marginTop:"20px" }}>
          Total: {total} $
          </span>
        </div>
      </div>
    </>
  );
}
