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
	end: Time | 'current';
	workedWith: Tech; // tech specification
}

export const experience: Experience[] = [
	{
		identitfier: 'samaaro',
		name: 'Samaaro',
		companyLogo: '/company/samaaro-logo.png',
		role: 'Product Engineer',
		link: 'https://www.samaaro.com/',
		description: [
			'A team member in a two-person development team who autonomously developed a new standalone product, taking responsibility for various aspects including UI development(React), database architecture(MongoDB), backend route, integrating third-party services, task automation, and creating reusable components and hooks.',
			'Led the development of 8 projects while gaining insights from their perspectives on different approaches taken during the tasks.',
			'Contributed to the automation of 10 modules on the demo platform.',
			'Integration of Microsoft Teams in MERN stack app',
			'Joined the hiring team after being with the company for 5 months.',
			'Worked with 3rd party software like Microsoft Power Automate, Google Cloud NLP, Google Cloud Vision AI, Facebook API, Twilio, Gupshup, Send Grid, etc.',
		],
		location: 'Bengaluru, Karnataka, India',
		start: { date: '1', month: 'Sep', year: '2022' },
		end: 'current',
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
		role: 'Front End Developer',
		description: [
			'Started the implementation of optimizing the code to prevent unnecessary rendering of components with the help of useCallback,useMemo, memo which increased the performance by 40%.',
			'Constant optimising and refinig of code',
			'Developed over 12 modules from start to end',
		],
		location: 'Surat, Gujarat, India',
		start: { date: '1', month: 'Jun', year: '2022' },
		end: { date: '24', month: 'Aug', year: '2022' },
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
		start: { date: '1', month: 'Dec', year: '2021' },
		end: { date: '31', month: 'May', year: '2022' },
		workedWith: {
			lang: ['HTML', 'CSS', 'Javascript'],
			framework: ['React.js', 'Chart.js', 'Bootstrap'],
			tool: ['Git'],
		},
	},
];
