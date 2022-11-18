import React, { useState } from "react";

import { Wrapper } from "./JobFilter.styles";

import Banner from "../../components/Banner";
import JobListing from "../../components/JobListing";
import { JobListingsData } from "../../data";

export default function JobFilter() {
	const [filters, setFilters] = useState([]);

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

	return (
		<>
			<Banner handleFilters={setFilters} filters={filters} />

			<Wrapper>{JobListingsEntries}</Wrapper>
		</>
	);
}
