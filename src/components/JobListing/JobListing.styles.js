import styled from "styled-components";

export const Wrapper = styled.div`
	width: 95%;
	max-width: 1110px;
	min-height: 155px;
	background: var(--white);
	box-shadow: 0px 15px 20px -5px var(--shadow);
	border-radius: 5px;
	overflow: hidden;
`;

export const MainWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	min-height: 155px;
	border-left: ${(props) =>
		props.featuredTag ? "5px solid var(--desatDarkCyan)" : "none"};
	padding: ${(props) =>
		props.featuredTag ? "30px 40px 30px 35px" : "30px 40px"};
`;

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1.5em;
`;

export const ContainerFTags = styled(Container)`
	gap: 16px;
`;

export const Profile = styled.img`
	width: 90px;
	height: 90px;
	border-radius: 50%;
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
	gap: 0.5em;
`;

export const CompanyName = styled.h4`
	color: var(--desatDarkCyan);
	font-weight: 700;
	font-size: 18px;
	line-height: 17px;
	margin: 0 0.5em 0 0;
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
	justify-content: center;
	align-items: center;
	gap: 14px;
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
