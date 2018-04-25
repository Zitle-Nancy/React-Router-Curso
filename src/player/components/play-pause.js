import React from 'react';
import './play-pause.css';
import Pause from '../../icons/components/pause';
import Play from '../../icons/components/play';

export default function PlayPause(props){
  return(
    <div className = "play-pause">
      {
        props.pause ? 
          <button
            onClick={props.handleClick}
          >
            <Play size={25} color="white"/>
          </button>
        :
        <button
          onClick={props.handleClick}
         >
          <Pause size={25} color="white"/>
        </button>
      }
    </div>
  )
}