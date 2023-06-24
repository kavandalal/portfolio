import Particles from '@/ui/particles';

export default function Page() {
	return (
		<section>
			<Particles className='absolute inset-0 -z-10 animate-fade-in' quantity={100} />
			<div className=' text-vercel-orange'>Work In Process</div>
		</section>
	);
}
