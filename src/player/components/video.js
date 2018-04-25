import React , { Component } from 'react';
import './video.css';
export default class Video extends Component {
	tooglePlay = () =>{
		if(this.props.pause){
			this.video.play();
		}else{
			this.video.pause();
		}
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.pause !== this.props.pause){
			this.tooglePlay();
		}
	}
	setRef = element =>{
		this.video = element;
	}
	render(){
		const {
			handleLoadedMetadata,
			handleTimeUpdate,
			handleSeeked,
			handleSeeking
		} = this.props;

		return( 
			<div className="video">
				<video
					ref={this.setRef}
					autoPlay = {this.props.autoplay}
					src={this.props.src}
					onLoadedMetadata={handleLoadedMetadata}
					onTimeUpdate={handleTimeUpdate}
					onSeeked={handleSeeked}
					onSeeking={handleSeeking}
				/>
			</div>   
		)
	}
}