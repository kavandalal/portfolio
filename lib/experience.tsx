type Tech = {
	lang: string[];
	framework: string[];
	tool: string[];
};
type Time = {
	date?: string | number;
	month?: string | number;
	year?: string | number;
};

export interface Experience {
	identitfier: string;
	name: string;
	companyLogo: string;
	link: string;
	role: string;
	description: string[];
	location?: string;
	start: Time;
	end: Time | 'Current';
	workedWith: Tech; // tech specification
}
const months = {
	1: { label: 'Jan' },
	2: { label: 'Feb' },
	3: { label: 'Mar' },
	4: { label: 'Apr' },
	5: { label: 'May' },
	6: { label: 'June' },
	7: { label: 'July' },
	8: { label: 'Aug' },
	9: { label: 'Sept' },
	10: { label: 'Oct' },
	11: { label: 'Nov' },
	12: { label: 'Dec' },
};

export const experience: Experience[] = [
	{
		identitfier: 'bik',
		name: 'Bik.ai',
		companyLogo: '/company/bik-logo.jpeg',
		role: 'Sofwtare Engineer 2 🚀',
		link: 'https://bik.ai/',
		description: [
			'Implemented conversation training pipelines for chatbots using historical support ticket conversations to improve response quality',
			'Developed end-to-end Voice of Customer (VoC) analytics, transforming customer interactions into actionable insights',
		],
		location: 'Bengaluru, Karnataka, India',
		start: { date: '01', month: months['10'].label, year: '2025' },
		end: 'Current',
		workedWith: {
			lang: ['HTML', 'CSS', 'Typescript', 'Python'],
			framework: ['Next.js', 'FastApi', 'Typescipt', 'Shopify Liquid'],
			tool: ['Git', 'Jira', 'Redis', 'Firebase', 'GCP', 'Docker', 'Shopify App'],
		},
	},
	{
		identitfier: 'bik',
		name: 'Bik.ai',
		companyLogo: '/company/bik-logo.jpeg',
		role: 'Software Engineer',
		link: 'https://bik.ai/',
		description: [
			'Improved application performance by reducing frontend bundle size by 57%.',
			'Designed and built a real-time Live Chat system integrating CRM, Chatbot, and backend APIs, supporting image-based inputs.',
			'Restructured Code for real-time WebSocket streaming between backend systems and frontend clients.',
			'Developed and deployed an On-call Slack Bot, integrating with internal services to automate incident workflows.',
			'Took production on-call ownership within 3 months, ensuring system reliability and faster incident resolution.',
			'Led an end-to-end frontend revamp of 8 entry-point widgets with optimizing backend services.',
		],
		location: 'Bengaluru, Karnataka, India',
		start: { date: '10', month: months['6'].label, year: '2024' },
		end: { date: '30', month: months['9'].label, year: '2025' },
		workedWith: {
			lang: ['HTML', 'CSS', 'Typescript', 'Python'],
			framework: ['Next.js', 'FastApi', 'Typescipt', 'Shopify Liquid'],
			tool: ['Git', 'Jira', 'Redis', 'Firebase', 'GCP', 'Docker', 'Shopify App'],
		},
	},
	{
		identitfier: 'samaaro',
		name: 'Samaaro',
		companyLogo: '/company/samaaro-logo.png',
		role: 'Product Engineer',
		link: 'https://www.samaaro.com/',
		description: [
			'A team member in a two-person development team who autonomously developed a new standalone product, taking responsibility for various aspects including UI development (React, Jquery, EJS), database architecture(MongoDB), backend API (Node, Express), integrating third-party services, task automation, and creating reusable components and hooks.',
			'Led the development of 8 projects while gaining insights from colleauge about their perspectives on different approaches taken during the tasks.',
			'Contributed to the automation of 10 modules on the demo platform.',
			'Integration of Microsoft Teams in MERN stack app',
			'Joined the hiring team after being with the company for 5 months.',
			'Worked with 3rd party software like Microsoft Power Automate, Google Cloud NLP, Google Cloud Vision AI, Facebook Whatsapp API, Twilio, Gupshup, Send Grid, etc.',
		],
		location: 'Bengaluru, Karnataka, India',
		start: { date: '1', month: months['9'].label, year: '2022' },
		end: { date: '7', month: months['6'].label, year: '2024' },
		workedWith: {
			lang: ['HTML', 'CSS', 'Javascript'],
			framework: ['React.js', 'EJS', 'Jquery', 'Express.js', 'Bootstrap', 'MUI'],
			tool: ['Git', 'Jira'],
		},
	},
	{
		identitfier: 'staah',
		name: 'Staah',
		companyLogo: '/company/staah-logo.png',
		link: 'https://www.staah.com/',
		role: 'Front End Developer 🚀',
		description: [
			'Started the implementation of optimizing the code to prevent unnecessary rendering of components with the help of useCallback,useMemo, memo which increased the performance by 40%.',
			'Constant optimising and refinig of code',
			'Developed over 12 modules from start to end',
		],
		location: 'Surat, Gujarat, India',
		start: { date: '1', month: months['6'].label, year: '2022' },
		end: { date: '24', month: months['8'].label, year: '2022' },
		workedWith: {
			lang: ['HTML', 'CSS', 'Javascript'],
			framework: ['React.js', 'Chart.js', 'Bootstrap'],
			tool: ['Git'],
		},
	},
	{
		identitfier: 'staah-intern',
		name: 'Staah',
		companyLogo: '/company/staah-logo.png',
		link: 'https://www.staah.com/',
		role: 'Front End Developer (Intern)',
		description: [
			'Made all the report charts for straight forward interpretation with the help of charts.js in React.',
			'Helped in implementation of useContext hook in the project.',
			'Styling component with the help of bootstrap for better user experience.',
			'Making common components for code reusability and scalability in consideration.',
		],
		location: 'Surat, Gujarat, India',
		start: { date: '1', month: months['12'].label, year: '2021' },
		end: { date: '31', month: months['5'].label, year: '2022' },
		workedWith: {
			lang: ['HTML', 'CSS', 'Javascript'],
			framework: ['React.js', 'Chart.js', 'Bootstrap'],
			tool: ['Git'],
		},
	},
];
