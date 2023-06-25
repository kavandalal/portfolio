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
		description: ['<li>sdfsdfsd</li>', '<li>vcx gfgw werwerwe</li>', '<li>sdfe werwerqw qweqweqw ewqwe</li>'],
		location: 'Bengaluru, Karnataka, India',
		start: { date: '1', month: 'Sep', year: '2022' },
		end: 'current',
		workedWith: {
			lang: ['HTML', 'CSS', 'Javascript'],
			framework: ['React.js', 'EJS', 'Jqeury', 'Express.js', 'Bootstrap', 'MUI'],
			tool: ['Git', 'Jira'],
		},
	},
	{
		identitfier: 'staah',
		name: 'Staah',
		companyLogo: '/company/staah-logo.png',
		role: 'Front End Developer',
		description: [
			'<li>Started the implementation of optimizing the code to prevent unnecessary rendering of components with the help of <b>useCallback</b>,<b>useMemo</b>, <b>memo</b> which increased the performance by 40%.</li>',
			'<li>sdfe werwerqw qweqweqw ewqwe</li>',
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
		identitfier: 'staah',
		name: 'Staah',
		companyLogo: '/company/staah-logo.png',
		role: 'Front End Developer (Intern)',
		description: [
			'<li>Made all the report charts for straight forward interpretation with the help of <b>charts.js</b> in React.</li>',
			'<li>Helped in implementation of <b>useContext</b> hook in the project.</li>',
			'<li>Styling component with the help of <b>bootstrap</b> for better user experience.</li>',
			'<li>Making common components for code <b>reusability</b> and <b>scalability</b> in consideration.</li>',
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
