import React, { useState } from "react";
import './App.css'

const App = () => {
  const [cart, Updatecart] = useState([
    {
      name: "Apple Juice",
      quantity: "250ml",
      price: 125,
      inCart: 1,
      productimg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv0oU4Qol3IBjfjeVGeku6O0fegTT2a4J2CwjdvTZmhyf3l-3Kiiq-6FO1hLCmiSBvi3Q&usqp=CAU',
      categories:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdJIRhNPG9Zdw-C1Gt4R09e1HNRkwutoR_lg&usqp=CAU'
    },
    {
      name: "Grapes Juice",
      quantity: "250ml",
      price: 125,
      inCart: 1,
      productimg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu_5NuCipwEaT4CwrrjrtAFFjY0q_ga-lEJn5hP3zOKKu7FDPwRj00WOkK5zTI8n9jVp8&usqp=CAU',
      categories:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdJIRhNPG9Zdw-C1Gt4R09e1HNRkwutoR_lg&usqp=CAU'
    },
  ]);

  const increaseitems = (item) => {
    Updatecart
(
      cart.map((i) =>
        i.name === item.name
          ? { ...i, inCart: i.inCart + 1 }
          : { ...i }
      )
    );
  };

  const decreaseitems = (item) => {
    if (item.inCart > 1) {
      Updatecart
  (
        cart.map((i) =>
          i.name === item.name
            ? { ...i, inCart: i.inCart - 1 }
            : { ...i }
        )
      );
    }
  };

  const removeItem = (item) => {
    Updatecart
(cart.filter((i) => i.name !== item.name));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.inCart, 0);

  return (
    <div className="box">
      <div className="heading">
        <h3>Shopping cart</h3>
        <a className="removeall" href=''>Removeall</a>
      </div>
      <div >
        {cart.map((item, index) => (
          <li key={index} className="items">
          <div className="contentbox">
            <div className="inside_content_box1">
               <div>
                <img src={item.productimg} alt={item.name}/>
               </div>
               <div>
                <h2 className="margin">{item.name}</h2>
                <h5 className="margin">{item.quantity}</h5>
                <img src={item.categories} alt={item.name} className="vegsymbol"/>
               </div>
            </div>
            <div className="inside_content_box1">
                <div className="buttons">
                   <button onClick={() => increaseitems(item)} className="circles">+</button>
                   <p className="number">{item.inCart}</p>
                   <button onClick={() => decreaseitems(item)} className="circles">-</button>
                   

                </div>
                <div>
                  <h2>Rs.{item.price * item.inCart}</h2>
                  <a href='#' className="savelater">Save later</a><br/>
                  <button onClick={() => removeItem(item)} className="removeall remove">Remove</button>
                </div>
            </div>
            
            </div>
          </li>
          
        ))}
      </div>
      <hr></hr>
      <div className="total">
           <div className="totalsub">
                <div>
                    <h4>Sub-Total</h4>
                    <p>{cart.length} items</p>
                </div>
                <div>
                   <h2>Total: Rs. {cartTotal}</h2>
                </div>
           </div>
          
      </div>
      <div className="button">
      <button className="checkout">Checkout</button>
      </div>
    </div>
  );
};

export default App;