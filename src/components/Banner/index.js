import React, { useState } from "react";
import { nanoid } from "nanoid";

import {
	Wrapper,
	SearchBar,
	Container,
	Search,
	Clear,
	Filter,
} from "./Banner.styles";
import SearchImg from "../../images/Search.svg";
import IconRemove from "../../images/icon-remove.svg";

export default function Banner(props) {
	const [searchTag, setSearchTag] = useState("");

	function handleChange(event) {
		setSearchTag(event.currentTarget.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		props.handleFilters((prevState) => {
			let prevArray = Array.from(prevState);

			prevArray.push({ filterId: nanoid(), filter: searchTag });
			return prevArray;
		});
		setSearchTag("");
	}

	function handleRemoveAllFilters() {
		props.handleFilters([]);
	}

	function handleRemoveFilter(event) {
		let id = event.currentTarget.parentNode.id;

		props.handleFilters((prevState) => {
			let prevArray = Array.from(prevState);

			let newArray = prevArray.filter((item) => item.filterId !== id);
			return newArray;
		});
	}

	let filtersArray = Array.from(props.filters);

	const filterTags = filtersArray.map((filter) => (
		<Filter key={filter.filterId} id={filter.filterId}>
			<p>{filter.filter}</p>
			<button onClick={(event) => handleRemoveFilter(event)}>
				<img src={IconRemove} alt="Remove Icon" />
			</button>
		</Filter>
	));

	return (
		<Wrapper>
			<SearchBar>
				<Container>{filterTags}</Container>
				<Container>
					<Search onSubmit={(event) => handleSubmit(event)}>
						<input
							type="text"
							placeholder="search..."
							value={searchTag}
							onChange={(event) => handleChange(event)}
						/>
						<button type="submit">
							<img src={SearchImg} alt="Search" />
						</button>
					</Search>
					<Clear onClick={handleRemoveAllFilters}>Clear</Clear>
				</Container>
			</SearchBar>
		</Wrapper>
	);
}
