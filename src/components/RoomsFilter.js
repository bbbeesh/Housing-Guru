import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import { Title } from "./Title";

//Get all unique values
const getUnique = (items, value) => {
	// console.log(items);
	return [...new Set(items.map((items) => items[value]))];
};

export const RoomsFilter = ({ rooms }) => {
	const context = useContext(RoomContext);
	// console.log(context);
	const {
		handleChange,
		type,
		city,
		capacity,
		price,
		minPrice,
		maxPrice,
		minSize,
		maxSize,
		breakfast,
		pets,
	} = context;

	//geting all unique types
	let types = getUnique(rooms, "type");
	types = ["all", ...types];
	types = types.map((item, idx) => {
		return (
			<option value={item} key={idx}>
				{item}
			</option>
		);
	});

	//geting all unique cities
	let cities = getUnique(rooms, "city");
	cities = ["all", ...cities];
	cities = cities.map((item, idx) => {
		return (
			<option value={item} key={idx}>
				{item}
			</option>
		);
	});

	let guests = getUnique(rooms, "capacity");
	guests = guests.map((item, idx) => {
		return (
			<option value={item} key={idx}>
				{item}
			</option>
		);
	});

	return (
		<section className="filter-container">
			<Title title="Search Rentals" />
			<form class="filter-form">
				{/*Select type*/}
				<div class="form-group">
					<label for="type">room type</label>
					<select
						name="type"
						id="type"
						value={type}
						className="form-control"
						onChange={handleChange}
					>
						{types}
					</select>
				</div>
				{/*End Select type*/}
				{/*Select city*/}
				<div class="form-group">
					<label for="city">City</label>
					<select
						name="city"
						id="city"
						value={city}
						className="form-control"
						onChange={handleChange}
					>
						{cities}
					</select>
				</div>
				{/*End Select city*/}
				{/*Guests*/}
				<div class="form-group">
					<label for="capacity">Guests</label>
					<select
						name="capacity"
						id="capacity"
						value={capacity}
						className="form-control"
						onChange={handleChange}
					>
						{guests}
					</select>
				</div>
				{/*End Guests*/}
				{/*Price*/}
				<div class="form-group">
					<label for="price">Price ₹{price}0</label>
					<input
						type="range"
						name="price"
						min={minPrice}
						max={maxPrice}
						id="price"
						value={price}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				{/*End Price*/}
				{/*Size*/}
				<div class="form-group">
					<label for="size">Size (SQFT)</label>
					<div className="size-inputs">
						<input
							type="number"
							name="minSize"
							id="size"
							value={minSize}
							onChange={handleChange}
							className="size-input"
						/>
						<input
							type="number"
							name="maxSize"
							id="size"
							value={maxSize}
							onChange={handleChange}
							className="size-input"
						/>
					</div>
				</div>
				{/*End Price*/}
			</form>
			<form className="form-features">
				{/*Extras*/}
				<div className="form-group">
					<span>Features: </span>
				</div>
				<div className="form-group">
					<span className="single-extra">
						<input
							type="checkbox"
							name="breakfast"
							id="beakfast"
							onChange={handleChange}
						/>
						<label htmlFor="breakfast">breakfast</label>
					</span>
				</div>
				<div className="form-group">
					<span className="single-extra">
						<input
							type="checkbox"
							name="pets"
							id="pets"
							onChange={handleChange}
						/>
						<label htmlFor="pets">pets</label>
					</span>
				</div>
				{/*End Extras*/}
			</form>
		</section>
	);
};
