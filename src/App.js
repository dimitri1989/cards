import { useEffect, useState } from 'react';
import {BrowserRouter,Routes,Route, Link } from 'react-router-dom'
import Header from './components/header/Header.jsx'
import Items from './components/item/Items.jsx';
import Cart from './components/cart/Cart.jsx';
import Home from './components/Home.jsx';
import Menu from './components/Menu.jsx';
import MainLayouts from './layouts/MainLayouts.jsx';
import Info from './components/cart/Info.jsx'
import './media.css';
import './App.css';

function App() {
  console.log("დარენდერდა აპი");
  var x = JSON.parse(localStorage.getItem('carts'))
  const [likeCounter, setlikeCounter] = useState(1)//დალაიქების მდგომარეობა
  const [kalatisRaodenoba, setKalatisRraodenoba] = useState(x)
//<Items  onClick={changeCount} />

var x = JSON.parse(localStorage.getItem('carts'))


function daamateKalatashi (){
  setKalatisRraodenoba(x) 
  console.log(x);
}
function ChangeCount(){
  setlikeCounter(likeCounter + 1 )
  localStorage.setItem("item",likeCounter)
}

  return (
    <>
    
     <div className='container'>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayouts kalatisRaodenoba={kalatisRaodenoba} />}>
        <Route path="/:info"element={<Info />} />
        <Route path="cart" element={<Cart />} />
        <Route index element={<Home onClick={ChangeCount} daamateKalatashi={daamateKalatashi} />} />
        </Route>
      </Routes>
    </BrowserRouter>
        
        
     </div>
     </>
  );
}

export default App;
