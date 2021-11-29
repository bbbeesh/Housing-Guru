import React, { Component } from "react";
import Hero from "../components/Hero";
import { Banner } from "../components/Banner";
import { Link } from "react-router-dom";
export default class Home extends Component {
	render() {
		return (
			<Hero>
				<Banner
					title="Affordable Accomodation"
					subtitle="Starting at just ₹4999/Month!"
				>
					<Link to="/rooms" className="btn-primary">
						Our Rentals
					</Link>
				</Banner>
			</Hero>
		);
	}
}
