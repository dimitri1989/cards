import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import  axios  from 'axios'
const Info = (props) => {
  const [carts, setcarts ] = useState([])
  const {info} = useParams()
  useEffect(()=>{
    axios.get('https://dummyjson.com/products/'+info)
    .then((response)=>{
      setcarts(response.data)
    })
     
  },[])
 console.log(carts)

  //ვაცხადებ მდგომარეობას ნივთების  რომელიც მომაქ ჯეისონით
  //var elemenets 
  //elemenets = carts.products //მასივში გადავიტანე
 
 // var detali = elemenets ? elemenets.find((item)=> item.id.toString() === params.info) : ""
  return (
     <div
            className="cart-container__width item-container d-flex mt-5 ">
              
            <div className="item-container__img">
              <img src={carts.thumbnail} alt="cart" /> 
            </div>
            <div className="item-container-elements p-2 pt-3">
              <div className="item-container-elements__title mb-2">
                 <span>დასახელება</span> {carts.title} 
                
              </div>
              <div className="item-container-elements__text mb-3"></div>
              <div className="text-brand">
                <div className="item-container-elements__brendi mb-2 me-1 ">
                   {carts.brand} 
                </div>
                <div className="item-container-elements__procenti border border-success">
                  <div className="text-secondary text-center mb-1">აღწერა</div>
                  {carts.description} 
                </div>
                <div className="item-container-elements__procenti mt-3">
                   <span>ფასდაკლება</span> {carts.discountPercentage}
                </div>
              </div>
              <div className="text-buttons d-flex justify-content-between mt-2">
                <div className="item-container-elements__tanxa ">
                   <span>ფასი</span> {carts.price}
                </div>

                <div className="buttons-shopping d-flex h-100"></div>
              </div>
              <div className="item-container-elements__title mt-2 mb-5">
                 <span>კატეგორია</span> {carts.category} 
              </div>
              <Link to='..' relative='path'>მთავარი გვერდი</Link>
            </div>
            
          </div>
  )
}

export default Info