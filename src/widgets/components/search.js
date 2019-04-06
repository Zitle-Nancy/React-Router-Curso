import React from 'react';
import { Prompt } from 'react-router';
import './search.css';

/* otra forma de renderizar UI */
const Search = (props)=>(
		<form 
			className="search"
			onSubmit = {props.handleSumbit}
		>
			<Prompt 
				when={props.Prompt}
				message={`Estas haciendo una búsqueda,
				 ¿Seguro que quieres dejar la página?`}
			/>
			<input
				ref={props.setRef} 
				type="text" 
				className="search-input"
				placeholder= "Busca tu canción favorita"
				onChange={props.handleChange}
				value={props.value}
			/>
		</form>
)
export default Search;