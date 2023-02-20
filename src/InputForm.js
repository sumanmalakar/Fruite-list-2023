import React from "react";
import {useState} from 'react';

export default function InputForm({addList}) {
  const [list, setList] = useState({});
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState('');

const submitHandler = (e) =>{
  e.preventDefault();
  const item = {
    name: name,
    price:price,
    img:img,
    id:Math.random()
  }

  setList(item)
  addList(list);
}
 
  return(

  
<form onSubmit = {submitHandler}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Fruit Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"

    value={name}
    onChange={e=>setName(e.target.value)}
    
    />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Price</label>
    <input type="text" class="form-control" id="exampleInputPassword1"
     value={price}
     onChange={e=>setPrice(e.target.value)}
    />
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Img(src)</label>
    <input type="text" class="form-control" id="exampleInputPassword1"
     value={img}
     onChange={e=>setImg(e.target.value)}
    />
  </div>
 
  <button type="submit" class="btn btn-primary">Add Fruite</button>
</form>
  )
}