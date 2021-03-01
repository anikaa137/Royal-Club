import React, { useDebugValue } from 'react';
import './Club.css'

const Club = (props) => {
    const carts = props.cart;
    let totalBudget = 0;
    for (let i =0; i< carts.length ; i++){
        const player = carts [i];
        totalBudget = totalBudget + player.selary;
    }
    return (
        <div class="sticky-sm-top">
            <div className="club-name"><h2>The royal club's adding board : </h2></div>
            <div className="dashboard">
              <h5>Add Players : {carts.length} </h5>
                <h5>Total Budget : {totalBudget}</h5>
            </div>
            {
             carts.map(cart=>
               <div  className="player-cart">
                  <h4>{cart.name}</h4>
                  <div><img src={cart.img} alt=""/></div>
                  <h6>Salary: {cart.selary}BDT</h6>
               </div>
             )
            }
        </div>
    );
};

export default Club;
