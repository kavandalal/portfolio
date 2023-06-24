import { Navigation } from '@/ui/nav';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='relative min-h-screen '>
			<Navigation />
			{children}
		</div>
	);
}
