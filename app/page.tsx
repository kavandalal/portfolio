'use client';
import Image from 'next/image';
import Link from 'next/link';
import Particles from '../ui/particles';
import { motion } from 'framer-motion';
import LineDrawingAnimation from '@/util/letter-animation';

const navigation = [
	{ name: 'About', href: '/about' },
	{ name: 'Experience', href: '/experience' },
	{ name: 'Projects', href: '/project' },
	{ name: 'Contact', href: '/contact' },
];
const animationClass =
	'z-10 text-4xl text-transparent duration-1000  cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap mt-auto';

export default function Home() {
	return (
		<section className='flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl'>
			<nav className='my-16 animate-fade-in'>
				<ul className='flex items-center justify-center gap-4'>
					{navigation.map((item) => (
						<Link key={item.href} href={item.href} className='text-md duration-500 text-zinc-500 hover:text-zinc-300'>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className='hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
			{/* <Particles className='absolute inset-0 -z-10 animate-fade-in' quantity={100} /> */}
			{/* <h1 className='z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text font-extrabold	pointer-events-none	'>
				kavan
			</h1> */}
			<div className='animate-title'>
				<div className='flex mb-5'>
					<div className={animationClass}>
						<LineDrawingAnimation svgPath='/alphabet/K-letter.svg' />
					</div>
					<div className={animationClass}>
						<LineDrawingAnimation svgPath='/alphabet/a-letter.svg' />
					</div>
					<div className={animationClass}>
						<LineDrawingAnimation svgPath='/alphabet/v-letter.svg' />
					</div>
					<div className={animationClass}>
						<LineDrawingAnimation svgPath='/alphabet/a-letter.svg' />
					</div>
					<div className={animationClass}>
						<LineDrawingAnimation svgPath='/alphabet/n-letter.svg' />
					</div>
				</div>
				<div className='flex '>
					<div className={animationClass}>
						<LineDrawingAnimation svgPath='/alphabet/D-letter.svg' />
					</div>
					<div className={animationClass}>
						<LineDrawingAnimation svgPath='/alphabet/a-letter.svg' />
					</div>
					<div className={animationClass}>
						<LineDrawingAnimation svgPath='/alphabet/l-letter.svg' />
					</div>
					<div className={animationClass}>
						<LineDrawingAnimation svgPath='/alphabet/a-letter.svg' />
					</div>
					<div className={animationClass}>
						<LineDrawingAnimation svgPath='/alphabet/l-letter.svg' />
					</div>
				</div>
			</div>
			<div className='hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
			<div className='my-16 text-center animate-fade-in'>
				<h2 className='text-md text-zinc-500 '>
					Fullstack Developer <br />
					Currently working in{' '}
					<Link target='_blank' href='https://samaaro.com/' className='underline duration-500 hover:text-zinc-300'>
						Samaaro
					</Link>{' '}
					as a Product Engineer
				</h2>
			</div>
		</section>
	);
}
