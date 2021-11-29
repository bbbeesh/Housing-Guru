import React, { Component } from "react";
import Hero from "../components/Hero";
import { Banner } from "../components/Banner";
import { Link } from "react-router-dom";
export default class Rooms extends Component {
	render() {
		return (
			<Hero hero="roomsHero">
				<Banner title="Avaialbe Rentals">
					<Link to="/" className="btn-primary">
						Home Page
					</Link>
				</Banner>
			</Hero>
		);
	}
}
