import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Cart from './cart/Cart'
import like  from './header/icons/like-red.png'
import cart  from './header/icons/cart.svg'
import home  from './header/icons/home.svg'
import styles from './header/Header.module.css'


const Menu = ({kalatisRaodenoba}) => {
  var d = localStorage.getItem("item");
  var c = localStorage.getItem("cart");
 // var produqti = JSON.parse(localStorage.getItem('carts'))
 var produqti = 0
  //console.log("darenderda meniu ")
  var x = JSON.parse(localStorage.getItem('carts'))


  
  return (
    <>
    <nav>
     
      
      <div className='row'> 
    <div className={styles.header}>
      <div className={styles.header_nav}>
      <Link to='..' relative='path'>
            
            <img className={styles.like_button_red} src={home} alt="cart" /></Link>
        <div className={styles.like_container}>
          <div className='like-button '>
            <div className={styles.like_button_count}>{d}</div>
            <img className={styles.like_button_red} src={like} alt="like" />
          </div>
        </div>
        <div className={styles.like_container}>
          <div className='like-button'>
          <Link to={"/cart"}><div className={styles.like_button_count_cart}>{kalatisRaodenoba.length }</div>
            
            <img className={styles.like_button_red} src={cart} alt="cart" /></Link>
            
            
          </div>
          
        </div>
        
      </div>
    </div>
    </div>
    </nav>
    </>
  )
}

export default Menu