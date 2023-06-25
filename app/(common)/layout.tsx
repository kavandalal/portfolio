import { Navigation } from '@/ui/nav';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className='from-black via-zinc-600/20 to-black text-white'>
			<div className='relative min-h-screen '>
				<Navigation />
				<div className='pt-24 md:pt-32 min-h-screen'>
					<div className='container flex items-center justify-center min-h-[60vh] px-4 mx-auto'>{children}</div>
				</div>
			</div>
		</main>
	);
}
