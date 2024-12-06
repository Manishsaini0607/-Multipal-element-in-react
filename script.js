import ReactDOM from 'react-dom/client'
import './style.css'
import React from 'react'

const root = ReactDOM.createRoot(document.querySelector("#root"))

const h1 = <h1> manish sainin </h1>
 
function Card(props) {
   const {key,title,price,thumbnail,brand}=props
    return(<div  className='card' key={key}>
        <img src={thumbnail} alt="" />
         <div className='contant-container'>
         <p>{title}</p>
        <h3>{brand}</h3>
        <p><b>${price}</b></p>
         </div>
         
        
        </div>
         )
    
}

  

    fetch('https://dummyjson.com/products/search?q=phone')
.then(res => res.json())
.then((data)=>{
    const container= data.products.map((products)=>{
         return <Card
                 key={products.id} 
                 title={products.title} 
                 price={products.price}
                 brand={products.brand}
                 thumbnail={products.thumbnail}
                 />
         
         
    })
    console.log(data.products)
    root.render( <div className='card-container'>{container}</div>)
})



