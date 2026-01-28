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
			{ name: 'JavaScript', icon: '', id: 'javascript' },
			{ name: 'TypeScript', icon: '', id: 'typescript' },
			{ name: 'Python', icon: '', id: 'python' },
		],
	},

	{
		title: 'Frontend',
		value: [
			{ name: 'React.js', icon: '', id: 'react' },
			{ name: 'Next.js', icon: '', id: 'nextdotjs' },
			{ name: 'HTML5', icon: '', id: 'html5' },
			{ name: 'CSS3', icon: '', id: 'css3' },
			{ name: 'shadcn/ui', icon: '', id: 'shadcnui' },
			{ name: 'Material UI', icon: '', id: 'mui' },
			{ name: 'Bootstrap', icon: '', id: 'bootstrap' },
			{ name: 'jQuery', icon: '', id: 'jquery' },
			{ name: 'Chart.js', icon: '', id: 'chartdotjs' },
			{ name: 'Shopify Liquid', icon: '', id: 'shopify' },
		],
	},

	{
		title: 'Backend',
		value: [
			{ name: 'Node.js', icon: '', id: 'nodedotjs' },
			{ name: 'Express.js', icon: '', id: 'express' },
			{ name: 'FastAPI', icon: '', id: 'fastapi' },
			{ name: 'REST APIs', icon: '', id: 'postman' },
			{ name: 'WebSockets', icon: '', id: 'socketdotio' },
		],
	},

	{
		title: 'Databases & Caching',
		value: [
			{ name: 'MongoDB', icon: '', id: 'mongodb' },
			{ name: 'PostgreSQL', icon: '', id: 'postgresql' },
			{ name: 'MySQL', icon: '', id: 'mysql' },
			{ name: 'Redis', icon: '', id: 'redis' },
			{ name: 'Elasticsearch', icon: '', id: 'elasticsearch' },
		],
	},

	{
		title: 'Cloud & DevOps',
		value: [
			{ name: 'Google Cloud Platform', icon: '', id: 'googlecloud' },
			{ name: 'AWS EC2', icon: '', id: 'amazonec2' },
			{ name: 'AWS S3', icon: '', id: 'amazons3' },
			{ name: 'Firebase', icon: '', id: 'firebase' },
			{ name: 'Vercel', icon: '', id: 'vercel' },
			{ name: 'Docker', icon: '', id: 'docker' },
			{ name: 'PM2', icon: '', id: 'pm2' },
		],
	},

	{
		title: 'Tools & Collaboration',
		value: [
			{ name: 'Git', icon: '', id: 'git' },
			{ name: 'GitHub', icon: '', id: 'github' },
			{ name: 'Jira', icon: '', id: 'jira' },
			{ name: 'Postman', icon: '', id: 'postman' },
			{ name: 'VS Code', icon: '', id: 'vscode' },
			{ name: 'MobaXterm', icon: '', id: 'mobaxterm' },
			{ name: 'Slack', icon: '', id: 'slack' },
		],
	},

	{
		title: 'Platforms & Integrations',
		value: [
			{ name: 'Shopify Apps', icon: '', id: 'shopify' },
			{ name: 'Twilio', icon: '', id: 'twilio' },
			{ name: 'SendGrid', icon: '', id: 'sendgrid' },
			{ name: 'Gupshup', icon: '', id: 'whatsapp' },
			{ name: 'WhatsApp Business API', icon: '', id: 'whatsapp' },
			{ name: 'Microsoft Teams', icon: '', id: 'microsoftteams' },
			{ name: 'Google Cloud NLP', icon: '', id: 'googlecloud' },
			{ name: 'Google Cloud Vision AI', icon: '', id: 'googlecloud' },
		],
	},
];
