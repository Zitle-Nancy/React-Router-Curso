import React, { Component } from 'react';
import Search from '../components/search';

export default class SearchContainer extends Component{
	state = {
		value:'Luis fonsi'
	}
	/* Ya tenemos acceso a nuestro elemento y a su valor */
	handleSumbit = event => {
		event.preventDefault();
		console.log(this.input.value , 'submit');
	}
 	/* 
		 le asignamos el elemento a una variable dentro de nuestra 
		 funcion, usando this
  */
	setInputRef = element => {
		this.input = element;
	}
	/* 
		con el setRef obtenemos el elemento del HTML, 
		en este caso input 
	*/
	handleInputChange = event => {
		this.setState({
			value: event.target.value.replace(' ','-')
		})
	}
	render(){
		return(
				<Search 
					setRef={this.setInputRef}
					handleSumbit={this.handleSumbit}
					handleChange={this.handleInputChange}
					value={this.state.value}
				/>
		)
	}
};