'use client';
import Particles from '@/ui/particles';
import { experience, Experience } from '@/lib/experience';
import { Component, Building, User2, CalendarDays, MapPin, Cpu, ListChecks } from 'lucide-react';
import { Card } from '@/ui/card';
import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';
import Box from '@/util/animate-box';
import useResponsive from '@/util/responsive';

export default function Page() {
	const lgDown = useResponsive({ resolution: 'lg', from: 'down' });

	if (lgDown !== null)
		return (
			<section className='w-full h-full'>
				<Particles className='absolute inset-0 -z-10 animate-fade-in' quantity={200} />
				<div className='container relative w-full space-y-16 lg:space-y-32 mb-12 lg:mb-28 text-base lg:text-lg'>
					{/* <span
					className='absolute w-px h-full left-[50%] right-[50%] bg-gradient-to-b from-zinc-500 via-zinc-500/80 to-transparent'
					aria-hidden='true'
				/> */}
					{experience.map((exp, index) => (
						<ExpComponent key={exp.identitfier} item={exp} index={index} lgDown={lgDown} />
					))}
				</div>
			</section>
		);
}

type HTMLProps = {
	__html: string;
};

interface ExpComponent {
	item: Experience;
	index: number;
	lgDown: Boolean;
}

const ExpComponent = (props: ExpComponent) => {
	const { item, index, lgDown } = props;
	const evenElement = index % 2 !== 0;

	if (lgDown !== null)
		return (
			<div
				className={clsx('flex w-full flex-col lg:flex-row', {
					'lg:flex-row-reverse': evenElement,
				})}>
				<div className={'flex-grow w-full lg:w-2/5 flex items-center'}>
					<Box
						initial={{ x: lgDown ? 0 : evenElement ? -200 : 200, y: lgDown ? 200 : 0 }}
						delay={0.3}
						customClass='h-full w-full lg:w-full flex flex-row lg:flex-col gap-4'>
						<div className='w-1/3 lg:w-full'>
							<Link target='_blank' href={item.link}>
								<div className='rounded h-full lg:h-64 w-full '>
									<Card>
										<Image
											src={item.companyLogo}
											alt=''
											width={600}
											height={600}
											className='object-contain w-full h-full p-1 md:p-2 lg:p-4'
										/>
									</Card>
								</div>
							</Link>
						</div>

						<div className='w-2/3 lg:w-full flex flex-wrap gap-4'>
							<div className='w-full'>
								<SingleRowData icon={<Building />} index={index}>
									<Link target='_blank' href={item.link}>
										{item.name}
									</Link>
								</SingleRowData>
							</div>
							<div className='w-full'>
								<SingleRowData icon={<User2 />} index={index}>
									{item.role}
								</SingleRowData>
							</div>

							<div className='w-full'>
								<SingleRowData icon={<CalendarDays />} index={index}>
									{item.start.month} {item.start.year}
									&nbsp;-&nbsp;
									{item.end === 'current' ? item.end : `${item.end.month} ${item.end.year}`}
								</SingleRowData>
							</div>
							<div className='w-full'>
								<SingleRowData icon={<MapPin />} index={index}>
									{item.location}
								</SingleRowData>
							</div>
						</div>
					</Box>
				</div>

				<div className='hidden lg:visible w-10 relative lg:flex justify-center items-center '>
					<span
						className='absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-zinc-500  to-zinc-500/20'
						aria-hidden='true'
					/>
					<Component className=' text-white rounded m-2' />
				</div>

				<div className={'flex-grow mt-4 lg:mt-0 lg:w-3/5 lg:px-8 '}>
					<Box
						initial={{ x: lgDown ? 0 : evenElement ? 200 : -200, y: lgDown ? 200 : 0 }}
						delay={0.3}
						customClass='space-y-4 lg:space-y-4'>
						<SingleRowData index={index} icon={<ListChecks />} noReverse>
							<h4>Tasks</h4>
							<ul className='text-sm lg:text-base text-gray-200/60 '>
								{item?.description?.map((html, index) => (
									<li
										className='text-justify mb-3'
										key={index}
										dangerouslySetInnerHTML={{ __html: html } as HTMLProps}
									/>
								))}
							</ul>
						</SingleRowData>

						<SingleRowData icon={<Cpu />} index={index} noReverse>
							<div className='space-y-3'>
								<h4>Tech</h4>
								<div>
									<div>Language Used</div>
									<div className={clsx('flex flex-wrap space-x-2 ')}>
										{item.workedWith?.lang?.map((i, index2) => (
											<Hashtag text={i} key={index2} />
										))}
									</div>
								</div>

								<div>
									<div>Farmework Used </div>
									<div className={clsx('flex flex-wrap space-x-2 ')}>
										{item.workedWith?.framework?.map((i, index2) => (
											<Hashtag text={i} key={index2} />
										))}
									</div>
								</div>
								<div>
									<div>Tools Used</div>
									<div className={clsx('flex flex-wrap space-x-2 ')}>
										{item.workedWith?.tool?.map((i, index2) => (
											<Hashtag text={i} key={index2} />
										))}
									</div>
								</div>
							</div>
						</SingleRowData>
					</Box>
				</div>

				<div className='visible lg:hidden w-full mt-8 text-vercel-red relative '>
					<span
						className='absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-zinc-500  to-zinc-500/10'
						aria-hidden='true'
					/>
				</div>
			</div>
		);
};

interface SingleRowData {
	children: React.ReactNode;
	icon?: JSX.Element;
	index: number;
	noReverse?: Boolean;
}
const SingleRowData = ({ children, icon, index, noReverse = false }: SingleRowData) => {
	return (
		<div
			className={clsx('flex space-x-2', {
				'lg:flex-row-reverse lg:space-x-reverse lg:text-right': !noReverse && index % 2 === 0,
			})}>
			{icon && <span className='text-vercel-blue'>{icon}</span>}
			<span className='flex-grow'>{children}</span>
		</div>
	);
};

interface Hashtag {
	text: string;
}
const Hashtag = ({ text }: Hashtag) => (
	<span className='border rounded border-gray-200/60 text-gray-200/60 px-2 py-px mb-2 text-sm lg:text-base'>
		{text}
	</span>
);
