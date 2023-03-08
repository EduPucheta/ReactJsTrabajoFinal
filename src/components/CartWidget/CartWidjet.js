import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import './CartWidjet.css'
import { ItemsContext } from '../../ItemsContext'
import { Link } from 'react-router-dom'




export default function CartWidget() {

  const {items} = useContext(ItemsContext) 


  
  return (
    <Link to="/carrito"> 
    <FontAwesomeIcon icon={faCartShopping} /> 
    <span className='badge badge-warning' id='lblCartCount'>{items.length}</span> 
    <div></div>
    </Link>
    )
}
