import React, { Component } from 'react';
import Search from '../components/search';
import { connect } from 'react-redux';

class SearchContainer extends Component{
	state = {
		value:'',
		Prompt:false
	}
	/* Ya tenemos acceso a nuestro elemento y a su valor */
	handleSumbit = event => {
		event.preventDefault();
		// console.log(this.input.value , 'submit');
		/**
		 * @description type:'SEARCH_VIDEO'
		 * es la acción que en reducer vamos a utilizar
		 */
		this.props.dispatch({
			type: 'SEARCH_VIDEO',
			payload:{
				query:this.input.value
			}
		})
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
			value: event.target.value.replace(' ','-'),
			Prompt: !!(event.target.value.length)
		})
	}
	render(){
		console.log(this.state.Prompt)
		return(
				<Search 
					setRef={this.setInputRef}
					handleSumbit={this.handleSumbit}
					handleChange={this.handleInputChange}
					value={this.state.value}
					Prompt={this.state.Prompt}
				/>
		)
	}
};
/**
 * @description connect()
 * Conectamos nuestro componente con connect y asi
 * podemos hacer uso de las propiedades que connect nos brinda
 */
export default connect()(SearchContainer);