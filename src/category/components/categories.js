import React from 'react';
import Category from './category';
import Search from '../../widgets/containers/search';
import Media from '../../playlist/components/media';
import './categories.css';

export default function Categories(props) {
	return (
			<div className="categories">
				<Search />
				{
					props.search.map( (item, index) => {
						console.log(...item, 'en media');
						return <Media key={index} {...item}/>
					})
				}
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
