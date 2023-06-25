'use client';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Navigation: React.FC = () => {
	const navigation = [
		{ name: 'Home', href: '' },
		{ name: 'About', href: 'about' },
		{ name: 'Experience', href: 'experience' },
		{ name: 'Projects', href: 'project' },
		{ name: 'Contact', href: 'contact' },
	];
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	const close = () => setIsOpen(false);

	return (
		// <header ref={ref}>
		// 	<div
		// 		className={`fixed inset-x-0 top-0 z-50 backdrop-blur bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 duration-200 border-b  ${
		// 			isIntersecting ? 'bg-zinc-900/0 border-transparent' : 'bg-zinc-900/500  border-zinc-800 '
		// 		}`}>
		// 		<div className='container flex flex-row-reverse text-vercel-pink items-center justify-between p-6 mx-auto'>
		// 			<div className='flex justify-between gap-8'>
		// 				{navigation.map((i) => (
		// 					<NavItem key={i.href} item={{ link: i.href, name: i.name }} close={close} />
		// 				))}
		// 			</div>

		// 			<Link href='/' className='duration-200 text-zinc-300 hover:text-zinc-100'>
		// 				<ArrowLeft className='w-6 h-6 ' />
		// 			</Link>
		// 		</div>
		// 	</div>
		// </header>

		<div
			className={clsx(
				` fixed inset-x-0 top-0 z-50 w-full backdrop-blur bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 duration-200 border-b`,
				{
					'bg-zinc-900/0 border-transparent': isIntersecting,
					'bg-zinc-900/500  border-zinc-800 ': !isIntersecting,
				}
			)}>
			<div className='container mx-auto flex flex-col lg:flex-row justify-between lg:flex-row relative'>
				<div className='flex h-14 items-center py-4 px-4 lg:h-auto'>
					<Link href='/' className='duration-200 text-zinc-300 hover:text-zinc-100' onClick={close}>
						<ArrowLeft className='w-6 h-6 ' />
					</Link>
				</div>

				<button
					type='button'
					className='group absolute top-0 right-0 flex h-14 items-center gap-x-2 px-4 lg:hidden'
					onClick={() => setIsOpen(!isOpen)}>
					<div className='font-medium text-gray-100 group-hover:text-gray-400'>
						<FontAwesomeIcon icon={'bars'} />
					</div>
				</button>

				<div
					className={clsx('overflow-y-auto lg:static lg:block', {
						'fixed inset-x-0 bottom-0 top-14 mt-px ': !isOpen,
						// hidden: !isOpen,
					})}>
					<nav className='space-y-3 lg:space-y-0 lg:space-x-5  px-2 py-2 lg:py-5 flex flex-col lg:flex-row'>
						{navigation.map((section) => {
							return (
								<div key={section.name} className='my-auto'>
									{/* <div className='mb-2 px-3 font-semibold uppercase tracking-wider text-pink-600 text-lg'>
									<div>{section.name}</div>
								</div> */}

									<div className='space-y-1 '>
										<NavItem key={section.href} item={{ link: section.href, name: section.name }} close={close} />
									</div>
								</div>
							);
						})}
					</nav>
				</div>
			</div>
		</div>
	);
};

interface Item {
	link: String;
	name: String;
}

interface NavItemProp {
	item: Item;
	close: () => false | void;
}
function NavItem({ item, close }: NavItemProp) {
	const segment = useSelectedLayoutSegment();
	const { link, name } = item;
	const isActive = link === segment;

	return (
		<Link
			onClick={close}
			href={`/${link}`}
			className={clsx('px-2 py-1 text-sm font-medium hover:text-blue-300 flex justify-center items-center', {
				'text-gray-400 ': !isActive,
				'text-white  ': isActive,
			})}
			// className='duration-200 text-zinc-400 hover:text-zinc-100'
		>
			{name}
		</Link>
	);
}
