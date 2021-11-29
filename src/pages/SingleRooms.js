import React, { Component, useContext } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import { Banner } from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import { useParams } from "react-router-dom";

export const SingleRooms = () => {
	const { slug } = useParams();
	const context = useContext(RoomContext);
	const room = context.getRoom(slug);

	if (!room) {
		return (
			<div class="error">
				<h3>Room Not Found</h3>
				<Link to="/rooms" className="btn-primary">
					Back to Rentals
				</Link>
			</div>
		);
	}
	const {
		name,
		description,
		capacity,
		size,
		price,
		extras,
		breakfast,
		pets,
		images,
	} = room;

	return (
		<Hero hero="roomsHero">
			<Banner title={`${name} room`}>
				<Link to="/rooms" className="btn-primary">
					Back to Rentals
				</Link>
			</Banner>
		</Hero>
	);
};

// const { slug } = useParams();
// export default class SingleRooms extends Component {
// 	constructor(props) {
// 		super(props);
// 		console.log(this.props);
// 		// this.state = {
// 		// 	slug: this.props.match.params.slug,
// 		// };
// 	}
// 	componentDidMount() {}
// 	render() {
// 		return <div>Hello from single room page!</div>;
// 	}
// }
