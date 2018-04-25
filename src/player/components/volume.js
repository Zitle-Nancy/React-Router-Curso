import React from 'react';
import VolumenIcon from '../../icons/components/volumen';
import Mute from '../../icons/components/mute';
import './volume.css';

export default function Volume(props){
  return(
    <div className="volume">
      <div onClick={props.handleVolumeMute}>
        {!props.mute && (
          <VolumenIcon 
            color="white"
            size={25}
          />
        )}
        {props.mute && (
          <Mute
          color="white"
          size={25}
        />
        )}
      </div>
      <div className="volume-range" >
        <input 
          type="range"
          min={0}
          max={1}
          step={.05}
          onChange={props.handleVolumeChange}
          value={props.rangeValue}
        />
      </div>
    </div>
  )
}