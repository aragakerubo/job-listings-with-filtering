import styled from "styled-components";

export const Wrapper = styled.div`
	position: relative;
	width: 80%;
	max-width: 1110px;
	min-height: 155px;
	background: var(--white);
	box-shadow: 0px 15px 20px -5px var(--shadow);
	border-radius: 5px;
`;

export const MainWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 2em;
	width: 100%;
	min-height: 155px;
	border-radius: 5px;

	border-left: ${(props) =>
		props.featuredTag ? "5px solid var(--desatDarkCyan)" : "none"};
	padding: ${(props) =>
		props.featuredTag ? "30px 40px 30px 35px" : "30px 40px"};

	@media (max-width: 1000px) {
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}

	@media (max-width: 760px) {
		padding: ${(props) =>
			props.featuredTag ? "50px 25px 25px 20px" : "50px 25px 25px 25px"};
	}
`;

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1.5em;

	@media (max-width: 1000px) {
		padding-bottom: 1em;
		border-bottom: 0.5px solid var(--darkGCyan);
	}
`;

export const ContainerFTags = styled(Container)`
	justify-content: flex-end;
	gap: 16px;
	flex-wrap: wrap;
	border: none;
	padding: 0;

	@media (max-width: 760px) {
		justify-content: flex-start;
	}
`;

export const Profile = styled.img`
	width: 90px;
	height: 90px;
	border-radius: 50%;

	@media (max-width: 760px) {
		position: absolute;
		width: 60px;
		height: 60px;
		top: -30px;
	}
`;

export const Details = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	gap: 8px;
`;

export const NameTags = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1em;
`;

export const CompanyName = styled.h4`
	color: var(--desatDarkCyan);
	font-weight: 700;
	font-size: 18px;
	line-height: 17px;

	@media (max-width: 760px) {
		font-size: 13px;
		line-height: 12px;
	}
`;

export const MainTagsList = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5em;
`;

export const MainTag = styled.span`
	background: ${(props) => {
		if (props.featuredTag) {
			return "var(--veryDarkGCyan)";
		} else if (props.newTag) {
			return "var(--desatDarkCyan)";
		}
	}};
	color: var(--white);
	border-radius: 12px;
	text-transform: uppercase;
	height: 24px;
	font-size: 14px;
	line-height: 14px;
	padding: 7px 9px 3px 9px;
	font-weight: 700;
	vertical-align: middle;
	text-align: center;

	@media (max-width: 760px) {
		font-size: 12px;
	}
`;

export const JobRole = styled.h2`
	color: var(--veryDarkGCyan);
	font-weight: 700;
	font-size: 22px;
	line-height: 24px;
	margin: 0;
	cursor: pointer;

	&:hover {
		color: var(--desatDarkCyan);
	}

	@media (max-width: 760px) {
		font-size: 17px;
	}
`;

export const JobInfo = styled.p`
	color: var(--darkGCyan);
	font-weight: 500;
	font-size: 18px;
	line-height: 24px;
	letter-spacing: -0.138462px;
`;

export const JobInfoList = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 10px;
	flex-wrap: wrap;
`;

export const FilterTag = styled.p`
	padding: 10px;
	border-radius: 4px;
	text-align: center;
	height: 100%;
	color: var(--desatDarkCyan);
	background-color: var(--lightGCyanFTs);
	cursor: pointer;

	&:hover {
		color: var(--white);
		background-color: var(--desatDarkCyan);
	}
`;
