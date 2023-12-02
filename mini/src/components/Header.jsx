import React from 'react'
import { BsCartPlusFill,BsFillPersonFill   } from "react-icons/bs";
import { useSelector,useDispatch } from 'react-redux'
import "./Header.scss"
import { Link } from 'react-router-dom';
export default function Header() {
    const data = useSelector(a=>a);
    const dispatch = useDispatch()
    console.log(data);
  return (
    <>  
    <div id='header'>
        <nav>
            <a href="" id='text'>Mark of Iron Man</a>
        </nav>
        <div style={{display:"flex" ,cursor:"pointer"}}>
            <nav>
            <Link to= "./cart">
                <a>
                    
                    <BsCartPlusFill id='icon'></BsCartPlusFill>
                    <span id='numberCart'>{data.length}</span>
                </a>
            </Link>
            </nav>
            <span>
                <BsFillPersonFill id='icon'></BsFillPersonFill>
            </span>
        </div>
       
    </div>
       
    </>
  )
}
