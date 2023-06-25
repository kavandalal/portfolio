'use client';
import { Github, Mail, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/ui/card';
import Box from '@/util/animate-box';
import Particles from '@/ui/particles';

const socials = [
	{
		icon: <Linkedin size={20} />,
		href: 'https://www.linkedin.com/in/kavan-dalal/',
		label: 'Linkedin',
		handle: 'Kavan Dalal',
		initial: { x: 200, y: 200 },
	},
	{
		icon: <Github size={20} />,
		href: 'https://github.com/kavandalal',
		label: 'Github',
		handle: 'kavandalal',
		initial: { y: 200 },
	},
	{
		icon: <Mail size={20} />,
		href: 'mailto:kavandalal.work@gmail.com',
		label: 'Email (Google)',
		handle: 'kavandalal.work',
		initial: { x: -200, y: 200 },
	},
];

export default function Page() {
	return (
		<section className=''>
			<Particles className='absolute inset-0 -z-10 animate-fade-in' quantity={100} />
			<div className='grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16'>
				{socials.map((s) => (
					<Box initial={s.initial} delay={0.3} ease={'easeIn'} key={s.href}>
						<Card>
							<Link
								href={s.href}
								target='_blank'
								className='p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-18  lg:pb-24 sm:p-8 md:p-16 bg-gradient-to-tl from-zinc-900/10 via-zinc-400/10 to-zinc-900/10 h-full'>
								<span
									className='absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent'
									aria-hidden='true'
								/>
								<span className='relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange'>
									{s.icon}
								</span>{' '}
								<div className='z-10 flex flex-col items-center text-center'>
									<span className='text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display'>
										{s.handle}
									</span>
									<span className='mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200'>
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					</Box>
				))}
			</div>
		</section>
	);
}
