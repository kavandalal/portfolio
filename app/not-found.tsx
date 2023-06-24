import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='text-xl space-y-9 text-center flex justify-center items-center flex-col min-h-screen'>
			<h1 className='text-4xl  text-vercel-red'>Not Found</h1>
			<p className=''>WHY ARE YOU RUNNING !!!</p>
			<p className=''>
				<Link href='/' className='text-vercel-blue' replace>
					Take Me Home
				</Link>
			</p>
		</div>
	);
}
