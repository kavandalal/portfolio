'use client';
import Particles from '@/ui/particles';
import { techStack, TechStack } from '@/lib/techStack';
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import useResponsive from '@/util/responsive';

export default function Page() {
	const lgDown = useResponsive({ resolution: 'lg', from: 'down' });

	return (
		<section>
			<Particles className='absolute inset-0 -z-10 animate-fade-in' quantity={150} />
			<div className='grid gap-24 container' style={{ gridTemplateRows: 'auto auto' }}>
				<div className='grid gap-5' style={{ gridTemplateColumns: lgDown ? '1fr' : '1fr 2fr' }}>
					<PhotoSection />
					<DescSection />
				</div>
				<TechSection />
			</div>
		</section>
	);
}

const PhotoSection = () => {
	const imageSize = 400;
	const [colors, setColors] = useState({ color1: '#2edfe9', color2: '#a54bf2' });

	const toggleColor = useCallback(() => {
		const color1 = getRandomColor();
		const color2 = getRandomColor();
		setColors({ color1, color2 });
	}, []);

	useEffect(() => {
		// toggleColor();
	}, [toggleColor]);

	function getRandomColor() {
		// Generate random values for red, green, and blue components
		const r = Math.floor(Math.random() * 256);
		const g = Math.floor(Math.random() * 256);
		const b = Math.floor(Math.random() * 256);

		// Convert the RGB values to a hexadecimal format
		const hexColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b
			.toString(16)
			.padStart(2, '0')}`;

		return hexColor;
	}

	return (
		<div className='mx-auto'>
			<div
				className={`w-[${imageSize * 2}px] h-[${imageSize}px] overflow-hidden rounded-full border-2  `}
				style={{
					// backgroundImage: `radial-gradient(${colors.color1} 30%, ${colors.color2})`,
					backgroundImage: `linear-gradient(45deg, ${colors.color1}, ${colors.color2} 30%, ${colors.color1})`,
				}}>
				<Image src={'/avatar/kavan.png'} alt='Profile' className='obje' width={imageSize} height={imageSize} />
			</div>
			<div className='text-center text-3xl mt-5 font-bold'>Kavan Dalal</div>
		</div>
	);
};

const DescSection = () => {
	return (
		<div className='mx-auto h-full flex justify-center items-center text-lg flex-col gap-5'>
			<div>
				Hello there! I&#39;m Kavan Dalal, a code maestro who&#39;s been known to turn tea into functional software. My
				arsenal includes JavaScript and TypeScript - because let&#39;s face it, they&#39;re practically the real
				superheroes of the tech world. React.js, Next.js, and Express.js are like my sidekicks, helping me craft web
				magic that leaves users spellbound. I&#39;ve dabbled in a bit of jQuery, but who needs it when you can summon
				React components like magic spells? And yes, I&#39;m the proud owner of a shadcn-ui secret decoder ring –
				kidding, but my skills extend to Python as well. When I&#39;m not weaving code, I&#39;m dealing with Git, Jira,
				and the bunch.
			</div>
			<div>
				My virtual doorstep is always open for collaboration, chit-chat, or a good ol&#39; debate on whether JavaScript
				is a dessert or a superpower. Let&#39;s connect on{' '}
				<b>
					<a href='https://github.com/kavandalal'>GitHub</a>
				</b>{' '}
				or at{' '}
				<b>
					<a href='mailto:kavandalal.work@gmail.com'>kavandalal.work@gmail.com</a>
				</b>
				.
			</div>
		</div>
	);
};

const TechSection = () => {
	const makeIcon = useMemo(() => {
		return (params: { name: string; id: string }) => {
			const { name, id } = params;
			return `https://img.shields.io/badge/-${name}-333.svg?style=for-the-badge&logo=${id}`;
		};
	}, []);

	return (
		<div className='mx-auto container'>
			<div className='text-center text-2xl'> Tech-Stack I have worked with</div>
			<div className='mt-5'>
				{techStack.map((item) => (
					<div key={item.title} className='mb-4 text-center md:text-start'>
						<b>{item.title}</b>
						<div className='flex mt-2 flex-wrap'>
							{item.value.map((element) => (
								<span key={element.id} className='me-2 mb-2'>
									<img src={makeIcon({ name: element.name, id: element.id })} alt='' style={{ height: '35px' }} />
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
