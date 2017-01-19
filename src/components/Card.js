import React, { Component } from 'react';
import { updateSelection } from '../actions';

class Card extends Component {
	showInfoWindow(properties, latitude, longitude, event) {
		let position = {
			lat: latitude,
			lng: longitude
		};
		let showInfoWindow = true;
		this.context.store.dispatch(
			updateSelection(properties.name, position, showInfoWindow)
		);
	}

	hideInfoWindow() {
		let key = null;
		let position = null;
		let showInfoWindow = false;
		this.context.store.dispatch(updateSelection(key, position, showInfoWindow));
	}

	render() {
		let photo = "/photos/" + this.props.data.photo;
		let properties = this.props.data;
		let latitude = this.props.data.latitude;
		let longitude = this.props.data.longitude;

		return (
			<div
				className="card-container"
				onMouseEnter={this.showInfoWindow.bind(this, properties, latitude, longitude)}
				onMouseLeave={this.hideInfoWindow.bind(this)}>
				<div className="card">
					<div className="photo-container">
						<img src={photo} alt={properties.name} className="photo" />
					</div>
					<div className="details-container">
						<div className="name">{properties.name}</div>
						<div className="description">{properties.description}</div>
						<div className="details">
							<ul>
								<li><strong>Year Established</strong> {properties.yearEstablished} </li>
								<li><strong>Park Area</strong> {properties.parkArea} sq km</li>
							</ul>                          
                                <a href={properties.weblink} target='_blank'>More Info</a>                         
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Card.contextTypes = { store: React.PropTypes.object };

export default Card;