import React from 'react';
import './home-layout.css';
export default function HomeLayout(props){
	return(
			<section className = "home-layout">
				{props.children}
			</section>
		)
}