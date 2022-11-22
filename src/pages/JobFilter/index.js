import React, { useState } from "react";

import {
	Wrapper,
	SearchBarPopUp,
	Container,
	ContainerClear,
	Filter,
	Clear,
} from "./JobFilter.styles";

import Banner from "../../components/Banner";
import JobListing from "../../components/JobListing";
import { JobListingsData } from "../../data";
import IconRemove from "../../images/icon-remove.svg";

export default function JobFilter() {
	const [filters, setFilters] = useState([]);

	function handleRemoveFilter(event) {
		let id = event.currentTarget.parentNode.id;

		setFilters((prevState) => {
			let prevArray = Array.from(prevState);

			let newArray = prevArray.filter((item) => item.filterId !== id);
			return newArray;
		});
	}

	function handleRemoveAllFilters() {
		setFilters([]);
	}

	const FilteredItems = [];

	JobListingsData.forEach((item) => {
		if (filters.length > 0) {
			let filteredTags = filters.every((filterItem) =>
				item.FilterTags.some(
					(element) =>
						element.toLowerCase() ===
						filterItem.filter.toLowerCase()
				)
			);

			if (filteredTags) {
				FilteredItems.push(item);
			}
		} else {
			FilteredItems.push(item);
		}
	});

	const JobListingsEntries = FilteredItems.map((item) => {
		return <JobListing key={item.Id} data={item} />;
	});

	const filterTags = filters.map((filter) => (
		<Filter key={filter.filterId} id={filter.filterId}>
			<p>{filter.filter}</p>
			<button onClick={(event) => handleRemoveFilter(event)}>
				<img src={IconRemove} alt="Remove Icon" />
			</button>
		</Filter>
	));

	return (
		<>
			<Banner handleFilters={setFilters} filters={filters} />

			<Wrapper>
				{filters.length > 0 && (
					<SearchBarPopUp>
						<Container>{filterTags}</Container>
						<ContainerClear>
							<Clear onClick={handleRemoveAllFilters}>
								Clear
							</Clear>
						</ContainerClear>
					</SearchBarPopUp>
				)}
				{JobListingsEntries}
			</Wrapper>
		</>
	);
}
