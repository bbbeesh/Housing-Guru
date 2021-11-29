import React, { Component } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

import { Banner } from "../components/Banner";
import { Link } from "react-router-dom";
export default class Home extends Component {
	render() {
		return (
			<>
				<Hero>
					<Banner
						title="Affordable Accomodation"
						subtitle="Starting at just ₹1000/Month!"
					>
						<Link to="/rooms" className="btn-primary">
							Our Rentals
						</Link>
					</Banner>
				</Hero>

				<FeaturedRooms />
				<div class="btn-center">
					<Link to="/rooms" className="btn-primary">
						View All Available Rentals
					</Link>
				</div>
			</>
		);
	}
}
