import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";


const Product = (props) => {

  const { img, name, seller, price, stock } = props.Product;

  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="product-name">
        <h4> {name} </h4>
        <br />
        <p>
          <small>by: {seller}</small>
        </p>
        <br />
        <p> $ {price} </p>
        <br />
        <p> <small> Only {stock} left in stock-Order soon</small></p>
          <br/>
        <button
           className="main-button"
           onClick = {()=>props.handleAddProduct(props.Product)}
           > 
                <FontAwesomeIcon icon={faShoppingCart} /> add to card 
            </button>
        
      </div>
    </div>
  );
};

export default Product;
