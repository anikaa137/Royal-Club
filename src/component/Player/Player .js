import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'
import './Player .css'

const Player  = (props) => {
  //  console.log(props)
    const {img,name,role,selary } = props.player
    return (
  <div class="shadow-lg p-3 mb-5 bg-body rounded">
  <div class="row">
    <div class="col-md-4 player-img">
      <img src={img} alt=" "></img>
    </div>
    <div class="col-md-4">
      <div class="card-body">
        <h3 class="card-title">Name : {name}</h3>
        <h5 class="card-text">Role : {role}</h5>
        <h4 class="card-text">Salary : {selary} BDT</h4>
        <button className="button" onClick={() => props.handleAddPlayer(props.player)}> <FontAwesomeIcon icon={faPlus } />  Add To Club </button>
      </div>
    </div>
  </div>
</div>
 
    );
};

export default Player ;