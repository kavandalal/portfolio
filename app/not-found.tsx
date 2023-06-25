import Particles from '@/ui/particles';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='text-xl space-y-9 text-center flex justify-center items-center flex-col min-h-screen text-white'>
			<Particles className='absolute inset-0 -z-10 animate-fade-in' quantity={100} />
			<h1 className='text-4xl  text-vercel-red'>Page Not Found</h1>
			<p className=''>WHY ARE YOU RUNNING !!!</p>
			<p className=''>
				<Link href='/' className='text-vercel-blue' replace>
					Take Me Home
				</Link>
			</p>
		</div>
	);
}
