import React from "react";
import { Room } from "./Room";

export const RoomsList = ({ rooms }) => {
	if (rooms.length === 0) {
		return (
			<div class="empty-search">
				<h3>Sorry, no matching Resuts Avaialbe :(</h3>
			</div>
		);
	}
	return (
		<section className="roomslist">
			<div class="roomslist-center">
				{rooms.map((item) => {
					return <Room key={item.id} room={item} />;
				})}
			</div>
		</section>
	);
};
