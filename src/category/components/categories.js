import React from 'react';
import Category from './category';
import Search from '../../widgets/containers/search';
import './categories.css';

export default function Categories(props) {
	return (
			<div className="categories">
				<Search />
				{
					props.categories.map((item)=>{
						return (
								<Category
									{...item}
									key={item.id}
									handleOpenModal={props.handleOpenModal}
								/>
							)
					})
				}
			</div>
		)
}
