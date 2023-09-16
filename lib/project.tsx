export interface Project {
	identitfier: String;
	title: String;
	description: String[];
	techStack: String[];
	thumbnail?: String;
	github: String;
	live?: String;
}

export const project: Project[] = [
	{
		identitfier: 'modules-next',
		title: 'Modules',
		description: [
			'This is a project which will have all the useful tools which can be used in the futurre project in plug-n-play fashion',
			'App is deployed in Vercel.',
		],
		techStack: ['Next.js', 'Tailwind'],
		github: 'https://github.com/kavandalal/modules-next',
		live: 'https://modules-next.vercel.app/',
	},

	{
		identitfier: 'twitter-clone',
		title: 'Twitter Clone',

		description: [
			'This app has functionalities like User Auth with Discord, Zod validation, Create/Delete Tweet, List of tweets according to time or following, like tweets, follow other users, profile page of users, infinite list of tweets fetched according to context cursor.',
			'App is deployed in Vercel.',
		],
		techStack: ['Next.js', 'tRPC', 'PrismaORM', 'MySQL', 'Next Auth', 'Tailwind'],
		github: 'https://github.com/kavandalal/twitter-clone',
		live: 'https://twitter-clone-kd.vercel.app/',
	},

	{
		identitfier: 'next-app-folder',
		title: 'Next.js v13 app folder',
		description: [
			'This is a project in which I was able to understand all the updates that were introducted and updaetd in stable Next.js v13.4',
			'App is deployed in Vercel.',
		],
		techStack: ['Next.js', 'Tailwind'],
		github: 'https://github.com/kavandalal/modules-next',
		live: 'https://next-app-folder.vercel.app/',
	},

	{
		identitfier: 'e-commerce-mern',
		title: 'E-Commerce Website',
		description: [
			'Features include Private Routes for admin, User can add, edit, update their product, User can filter the products by price, category, color, etc , All the data of users, products, products bought, inventory can be seen by the admin in the form of charts for simpler understanding.',
			'Images are stored in cloudinary',
			'App is deployed in Heroku.',
		],
		techStack: ['Node.js', 'React.js', 'Express.js', 'MongoDB', 'MUI'],
		github: 'https://github.com/kavandalal/modules-next',
		live: 'https://shopping-jugad.herokuapp.com/',
	},

	// {
	// 	identitfier: 'dsa',
	// 	title: 'DSA - Python',
	// 	description: ['Project just to keep all the dsa question that I have solved'],
	// 	techStack: ['Python'],
	// 	github: 'https://github.com/kavandalal/dsa',
	// 	live: '',
	// },

	{
		identitfier: 'chartjs-react',
		title: 'Chart.js',
		description: [
			'Used static timeseries data to answer some of the question according to data',
			'Filtering according to the time',
		],
		techStack: ['React.js', 'Chart.js'],
		github: 'https://github.com/kavandalal/chartjs-react',
		live: 'https://kavandalal.github.io/chartjs-react/',
	},

	{
		identitfier: '2d-game',
		title: 'Twitter Clone',
		description: ['Just the basic layout of 2D game like pokemon, with boundaries and walkling animation'],
		techStack: ['HTML', 'CSS', 'JS'],
		github: 'https://github.com/kavandalal/2d-game',
		live: 'https://kavandalal.github.io/2d-game/',
	},
];
