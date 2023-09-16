// import './globals.css';
// import Particles from '../ui/particles';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: {
		default: 'Kavan Dalal',
		template: '%s | Kavan Dalal',
	},
	description: 'Portfolio of Kavan Dalal',
	authors: [ { name : 'Kavan Dalal' , url : 'https://www.linkedin.com/in/kavan-dalal/'} ],
	openGraph: {
		title: 'Kavan Dalal Portfolio',
		description: 'The React Framework for the Web',
		url: 'https://portfolio-kavan.vercel.app/',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Roboto&display=swap'
					rel='stylesheet'
				/>
			</head>

			<body className='bg-black overflow-x-hidden'>
				{/* <div className=' from-black via-zinc-600/20 to-black text-white'>
					<Particles className='absolute inset-0 -z-10 animate-fade-in' quantity={100} /> */}
				{children}
				{/* </div> */}
			</body>
		</html>
	);
}
