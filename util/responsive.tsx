import { useState, useEffect, useLayoutEffect } from 'react';

interface useResponsive {
	type?: 'resize' | 'color';
	from?: 'up' | 'down';
	resolution?: 'lg' | 'md' | 'sm';
}
const useResponsive = ({ type = 'resize', from = 'down', resolution = 'sm' }: useResponsive) => {
	const [matches, setMatches] = useState<Boolean | null>(null);
	const key = from === 'down' ? 'max-width' : 'min-width';
	let res = resolution === 'lg' ? 1279 : resolution === 'md' ? 990 : 767;

	useLayoutEffect(() => {
		const mediaQuery = window.matchMedia(`(${key}:${res}px)`);

		const handleChange = (event: MediaQueryListEvent) => {
			setMatches(event.matches);
		};

		mediaQuery.addEventListener('change', handleChange);
		setMatches(mediaQuery.matches);

		return () => {
			mediaQuery.removeEventListener('change', handleChange);
		};
	}, [res, key]);

	return matches;
};

export default useResponsive;
