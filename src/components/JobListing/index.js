import React from "react";
import moment from "moment";

import {
	Wrapper,
	MainWrap,
	Container,
	ContainerFTags,
	Profile,
	Details,
	NameTags,
	CompanyName,
	MainTag,
	JobRole,
	JobInfo,
	JobInfoList,
	FilterTag,
} from "./JobListing.styles";

export default function JobListing(props) {
	const timeAgo = moment(props.data.DatePosted).fromNow(true);
	const MainTags = props.data.MainTags.map((tag, index) => {
		let featuredTag = false;
		let newTag = false;
		if (tag.label === "featured") featuredTag = true;
		if (tag.label === "new") newTag = true;
		return (
			<MainTag key={index} featuredTag={featuredTag} newTag={newTag}>
				{tag.content}
			</MainTag>
		);
	});

	const FilterTags = props.data.FilterTags.map((tag, index) => {
		return <FilterTag key={index}>{tag}</FilterTag>;
	});

	return (
		<Wrapper>
			<MainWrap
				featuredTag={props.data.MainTags.some(
					(tag) => tag.label === "featured"
				)}
			>
				<Container>
					<Profile
						src={props.data.ProfilePic}
						alt="Company Profile"
					/>
					<Details>
						<NameTags>
							<CompanyName>{props.data.CompanyName}</CompanyName>
							{props.data.MainTags && MainTags}
						</NameTags>
						<JobRole>{props.data.JobRole}</JobRole>
						<JobInfoList>
							<JobInfo>{`${timeAgo} ago`}</JobInfo>
							<JobInfo>•</JobInfo>
							<JobInfo>{props.data.EmploymentType}</JobInfo>
							<JobInfo>•</JobInfo>
							<JobInfo>{props.data.Location}</JobInfo>
						</JobInfoList>
					</Details>
				</Container>
				<ContainerFTags>{FilterTags}</ContainerFTags>
			</MainWrap>
		</Wrapper>
	);
}
