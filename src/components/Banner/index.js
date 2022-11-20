import React, { useState } from "react";
import { nanoid } from "nanoid";

import {
	Wrapper,
	SearchBar,
	Container,
	Search,
	Clear,
	Filter,
	Suggestions,
	ErrorMsg,
} from "./Banner.styles";
import SearchImg from "../../images/Search.svg";
import IconRemove from "../../images/icon-remove.svg";
import { tags } from "../../data";

export default function Banner(props) {
	const [searchTag, setSearchTag] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [suggestionIndex, setSuggestionIndex] = useState(0);
	const [suggestionsActive, setSuggestionsActive] = useState(false);
	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");

	function handleChange(event) {
		const filterValue = event.currentTarget.value;
		const query = filterValue.toLowerCase();

		setError(false);
		setSearchTag(filterValue);

		if (query.length > 0) {
			const filterSuggestions = tags.filter(
				(suggestion) => suggestion.toLowerCase().indexOf(query) > -1
			);
			setSuggestions(filterSuggestions);
			setSuggestionsActive(true);
		} else {
			setSuggestionsActive(false);
		}
	}

	function handleClick(event) {
		setSuggestions([]);
		setSearchTag("");
		setSuggestionsActive(false);

		let suggestionText = event.currentTarget.innerText;

		let filtersArrayLC = Array.from(props.filters).map((item) =>
			item.filter.toLowerCase()
		);
		let notInFilters = !filtersArrayLC.includes(
			suggestionText.toLowerCase()
		);

		if (notInFilters) {
			props.handleFilters((prevState) => {
				let prevArray = Array.from(prevState);

				prevArray.push({
					filterId: nanoid(),
					filter: suggestionText,
				});
				return prevArray;
			});
		} else if (!notInFilters) {
			setError(true);
			setErrorMsg("Filter already exists.");
		}
	}

	function handleKeyDown(event) {
		// UP ARROW
		if (event.keyCode === 38) {
			if (suggestionIndex === 0) {
				return;
			}
			setSuggestionIndex(suggestionIndex - 1);
		}
		// DOWN ARROW
		else if (event.keyCode === 40) {
			if (suggestionIndex === suggestions.length - 1) {
				return;
			}
			setSuggestionIndex(suggestionIndex + 1);
		}
		// ENTER
		else if (event.keyCode === 13) {
			if (suggestions.length > 0) {
				setSearchTag(suggestions[suggestionIndex]);
				setSuggestionIndex(0);
				setSuggestionsActive(false);
			}
		}
	}

	function handleSubmit(event) {
		event.preventDefault();
		let tagsLC = tags.map((item) => item.toLowerCase());
		let tagExists =
			searchTag.length > 1 && tagsLC.includes(searchTag.toLowerCase());
		let filtersArrayLC = Array.from(props.filters).map((item) =>
			item.filter.toLowerCase()
		);
		let notInFilters = !filtersArrayLC.includes(searchTag.toLowerCase());

		if (tagExists && notInFilters) {
			setError(false);
			props.handleFilters((prevState) => {
				let prevArray = Array.from(prevState);

				prevArray.push({ filterId: nanoid(), filter: searchTag });
				return prevArray;
			});
			setSearchTag("");
		} else if (!tagExists) {
			setSuggestionsActive(false);
			setError(true);
			setErrorMsg("Enter a valid tag name.");
		} else if (!notInFilters) {
			setSuggestionsActive(false);
			setError(true);
			setErrorMsg("Filter already exists.");
		}
	}

	function handleRemoveAllFilters() {
		props.handleFilters([]);
		setSearchTag("");
		setError(false);
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

	const populateSuggestions = (
		<Suggestions>
			{suggestions.map((suggestion, index) => {
				return (
					<li
						className={index === suggestionIndex ? "active" : ""}
						key={index}
						onClick={(event) => handleClick(event)}
					>
						{suggestion}
					</li>
				);
			})}
		</Suggestions>
	);

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
							onKeyDown={(event) => handleKeyDown(event)}
						/>
						{suggestionsActive && populateSuggestions}
						{error && <ErrorMsg>{errorMsg}</ErrorMsg>}
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
