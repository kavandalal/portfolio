import Particles from '@/ui/particles';
import { Project, project as projects } from '@/lib/project';
import { Card } from '@/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
	return (
		<section className='w-full'>
			<Particles className='absolute inset-0 -z-10 animate-fade-in' quantity={100} />
			{/* <div className=' text-vercel-orange'>Work In Progress</div> */}
			<div className='grid w-full grid-cols-1 sm:grid-cols-2 gap-8 mx-auto lg:gap-16 pb-12'>
				{projects.map((item, index) => (
					<ProjectItem key={index} data={item} />
				))}
			</div>
		</section>
	);
}

const ProjectItem = ({ data }: { data: Project }) => {
	return (
		<Card>
			<div className='p-6 flex flex-col gap-8'>
				<div className='header flex justify-between'>
					<div className='font-bold text-2xl text-blue-300'>{data.title}</div>
					<div className='flex gap-3'>
						<Link className='hover:text-blue-300' href={data.github.toString()} target='_blank'>
							<Github />
						</Link>
						{data.live && (
							<Link className='hover:text-blue-300' href={data.live.toString()} target='_blank'>
								<ExternalLink />
							</Link>
						)}
					</div>
				</div>

				<ul className='flex flex-col gap-4'>
					{data.description.map((point, ind) => (
						<li key={ind}>{point}</li>
					))}
				</ul>

				<div className='flex gap-2 flex-wrap'>
					{data?.techStack.map((item, ind) => (
						<div className='border rounder px-2 py-1 rounded' key={ind}>
							{item}
						</div>
					))}
				</div>
			</div>
		</Card>
	);
};
