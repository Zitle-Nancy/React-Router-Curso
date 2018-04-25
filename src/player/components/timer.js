import React from 'react';
import './timer.css';

function leftPad(number){
  const pad = '00';
  // console.log(number.length);
  // console.log(pad.length);
  // console.log(pad.substring(0, pad.length - number.length) + number);
  return pad.substring(0, pad.length - number.length) + number;
}

function formattedTimer(secs){
  const minutes = parseInt(secs / 60 , 10);
  const seconds = parseInt(secs % 60 , 10); 
  return `${minutes} : ${leftPad(seconds.toString())}`
}

export default function Timer(props){
  return(
    <div className="timer">
      <p>
        <span>
            {
            formattedTimer(props.currentTime)
            } 
                /  
            {
              formattedTimer(props.duration)
            }
        </span>
      </p>
    </div>
  )
}