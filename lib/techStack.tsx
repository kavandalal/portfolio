export type TechStack = {
	title: string;
	value: {
		name: string;
		id: string;
		icon?: string;
	}[];
};

export const techStack: TechStack[] = [
	{
		title: 'Languages',
		value: [
			{ name: 'Javascript', icon: '', id: 'javascript' },
			{ name: 'Typescript', icon: '', id: 'typescript' },
			{ name: 'Python', icon: '', id: 'python' },
		],
	},

	{
		title: 'Framework',
		value: [
			{ name: 'Node.js', icon: '', id: 'node.js' },
			{ name: 'React.js', icon: '', id: 'react' },
			{ name: 'Next.js', icon: '', id: 'next.js' },
			{ name: 'Express.js', icon: '', id: 'express' },
			{ name: 'EJS', icon: '', id: 'ejs' },
			{ name: 'Jquery', icon: '', id: 'jquery' },
			{ name: 'Shadcn/ui', icon: '', id: 'shadcn' },
			{ name: 'Bootstrap', icon: '', id: 'bootstrap' },
			{ name: 'MUI (Material UI)', icon: '', id: 'mui' },
		],
	},

	{
		title: 'Project Management',
		value: [
			{ name: 'Git', icon: '', id: 'git' },
			{ name: 'Jira', icon: '', id: 'jira' },
		],
	},

	{
		title: 'Development Tools',
		value: [
			{ name: 'VScode', icon: '', id: 'visualstudiocode' },
			{ name: 'MobaXterm', icon: '', id: 'mobaxterm' },
			{ name: 'PM2 (Process Manager 2)', icon: '', id: 'pm2' },
			{ name: 'Postman', icon: '', id: 'postman' },
		],
	},

	{
		title: 'Cloud Service',
		value: [
			{ name: 'AWS S3', icon: '', id: 's3' },
			{ name: 'Cloudinary', icon: '', id: 'cloudinary' },
			{ name: 'Firebase', icon: '', id: 'firebase' },
			{ name: 'Vercel', icon: '', id: 'vercel' },
			{ name: 'Heroku', icon: '', id: 'heroku' },
		],
	},

	{
		title: 'Database',
		value: [
			{ name: 'MongoDB', icon: '', id: 'mongodb' },
			{ name: 'PostgreSQL', icon: '', id: 'postgresql' },
			{ name: 'MySQL', icon: '', id: 'mysql' },
		],
	},
];
