import React from 'react'
import { useState } from 'react'
import App from '../App'
import {BrowserRouter,Routes,Route, Link,useNavigate, Outlet } from 'react-router-dom'
import Menu from './Menu'
import Items from './item/Items'


const Home = ({onClick,daamateKalatashi}) => {
 
  return (
    <>
    <Items  onClick={onClick}  daamateKalatashi={daamateKalatashi}/> 
    </>
  )
}

export default Home