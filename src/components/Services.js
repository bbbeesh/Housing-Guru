import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import { Title } from "./Title";

export default class Services extends Component {
	state = {
		services: [
			{
				icon: <FaCocktail />,
				title: "Free Cocktails",
				info: "Aliquip excepteur ex reprehenderit ea reprehenderit et ullamco cupidatat incididunt est consequat mollit. Quis ullamco ut voluptate veniam.",
			},
			{
				icon: <FaHiking />,
				title: "Endless Hiking",
				info: "Reprehenderit ipsum non fugiat cupidatat. In exercitation cupidatat ad amet cupidatat consectetur amet elit ullamco voluptate ad eu.",
			},
			{
				icon: <FaShuttleVan />,
				title: "Free Shuttle",
				info: "Officia et adipisicing deserunt sunt cupidatat ex esse in sunt aliquip culpa consectetur quis consequat.",
			},
			{
				icon: <FaBeer />,
				title: "Strongest Beer",
				info: "Culpa cupidatat id sit duis anim irure duis tempor quis duis est. Ex elit est dolor anim commodo aute labore enim qui nulla ad laborum et.",
			},
		],
	};
	render() {
		return (
			<section className="services">
				<Title title="Services" />
				<div className="services-center">
					{this.state.services.map((item, idx) => {
						return (
							<article key={idx} className="service">
								<span>{item.icon}</span>
								<h6>{item.title}</h6>
								<p>{item.info}</p>
							</article>
						);
					})}
				</div>
			</section>
		);
	}
}
