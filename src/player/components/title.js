import React from 'react';
import './title.css';

export default function Title(props){
    return(
			<div className="title">
				<h2>{props.title}</h2>
			</div>
    )
}