import React from 'react';
import './full-screen.css';
import IconFullScreen from '../../icons/components/fullScreen'

const FullScreen = (props) => (
  <div 
    className="full-screen"
    onClick={props.handleFullScreenClick}
  >
    <IconFullScreen 
      size = {25}
      color = "white"
    />
  </div>
)

export default FullScreen;