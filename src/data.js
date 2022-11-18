import { nanoid } from "nanoid";

export const tags = [
	"CSS",
	"Django",
	"Frontend",
	"Fullstack",
	"HTML",
	"JavaScript",
	"Juniour",
	"Midweight",
	"Python",
	"React",
	"RoR",
	"Ruby",
	"Sass",
	"Seniour",
	"Vue",
];

export const JobListingsData = [
	{
		Id: nanoid(),
		ProfilePic:
			"https://raw.githubusercontent.com/aragakerubo/job-listings-with-filtering/develop/src/images/photosnap.svg",
		CompanyName: "Photosnap",
		MainTags: [
			{ label: "new", content: "new!" },
			{ label: "featured", content: "featured" },
		],
		JobRole: "Seniour Frontend Developer",
		DatePosted: 1670533200000,
		EmploymentType: "Full Time",
		Location: "USA only",
		FilterTags: ["Frontend", "Seniour", "HTML", "CSS", "JavaScript"],
	},
	{
		Id: nanoid(),
		ProfilePic:
			"https://raw.githubusercontent.com/aragakerubo/job-listings-with-filtering/develop/src/images/manage.svg",
		CompanyName: "Manage",
		MainTags: [
			{ label: "new", content: "new!" },
			{ label: "featured", content: "featured" },
		],
		JobRole: "Fullstack Developer",
		DatePosted: 1670533200000,
		EmploymentType: "Part Time",
		Location: "Remote",
		FilterTags: ["Fullstack", "Midweight", "Python", "React"],
	},
	{
		Id: nanoid(),
		ProfilePic:
			"https://raw.githubusercontent.com/aragakerubo/job-listings-with-filtering/develop/src/images/account.svg",
		CompanyName: "Account",
		MainTags: [{ label: "new", content: "new!" }],
		JobRole: "Juniour Frontend Developer",
		DatePosted: 1670533200000,
		EmploymentType: "Part Time",
		Location: "USA only",
		FilterTags: ["Frontend", "Juniour", "React", "Sass", "JavaScript"],
	},
	{
		Id: nanoid(),
		ProfilePic:
			"https://raw.githubusercontent.com/aragakerubo/job-listings-with-filtering/develop/src/images/myhome.svg",
		CompanyName: "MyHome",
		MainTags: [],
		JobRole: "Juniour Frontend Developer",
		DatePosted: 1670533200000,
		EmploymentType: "Contract",
		Location: "USA only",
		FilterTags: ["Frontend", "Juniour", "CSS", "JavaScript"],
	},
	{
		Id: nanoid(),
		ProfilePic:
			"https://raw.githubusercontent.com/aragakerubo/job-listings-with-filtering/develop/src/images/loop-studios.svg",
		CompanyName: "Loop Studios",
		MainTags: [],
		JobRole: "Software Engineer",
		DatePosted: 1670533200000,
		EmploymentType: "Full Time",
		Location: "Worldwide",
		FilterTags: ["Fullstack", "Midweight", "JavaScript", "Sass", "Ruby"],
	},
	{
		Id: nanoid(),
		ProfilePic:
			"https://raw.githubusercontent.com/aragakerubo/job-listings-with-filtering/develop/src/images/faceit.svg",
		CompanyName: "FaceIt",
		MainTags: [],
		JobRole: "Juniour Backend Developer",
		DatePosted: 1670533200000,
		EmploymentType: "Full Time",
		Location: "UK only",
		FilterTags: ["Backend", "Juniour", "Ruby", "RoR"],
	},
	{
		Id: nanoid(),
		ProfilePic:
			"https://raw.githubusercontent.com/aragakerubo/job-listings-with-filtering/develop/src/images/shortly.svg",
		CompanyName: "Shortly",
		MainTags: [],
		JobRole: "Juniour Developer",
		DatePosted: 1670533200000,
		EmploymentType: "Full Time",
		Location: "Worldwide",
		FilterTags: ["Frontend", "Juniour", "HTML", "Sass", "JavaScript"],
	},
	{
		Id: nanoid(),
		ProfilePic:
			"https://raw.githubusercontent.com/aragakerubo/job-listings-with-filtering/develop/src/images/insure.svg",
		CompanyName: "Insure",
		MainTags: [],
		JobRole: "Juniour Frontend Developer",
		DatePosted: 1670533200000,
		EmploymentType: "Full Time",
		Location: "USA only",
		FilterTags: ["Frontend", "Juniour", "Vue", "JavaScript", "Sass"],
	},
	{
		Id: nanoid(),
		ProfilePic:
			"https://raw.githubusercontent.com/aragakerubo/job-listings-with-filtering/develop/src/images/eyecam-co.svg",
		CompanyName: "Eyecam Co.",
		MainTags: [],
		JobRole: "Full Stack Engineer",
		DatePosted: 1670533200000,
		EmploymentType: "Full Time",
		Location: "Worldwide",
		FilterTags: [
			"Fullstack",
			"Midweight",
			"JavaScript",
			"Django",
			"Python",
		],
	},
	{
		Id: nanoid(),
		ProfilePic:
			"https://raw.githubusercontent.com/aragakerubo/job-listings-with-filtering/develop/src/images/the-air-filter-company.svg",
		CompanyName: "The Air Filter Company",
		MainTags: [],
		JobRole: "Front-end Dev",
		DatePosted: 1670533200000,
		EmploymentType: "Part Time",
		Location: "Worldwide",
		FilterTags: ["Frontend", "Juniour", "React", "Sass", "JavaScript"],
	},
];
