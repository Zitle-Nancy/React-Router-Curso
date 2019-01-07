import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './media.css';

class Media extends PureComponent {
	/*aqui van las funciones*/
	handleClick = event => {
		// por las props le mandamos las propiedades de nuestro video para que acceda a ellas
		this.props.openModal(this.props);
	}

	render() {
		const { id } = this.props;
		return (
			<Link to={{
				pathname:'/videos',
				search:`?id=${id}`,
				state:{
					modal:true,
					id:id,
				}
			}}>
				<div className="Media card" onClick = {this.handleClick}>
					<div className="Media-image card-image">
						<img
							src = {this.props.cover}
							alt="Deberia de salir una imagen"
							width={260}
							height={160}
						/>
					</div>
					<div className = "card-content">
						<h3 className="Media-title">{this.props.title}</h3>
						<p className="Media-author">{this.props.author}</p>
					</div>
				</div>
			</Link>
		);

	}
}
/* observar como se escribe propTypes y PropTypes */
/* Media.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	author: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['video','audio']),
}
*/
export default Media;
