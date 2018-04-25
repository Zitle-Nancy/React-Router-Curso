import React, {Component} from 'react';
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
	handleCloseModalClick = (event) => {
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
							categories = {this.props.data.categories}
							handleOpenModal={this.handleOpenModal}
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

export default Home;
