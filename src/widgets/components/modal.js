import React from 'react';
import { Link } from 'react-router-dom';
import './modal.css';

export default function Modal(props){
  return(
    <div className = "Modal">
      {props.children}
      <Link to={{
        pathname:'/videos',
        state:{
          modal:false
        }
      }}>
        <button 
          className="modal-close"
          onClick={props.handleClick} 
        />
      </Link>
    </div>
  )
}
