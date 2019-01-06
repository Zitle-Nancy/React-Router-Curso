import React, {Component} from 'react';
import { connect } from 'react-redux';
import HomeLayout from '../components/home-layout';
import Categories from '../../category/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal-container';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/container/handle-error';
import VideoPlayer from '../../player/containers/video-player';


class Home extends Component {
	state = {
		modalVisible: false,
	}
	// el argumento media lo recibe en props de media.js
	handleOpenModal = (media) => {
		this.setState({
			modalVisible: true,
			media /*  solo media porque se llaman igual ECMS6 */
		})
	}
	handleCloseModalClick = () => {
		this.setState({
			modalVisible: false,
		})
	}
	render(){
		return(
			<HandleError>
				<HomeLayout>
					<Related />
					<Categories 
						categories = {this.props.categories}
						handleOpenModal={this.handleOpenModal}
						search = {this.props.search}
					/>
					{this.state.modalVisible &&
						<ModalContainer>
							<Modal handleClick = {this.handleCloseModalClick}>
								<VideoPlayer 
									autoplay={true}
									src={this.state.media.src}
									title={this.state.media.title}
								/>
							</Modal>
						</ModalContainer>
					}
				</HomeLayout>
			</HandleError>
			)
	}
}

/** 
 * @function mapStateToProps
 * Recibe nuestro estado y nuestras propiedades, que vamos a usar
 * en nuestra UI
*/
function mapStateToProps(state, props) {
	return{
		categories:state.data.categories,
		search:state.search
	}	
}
/** 
 * @function connect
 * Recibe una función como parametro, donde especificamos los datos
 * que necesitamos y los obtenemos del state
*/
export default connect(mapStateToProps)(Home);
