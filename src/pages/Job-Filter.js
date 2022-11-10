import React, { useState } from "react";

import Banner from "../components/Banner";

export default function JobFilter() {
	const [filters, setFilters] = useState([]);
	return (
		<div>
			<Banner handleFilters={setFilters} filters={filters} />
		</div>
	);
}
