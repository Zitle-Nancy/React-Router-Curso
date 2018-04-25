import React from 'react';
import './video-player-controls.css';

export default function VideoPlayerControls(props){
  return(
    <div className="video-player-controls">
      {props.children}
    </div>
  )
}