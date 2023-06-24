'use client';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

export const Navigation: React.FC = () => {
	const navigation = [
		{ name: 'About', href: '/about' },
		{ name: 'Experience', href: '/experience' },
		{ name: 'Projects', href: '/project' },
		{ name: 'Contact', href: '/contact' },
	];
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 duration-200 border-b  ${
					isIntersecting ? 'bg-zinc-900/0 border-transparent' : 'bg-zinc-900/500  border-zinc-800 '
				}`}>
				<div className='container flex flex-row-reverse text-vercel-pink items-center justify-between p-6 mx-auto'>
					<div className='flex justify-between gap-8'>
						{navigation.map((i) => (
							<Link key={i?.href} href={i?.href} className='duration-200 text-zinc-400 hover:text-zinc-100'>
								{i?.name}
							</Link>
						))}
					</div>

					<Link href='/' className='duration-200 text-zinc-300 hover:text-zinc-100'>
						<ArrowLeft className='w-6 h-6 ' />
					</Link>
				</div>
			</div>
		</header>
	);
};
