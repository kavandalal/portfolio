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
		identitfier: 'tanish',
		title: 'Tanish (Wedding App)',
		description: [
			'Created an application which is a social media for the specific wedding with different event (i.e. Marriage, Reception, Sangeet, etc).',
			'This application has different protected routes and different role-based authentication.',
			"It also has different features like Upload Post according to event with caption, Like post, View other's profile, Filter Post according to events, Events Timeline Graph, Explore page with the Top Liked Post, etc.",
			'Bought the domain from Hostinger, created an EC2 instance, S3 Bucket in AWS and used MongoDB, used PM2 to manage the server.',
			'This app is made in Next.js 13.4v',
		],
		techStack: ['Next.js', 'MongoDB', 'AWS EC2', 'AWS S3', 'Tailwind', 'PM2', 'Hostinger'],
		github: 'https://github.com/kavandalal/tanish',
		live: 'https://thetanishwedding.in/',
	},
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
		title: '2D Game',
		description: ['Just the basic layout of 2D game like pokemon, with boundaries and walkling animation'],
		techStack: ['HTML', 'CSS', 'JS'],
		github: 'https://github.com/kavandalal/2d-game',
		live: 'https://kavandalal.github.io/2d-game/',
	},
];
