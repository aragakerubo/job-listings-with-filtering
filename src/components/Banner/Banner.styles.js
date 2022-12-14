import styled from "styled-components";

import BannerImg from "../../images/bg-header-desktop.svg";

export const Wrapper = styled.nav`
	position: relative;
	min-height: 160px;
	background-image: url(${BannerImg});
	background-repeat: no-repeat;
	background-size: cover;
	background-color: var(--desatDarkCyan);
`;

export const SearchBar = styled.div`
	position: absolute;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.85em 2em;
	width: 80%;
	max-width: 1110px;
	min-height: 72px;
	border-radius: 5px;
	left: 0;
	right: 0;
	bottom: -36px;
	margin: 0 auto;
	background-color: var(--white);
	background: #ffffff;
	box-shadow: 0px 15px 20px -5px var(--shadow);
	border-radius: 5px;

	@media (max-width: 1000px) {
		visibility: hidden;
	}
`;

export const Container = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	flex-wrap: wrap;
	gap: 0.75em;
	width: 45%;
`;

export const Search = styled.form`
	position: relative;
	width: 85%;
	max-width: 453px;
	min-height: 38px;

	input {
		padding: 10px 20px;
		width: 100%;
		height: 100%;
		border: 1px solid var(--lightCyanBorder);
		border-radius: 50px;
		color: var(--veryDarkGCyan);
		filter: drop-shadow(6px 4px 6px var(--shadow));
		outline: none;
	}

	button {
		position: absolute;
		right: 0;
		top: 0;
		height: 100%;
		width: 50px;
		border-radius: 0 50px 50px 0;
		background: transparent;
		border: transparent;
		cursor: pointer;
		outline: 0;
	}

	@media (max-width: 1000px) {
		visibility: visible;
		position: absolute;
		width: 100%;
		max-width: none;
		bottom: 19px;
		left: 0;
		right: 0;
	}
`;

export const Clear = styled.p`
	color: var(--desatDarkCyan);
	cursor: pointer;
`;

export const Filter = styled.div`
	display: flex;
	height: 32px;
	border-radius: 4px;
	overflow: hidden;

	p {
		padding: 10px;
		text-align: center;
		height: 100%;
		color: var(--desatDarkCyan);
		background-color: var(--lightGCyanFTs);
	}

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		background-color: var(--desatDarkCyan);
		border: transparent;
		cursor: pointer;
		outline: 0;

		&:hover {
			background-color: var(--veryDarkGCyan);
		}
	}
`;

export const Suggestions = styled.ul`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	list-style: none;
	padding: 0;
	margin: 0;
	width: 100%;
	border-radius: 4px;
	background-color: var(--white);
	color: var(--veryDarkGCyan);
	filter: drop-shadow(6px 4px 6px var(--shadow));
	z-index: 10;

	li {
		width: 100%;
		padding: 10px 20px;
		border-top: 1px solid var(--lightCyanBorder);
		cursor: pointer;

		&:hover {
			background-color: var(--lightGCyanFTs);
		}
	}

	li.active {
		background-color: var(--lightGCyanFTs);
	}

	li:first-child {
		border: none;
	}
`;

export const ErrorMsg = styled.div`
	position: absolute;
	width: 100%;
	border-radius: 4px;
	background-color: var(--white);
	padding: 10px 20px;
	color: var(--pastelRed);
	filter: drop-shadow(6px 4px 6px var(--shadow));
	z-index: 10;
`;
