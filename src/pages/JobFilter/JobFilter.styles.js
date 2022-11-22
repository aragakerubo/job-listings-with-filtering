import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 24px;
	padding: 75px 0;

	@media (max-width: 1000px) {
		padding: 60px 0;
	}

	@media (max-width: 760px) {
		gap: 45px;
	}
`;

export const SearchBarPopUp = styled.div`
	display: none;
	justify-content: space-between;
	align-items: center;
	gap: 5px;
	padding: 20px;
	width: 80%;
	min-height: 72px;
	border-radius: 5px;
	background-color: var(--white);
	background: #ffffff;
	box-shadow: 0px 15px 20px -5px var(--shadow);
	border-radius: 5px;

	@media (max-width: 1000px) {
		display: flex;
	}
`;

export const Container = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	flex-wrap: wrap;
	gap: 0.75em;
	width: 75%;
`;

export const ContainerClear = styled(Container)`
	width: 20%;
	justify-content: flex-end;
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

export const Clear = styled.p`
	color: var(--desatDarkCyan);
	cursor: pointer;
`;
