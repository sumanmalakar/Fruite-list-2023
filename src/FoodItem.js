import React from "react";

export default function FoodItem({name, price, img, deleteList,key}) {
  return(

  <div>
    <div className="container">
      <div className="row justify-content-md-center">

<div className="col-md-4">

    <div class="card my-2" style={{width:"18rem"}} >

  <img src={img} class="card-img-top" alt="..."  />
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <h3>{price}</h3>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary"
    onClick={()=>deleteList(key)} 
    >Delete</a>
  </div>
</div>
</div>
      </div>
    </div>
  </div>
  )
}