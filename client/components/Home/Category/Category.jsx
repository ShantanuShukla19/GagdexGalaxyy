import "./Category.scss";
import cat1 from "../../../assets/category/cat-1.jpg";
import { ReactDOM } from "react";
import React from "react";
import { Attributes } from "react";
import { useNavigate } from "react-router-dom";



const Category = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <div className="shop-by-category">
      <div className="categories">
       {categories?.data?.map((item)=>(
        <div
  key={item.id}
  className="categoryy"
  onClick={() => navigate(`/category/${item.id}`)}
>
        
          <img src={"http://localhost:1337"+item.attributes.img.data.attributes.url} alt="" />
        </div>
       ))}
     

       
      
      </div>
    </div>
  );
};
export default Category;