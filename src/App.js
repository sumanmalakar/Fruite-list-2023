import React from "react";
import {useState} from 'react';
import Form from './InputForm';
import FoodItem from './FoodItem'
import "./style.css";
export default function App() {
  const [list, setList] = useState([
    { price: "$1", name: "Apple" , id:1,
     img:"https://post.healthline.com/wp-content/uploads/2020/09/fruit-still-life-732x549-thumbnail-732x549.jpg"},

    // { price: "$1", id:2, name: "Dragonfruit", img:"https://post.healthline.com/wp-content/uploads/2020/09/fruit-still-life-732x549-thumbnail-732x549.jpg" },

    // {price: "$2", id:3, name: "Passionfruit", img:"https://post.healthline.com/wp-content/uploads/2020/09/fruit-still-life-732x549-thumbnail-732x549.jpg" },

    // {  price: "$2", id:4, name: "Spinach", img:"https://post.healthline.com/wp-content/uploads/2020/09/fruit-still-life-732x549-thumbnail-732x549.jpg" },

    // { price: "$4", id:5, name: "Pumpkin", img:"https://post.healthline.com/wp-content/uploads/2020/09/fruit-still-life-732x549-thumbnail-732x549.jpg" },

    // { price: "$1",id:6, name: "Peas", img:"https://post.healthline.com/wp-content/uploads/2020/09/fruit-still-life-732x549-thumbnail-732x549.jpg" }
  ])

  const addList = (listItem)=>{
       setList([...list, listItem]);
  }
  return (
    <>
    <div className="container my-3">
    <Form   addList={addList} />
    </div>
   {
     list.map((e)=>{
       return(
         <FoodItem
          key={e.id}
           price={e.price}
            name={e.name} 
            img={e.img}
            
             />
       )
     })
   }
      </>
  );
}




