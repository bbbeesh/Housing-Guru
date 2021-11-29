import React, { useContext } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import StyledHero from "../components/StyledHero";

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
		city,
		description,
		capacity,
		size,
		price,
		extras,
		breakfast,
		pets,
		images,
	} = room;
	const [mainImg, ...otherImgs] = images;

	return (
		<>
			<StyledHero img={mainImg || defaultBcg}>
				<Banner title={`${name} room`}>
					<Link to="/rooms" className="btn-primary">
						Back to Rentals
					</Link>
				</Banner>
			</StyledHero>
			<section class="single-room">
				<div class="single-room-images">
					{otherImgs.map((item, idx) => {
						return <img key={idx} src={item} />;
					})}
				</div>
				<div class="single-room-info">
					<article class="desc">
						<h3>Details</h3>
						<p>{description}</p>
					</article>
					<article class="info">
						<h3>Info</h3>
						<h6>
							<b>city:</b> {city}
						</h6>
						<h6>
							<b>price:</b> ₹{price}0
						</h6>
						<h6>
							<b>size:</b> {size} SQFT
						</h6>
						<h6>
							<b>max capacity:</b>
							{capacity > 1 ? ` ${capacity} people` : ` 1 person`}
						</h6>
						<h6>{pets ? "Pets Allowed" : "No Pets Allowed"}</h6>
						<h6>{breakfast && "free breakfast included"}</h6>
					</article>
				</div>
			</section>
			<section class="room-extras">
				<h6>Extras</h6>
				<ul class="extras">
					{extras.map((item, idx) => {
						return <li key={idx}>- {item}</li>;
					})}
				</ul>
			</section>
		</>
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
